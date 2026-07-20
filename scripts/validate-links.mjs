import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
const htmlFiles = [];
const htmlCache = new Map();
const errors = [];

async function collect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) await collect(absolute);
    if (entry.isFile() && entry.name.endsWith('.html')) htmlFiles.push(absolute);
  }
}

function routeFor(file) {
  const relative = path.relative(root, file).split(path.sep).join('/');
  if (relative === 'index.html') return '/';
  if (relative.endsWith('/index.html')) return '/' + relative.slice(0, -'index.html'.length);
  return '/' + relative;
}

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

async function resolveTarget(pathname) {
  const clean = decodeURIComponent(pathname).replace(/^\/+/, '');
  if (!clean) return path.join(root, 'index.html');

  const direct = path.join(root, clean);
  const candidates = path.extname(clean)
    ? [direct]
    : [path.join(direct, 'index.html'), direct + '.html', direct];

  for (const candidate of candidates) {
    if (await exists(candidate)) return candidate;
  }
  return candidates[0];
}

function hasFragment(document, fragment) {
  if (!fragment) return true;
  const id = decodeURIComponent(fragment.slice(1)).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`\\bid=["']${id}["']`).test(document);
}

await collect(root);

for (const file of htmlFiles) {
  const document = await readFile(file, 'utf8');
  htmlCache.set(file, document);
  const route = routeFor(file);
  const attributes = document.matchAll(/\b(href|src|poster)="([^"]+)"/g);

  for (const [, attribute, value] of attributes) {
    if (/^(?:https?:|mailto:|tel:|data:|javascript:)/.test(value)) continue;

    const url = new URL(value, `https://b-lounes.github.io${route}`);
    const target = await resolveTarget(url.pathname);

    if (!(await exists(target))) {
      errors.push(`${route}: ${attribute}="${value}" does not resolve inside dist/`);
      continue;
    }

    if (url.hash && target.endsWith('.html')) {
      const targetDocument = htmlCache.get(target) ?? (await readFile(target, 'utf8'));
      htmlCache.set(target, targetDocument);
      if (!hasFragment(targetDocument, url.hash)) {
        errors.push(`${route}: ${value} points to a missing fragment`);
      }
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Validated internal links and assets across ${htmlFiles.length} HTML pages.`);
}
