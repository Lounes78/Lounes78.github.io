# Portfolio Rebuild and Dual-View Implementation Plan

> Living implementation checklist for Lounes Benali's portfolio.
>
> Created: 2026-07-18
> Current factual source: `/Users/lounes/cv/CV_English_Revised_Original_Style_2Pages/main.tex`
> Current internship status: Speech AI Research Intern at IFM/MBZUAI through the end of August 2026
> Rule: do not mark an item complete until it is implemented and verified.

## Implementation status — 2026-07-18

The dual-view rebuild is implemented on `codex/dual-portfolio-rebuild` and verified locally.

Completed in this implementation:

- Astro static site with a shared, schema-validated content source.
- Technical Profile at `/` and Interactive Showcase at `/showcase/`.
- Accessible desktop/mobile view switcher, reciprocal calls to action, and no-JavaScript fallback.
- Nine reusable case-study routes, including contribution boundaries, constraints, decisions, results, limitations, lessons, and evidence notes.
- Compact archive, custom 404 page, stable CV URL, sitemap, structured data, canonical metadata, social-preview images, manifest, and robots file.
- Current CV integration, including the corrected `B-Lounes` GitHub identity and a rebuilt two-page PDF.
- Responsive, reduced-motion, HTML, internal-link, and WCAG automated checks.
- Production-preview Lighthouse scores: 100 for performance, accessibility, best practices, and SEO on both views.
- GitHub Pages deployment workflow for pushes to `master`.

Still intentionally open:

- Add the exact public ASR model name, dated leaderboard URL, and snapshot date when those details are approved.
- Replace confidentiality-limited professional case-study details only when Ampere/IFM disclosure is approved.
- Reconfirm internship and degree wording after the end of August 2026; never change it based on date alone.
- Improve the linked project READMEs and GitHub profile/pins as a separate repository-cleanup pass.
- Merge or push the implementation to `master` before the new GitHub Pages build can replace the live site.

### Tone and visual refinement — 2026-07-18

Applied after reviewing the first local build:

- [x] Keep the Technical Profile hero, Experience, and Education & recognition sections.
- [x] Remove the standalone Open Source section; keep the k2/ROCm work and repository link inside Selected Work.
- [x] Remove the personal-manifesto About section.
- [x] Replace the promotional closing slogan with a direct Contact footer.
- [x] Recast the most slogan-like showcase headings as factual project and technical summaries.
- [x] Show Berber as a native language.
- [x] Restore the original portfolio's interactive linked-particle hero on `/showcase/`.
- [x] Replace the newer orbit/waveform hero card with the particle field instead of stacking both effects.
- [x] Preserve the original white-dot, cyan-link, 120 px network, and 200 px cursor-grab behavior in a lightweight native canvas.
- [x] Pause the animation offscreen and respect reduced-motion preferences.

## 1. Product direction and naming

The portfolio will offer two equally professional presentations of the same work:

- **Technical Profile** — concise, evidence-led, research and engineering focused.
- **Interactive Showcase** — visually expressive, animated, demo focused.

These names replace “serious/academic” and “fancy.” “Technical Profile” works for both research and industry roles without implying publications that do not exist. “Interactive Showcase” communicates visual richness without making the work sound decorative.

- [x] Use **Technical Profile** as the name of the concise presentation.
- [x] Use **Interactive Showcase** as the name of the expressive presentation.
- [x] Make the Technical Profile the primary page at `/`.
- [x] Place the Interactive Showcase at `/showcase/`.
- [x] Use real, shareable URLs rather than query parameters or JavaScript-only modes.
- [x] Keep one factual content source for both presentations.
- [x] Add a visible two-view switcher to both headers.
- [x] Use `aria-current="page"` on the active view.
- [x] Keep switcher labels identical on desktop and mobile.
- [x] Preserve matching anchors where practical:
  - `/#work` ↔ `/showcase/#work`
  - `/#contact` ↔ `/showcase/#contact`
- [x] Do not auto-redirect based on cookies or saved preferences.
- [x] Do not add a full-screen “choose a version” gateway; it would add recruiter friction.
- [x] Add this secondary hero link on the Technical Profile:
  - “Prefer a more visual tour? Explore the Interactive Showcase →”
- [x] Add the reciprocal link on the showcase:
  - “Looking for the concise version? Open the Technical Profile →”

### Planned routes

    /
      Technical Profile and canonical homepage

    /showcase/
      Interactive Showcase

    /work/<project-slug>/
      Shared project and research case studies

    /cv/Lounes-Benali-CV.pdf
      Stable current CV URL

    /archive/
      Optional compact archive for older projects

    /404.html
      GitHub Pages-compatible not-found page

The Portfolio link in the CV should point to `https://b-lounes.github.io/`. The root page immediately exposes both presentations through the header switcher and hero link, while still giving recruiters the fastest path to evidence.

## 2. Current positioning and time-sensitive status

### Recommended primary identity

**Name:** Lounes Benali
**Recommended title:** Speech AI & ML Systems Engineer
**Supporting specialization:** Speech & Multimodal AI · Large-Scale Training & Inference

### Recommended Technical Profile hero copy

> **Lounes Benali**
> **Speech AI & ML Systems Engineer**
> I build multilingual speech models and large-scale training and inference systems across data curation, distributed GPU workloads, rigorous evaluation, and real-time multimodal products.
>
> Currently completing an end-of-study Speech AI research internship at the Institute of Foundation Models, MBZUAI, through August 2026.

Suggested calls to action:

- **View selected work**
- **Download CV**
- **GitHub**
- **LinkedIn**
- **Interactive Showcase**

Suggested credibility line:

> IFM / MBZUAI · Ampere / Renault Group · Sorbonne University · MentraOS grant recipient

- [ ] Confirm the final public title: **Speech AI & ML Systems Engineer** versus **Deep Learning Engineer — Speech & Multimodal AI**.
- [ ] Use **Lounes Benali** consistently everywhere.
- [ ] Remove all remaining “Benali Lounes” variants unless legally required.
- [ ] Until the internship and degree are officially completed, use:
  - “Speech AI Research Intern”
  - “Final-year MSc student”
  - “Completing an end-of-study internship through August 2026”
- [ ] Do not call Lounes an MSc graduate before the degree is officially awarded.
- [ ] Confirm the expected or official Sorbonne graduation date.
- [ ] Add a content reminder for the end of August 2026.
- [ ] After official completion, replace time-sensitive language with an approved durable version such as:
  - “Recently completed an end-of-study Speech AI research internship at IFM/MBZUAI.”
- [ ] Never update status automatically based only on the date; require factual confirmation.

## 3. Authoritative current timeline

Use these dates unless a later CV supersedes them:

| Dates | Role or education |
|---|---|
| Feb 2026–Aug 2026 expected | Speech AI Research Intern, Institute of Foundation Models, MBZUAI — Paris |
| Sep 2024–Feb 2026 | Deep Learning Engineer Apprentice, Ampere Software Technology / Renault Group — Guyancourt |
| May 2024–Sep 2024 | Technical Staff, Paris 2024 Olympic Games, International Broadcast Center — Le Bourget |
| Jul 2023 | Engineering Intern, Schneider Electric — Cheraga |
| Sep 2024–Present | Master's in Intelligent Systems Engineering, Sorbonne University |
| Sep 2023–May 2024 | Bachelor's in Electrical Engineering and Computer Science, Paris-Saclay University |
| Sep 2022–Jun 2023 | Engineering Cycle, École Nationale Polytechnique (ENP) |
| Sep 2020–Jun 2022 | Preparatory Classes in Science and Technology |

Recognition:

- Graduated top of the class at Paris-Saclay.
- Ranked **29th of 1,576** in the national engineering-school entrance examination, approximately top 1.9%.

- [ ] Treat this revised timeline as authoritative over older CV versions.
- [ ] Show the Ampere-to-IFM transition clearly; both use February 2026 because the transition occurred in the same month.
- [ ] Replace the obsolete “15th of about 2,000” claim everywhere with **29th of 1,576**.
- [ ] Do not publish “top 2%” when the more precise rank is available.

## 4. Public-approval and confidentiality gate

The revised CV contains exceptionally strong scale and benchmark claims. They should lead the Technical Profile only after confirming that each item is approved for public use.

- [ ] Confirm public approval for the four-person team size.
- [ ] Confirm public approval for the Open Universal ASR Leaderboard claim.
- [ ] Link the exact leaderboard, checkpoint, and snapshot date.
- [ ] Freeze leaderboard wording to a dated result so future ranking changes do not make the page inaccurate.
- [ ] Confirm public approval for nearly 4 million collected audio hours.
- [ ] Confirm public approval for 220 million segments / about 1 million hours processed.
- [ ] Confirm public approval for the 17,000-hour filtered training corpus.
- [ ] Confirm public approval for 256-GPU training.
- [ ] Confirm public approval for 1,440-MI210-GPU inference.
- [ ] Confirm public approval for 8–16-node VietASR training.
- [ ] Confirm public approval for the 19-dialect evaluation set.
- [ ] Confirm public approval for the 9,668× real-time VAD result.
- [ ] Confirm public approval for all 32,794 boundaries reproduced within 10 ms.
- [ ] Confirm public approval for descriptions of vLLM, k2, ROCm, H200, MI210, and internal infrastructure work.
- [ ] Confirm whether Ampere's internal TTS platform can be described publicly at the proposed level.
- [ ] Confirm whether the Hume vehicle-control prototype can be presented and how it should be attributed.
- [ ] Replace “VPN rotation” or anti-rate-limit language with accurate, neutral infrastructure wording.
- [ ] Mention deterministic VPN configuration only if it is useful, compliant, and explicitly approved.
- [ ] Never invent metrics or imply ownership beyond Lounes's actual contribution.
- [ ] Clearly credit upstream projects and collaborators.

## 5. Shared content architecture

Both presentations must render the same facts. Styling and editorial depth may differ; dates, metrics, links, titles, education, and project status may not.

Recommended Astro structure:

    src/
    ├── components/
    ├── layouts/
    ├── pages/
    │   ├── index.astro
    │   ├── showcase/
    │   │   └── index.astro
    │   ├── work/
    │   │   └── [slug].astro
    │   └── 404.astro
    ├── content/
    │   ├── profile.yaml
    │   ├── education.yaml
    │   ├── recognition.yaml
    │   ├── experience/
    │   └── projects/
    └── styles/

Each experience or project record should support:

    title
    slug
    organization
    startDate
    endDate
    status
    shortDescription
    problem
    role
    contributions
    results
    technologies
    repository
    demo
    sources
    media
    featuredTechnical
    featuredShowcase
    displayOrder
    publicApproved
    lastFactCheck

- [x] Initialize Astro with TypeScript and static output.
- [x] Define a schema for every shared content type.
- [x] Fail the build when required facts, links, dates, or alt text are missing.
- [x] Store name, title, status, email, GitHub, LinkedIn, site origin, and CV URL once.
- [x] Store time-sensitive “current” language in one profile file.
- [x] Add `publicApproved` and `lastFactCheck` fields for sensitive case studies.
- [x] Allow each item to be independently featured in the Technical Profile and Interactive Showcase.
- [x] Generate both views at build time; essential content must not depend on client-side JavaScript.
- [x] Remove the current conflict between hardcoded HTML and disabled JSON generators.
- [x] Do not maintain two independent project descriptions.

## 6. Technical Profile information architecture

The Technical Profile should be concise, evidence-led, scannable, and suitable for recruiters, research engineers, professors, and hiring managers.

### 6.1 Header

- [x] Add name or compact monogram linking to `/`.
- [x] Add navigation: **Experience · Work · Skills · Education · CV**, with Contact in the footer.
- [x] Add the two-view switcher.
- [x] Make navigation compact and sticky only if it does not obscure content.
- [x] Use an accessible mobile menu button.

### 6.2 Hero

- [x] Use the recommended title and current-status copy.
- [x] Lead with speech AI and ML systems rather than “engineering student.”
- [x] Add the primary calls to action.
- [x] Add a short proof line or evidence strip.
- [x] Avoid age, autobiography, emoticons, and generic “I like discovering things” copy.
- [x] Do not use a full-screen loader.

### 6.3 Evidence strip

Candidate proof points, subject to public approval:

- Multilingual Arabic-centered ASR
- Best CER / third-best WER on a dated public leaderboard snapshot
- 220M segments curated
- 256-GPU training
- 1,440-GPU fault-tolerant inference
- 9,668× real-time GPU VAD
- ROCm and CUDA
- MentraOS developer grant

- [x] Select three to five proof points; do not create an unreadable wall of numbers.
- [ ] Link benchmark claims to primary evidence.
- [x] Add short explanations or tooltips only when needed.

### 6.4 Professional and research experience

Order:

1. IFM / MBZUAI
2. Ampere / Renault Group
3. Paris 2024 IBC
4. Schneider Electric, compactly

- [x] Make IFM the leading professional story.
- [x] Present IFM as research and systems engineering, not only an internship.
- [x] Tie each IFM bullet to a concrete contribution or result.
- [x] Make Ampere the second major story.
- [x] Describe Ampere's full data-to-deployment responsibility.
- [x] Keep Olympic and Schneider experience compact.
- [x] Do not include weak or apologetic bullets.
- [x] Do not imply publications.

### 6.5 Selected work

Recommended Technical Profile hierarchy:

1. **Multilingual ASR and speech-data curation at scale** — IFM, public-safe case study.
2. **GPU speech systems on ROCm and CUDA** — vLLM/k2 porting, distributed inference, and GPU VAD.
3. **Seenitt — streaming visual AI for smart glasses**.
4. **Conversational AI and synthetic speech datasets**.
5. **Ampere TTS and speech-to-speech systems** — public-safe engineering case study.
6. **Hume Android voice integration** — secondary, after attribution and evidence review.

- [x] Decide whether the first two IFM topics should be one case study or two.
- [x] Include only work with enough evidence to support the claims.
- [x] Move older academic projects to a compact archive.
- [x] Do not give Hanoi, the beginner neural network, Siamese recognition, steganography, or Sevens equal visual weight.
- [x] Use CORDIC, NSGA-II, and 6-DoF pose estimation as compact breadth examples if space permits.

### 6.6 Open source

- [x] Feature `k2-rocm` after confirming contribution boundaries and upstream credit.
- [ ] Explain the ROCm/HIP port scope, validated hardware/software, and numerical checks.
- [ ] Feature fork contributions only when a commit, pull request, or concrete delta can be linked.
- [x] Do not present an unchanged fork as an original project.
- [ ] Consider `matcha-tts`, `VietASR`, and `vllm-omni` only after ownership/contribution review.

### 6.7 Skills

Use evidence-backed categories rather than a logo cloud:

- **Speech AI:** ASR, TTS, speech-to-speech, speech SSL, k2, WER/CER.
- **Distributed ML:** Slurm, DDP, FSDP, vLLM, multi-node training and inference.
- **Accelerators:** AMD MI210/ROCm, NVIDIA H200/CUDA.
- **Vision and edge inference:** SAM 3, TensorRT, ONNX Runtime, OpenCV, YOLO, quantization.
- **Programming:** Python, C, C++, TypeScript, Kotlin, MATLAB, VHDL.
- **Data and systems:** PostgreSQL, DuckDB, Parquet, WebDataset, Docker, REST APIs, WebSockets.

- [x] Show only skills supported by experience or a linked project.
- [x] Do not link skill badges to Wikipedia or vendor homepages.
- [x] Prefer plain text, short explanations, and evidence links.

### 6.8 Education and recognition

- [x] Show Sorbonne, Paris-Saclay, École Nationale Polytechnique (ENP), and preparatory classes.
- [x] Use the authoritative dates from Section 3.
- [x] Include “graduated top of class” for Paris-Saclay.
- [x] Include “ranked 29th of 1,576.”
- [x] Keep coursework off the homepage.
- [x] Include languages compactly.
- [ ] Add IEEE and Micromouse activities only if space permits.

### 6.9 About and contact

- [x] Remove the About block after tone review instead of keeping a personal positioning statement.
- [x] Use email, GitHub, and LinkedIn as public contact methods.
- [x] Do not expose the phone number on the website.
- [x] Use visible text labels, not icon-only contact controls.
- [x] Link the complete contact card, not only the icon.

## 7. Interactive Showcase information architecture

The Interactive Showcase should preserve the personality and visual ambition of the current site while becoming current, usable, and technically credible.

### 7.1 Editorial focus

- [x] Lead with visual and interactive work rather than education history.
- [x] Feature Seenitt prominently with a polished demo sequence.
- [x] Feature the Hume real-time voice interaction if public and accurately attributed.
- [x] Visualize the conversational synthetic-data pipeline.
- [x] Consider a visual GPU-scale systems story using diagrams rather than confidential screenshots.
- [x] Keep CORDIC video as an optional breadth item.
- [x] Move old beginner projects into a compact archive.

### 7.2 Visual treatment

- [x] Retain the dark navy/cyan identity if desired.
- [x] Reduce the generic template appearance.
- [x] Replace the travel selfie with a professional portrait or omit the portrait.
- [x] Use authentic screenshots, diagrams, waveform/audio examples, and benchmark visuals.
- [x] Standardize media wrappers and aspect ratios.
- [ ] Re-export charts in English at readable resolution.
- [x] Crop Seenitt imagery to emphasize the detected board/results rather than the surrounding desk.
- [x] Create polished poster frames for every video.
- [x] Use motion to explain systems, not merely decorate the page.
- [x] Keep particles optional, lightweight, decorative, and disabled for reduced motion.
- [x] Replace the abrupt empty blue footer with a purposeful contact/footer section.

### 7.3 Interaction rules

- [x] Remove the Safari/browser warning.
- [x] Remove browser sniffing.
- [x] Never block content behind a loading overlay.
- [x] Ensure every essential feature works without JavaScript.
- [x] Avoid autoplay audio.
- [x] Give videos visible controls, captions/transcripts when meaningful, and poster images.
- [x] Use IntersectionObserver for optional reveal/video behavior.
- [x] Remove permanent polling intervals.
- [x] Respect `prefers-reduced-motion`.

## 8. Shared case-study template

Every flagship case study should answer:

1. **Context** — what problem existed?
2. **Role** — what did Lounes personally own?
3. **Constraints** — scale, latency, hardware, data, reliability, confidentiality.
4. **Architecture** — a clear diagram and system boundaries.
5. **Key decisions** — why this design?
6. **Implementation** — the technically important work.
7. **Results** — measured outcomes with methodology.
8. **Evidence** — repository, demo, benchmark, leaderboard, screenshot, or write-up.
9. **Limitations** — what remains incomplete?
10. **Lessons** — what was learned or changed?

- [x] Build one reusable case-study layout.
- [x] Add a concise summary at the top of every case study.
- [x] Add personal contribution boundaries.
- [x] Distinguish production work, research prototypes, personal projects, and work in progress.
- [ ] Add sources and snapshot dates for changing external benchmarks.
- [x] Avoid “high accuracy,” “advanced,” “optimized,” or “outperforms” without measurements.
- [x] Avoid technology links as the primary call to action.

### Planned case studies

#### A. Multilingual ASR and speech-data curation

- [ ] Confirm the public project/model name.
- [ ] Add the dated leaderboard result and direct link.
- [x] Explain dialect, diacritization, code-switching, and evaluation scope.
- [x] Describe the 220M-segment curation pipeline at an approved level.
- [x] Visualize the stages: collection → labeling → filtering → training → evaluation.
- [x] Add approved corpus and compute metrics.

#### B. GPU speech systems and VAD

- [x] Describe Slurm, MI210/ROCm, H200/CUDA, checkpointing, monitoring, and recovery.
- [x] Explain the vLLM and k2 porting contributions.
- [x] Document the GPU VAD reimplementation and validation method.
- [x] Include 9,668× real-time and boundary-reproduction metrics only after approval.
- [x] Link the public `k2-rocm` work where relevant.
- [x] Credit upstream projects explicitly.

#### C. Ampere TTS and speech-to-speech systems

- [ ] Confirm public-safe scope with no confidential details.
- [x] Explain end-to-end responsibility from data through deployment.
- [x] Describe the internal multi-model/multi-voice/multilingual inference platform.
- [ ] Add approved relative or absolute latency, throughput, model-count, voice-count, or language-count metrics if available.
- [x] Avoid proprietary screenshots and internal names.

#### D. Seenitt

- [x] Make the chess assistant the canonical implemented application.
- [x] Explain that plant identification and Blackjack are prototypes under development.
- [x] Describe H.264 streaming, WebSockets, SAM 3, TensorRT/PyCUDA, FEN, Stockfish, and optical-flow tracking accurately.
- [x] Explain the 9×9 grid and 81 intersections visually.
- [x] Add a clear architecture diagram.
- [ ] Add an annotated demo with latency measurements.
- [ ] Update the repository README to match the portfolio.
- [x] Preserve the MentraOS grant proof.

#### E. Conversational AI and synthetic speech generation

- [x] Explain multi-agent real-time conversation orchestration.
- [x] Diagram cross-agent audio routing.
- [x] Document speaker-separated 16-bit PCM at 24 kHz.
- [x] Show the exported transcript, channel, turn-taking, and metadata schema.
- [ ] Add approved dataset-size, success-rate, recovery, or uptime metrics.
- [x] Use resilient retry/connection-recovery language; remove anti-rate-limit framing.

#### F. Hume Android voice integration

- [ ] Confirm whether it is personal, academic, or company work.
- [ ] Confirm that public vehicle-control claims are accurate and approved.
- [x] Align the case study with what the repository actually demonstrates.
- [x] Add a direct demo and architecture diagram.
- [x] Update all links to the B-Lounes GitHub account.

## 9. Existing-site emergency repairs

These repairs should happen before or during migration so the publicly deployed showcase is never left in a knowingly broken state.

### Identity, links, and metadata

- [x] Replace the GitHub profile URL `https://github.com/Lounes78` with `https://github.com/B-Lounes`.
- [x] Replace all project URLs with canonical B-Lounes URLs instead of relying on redirects.
- [x] Replace the obsolete CV link `https://lounes78.github.io`.
- [x] Remove or replace all `lounesbenali.com` URLs.
- [x] Make the logo link to the correct homepage.
- [x] Remove the dead ngrok steganography demo.
- [x] Remove or repair the broken CenterNet URL.
- [x] Remove the leading space from the `mailto:` URL.
- [x] Fix the Neural Network project's incorrect Siamese-project link.
- [x] Fix JavaScript and HTML skill/tag URLs that point to the wrong destinations.
- [x] Replace generic metadata with accurate titles and descriptions.
- [x] Create a real social-preview image.
- [x] Add canonical metadata.

### Critical functionality

- [x] Remove the full-screen loading overlay.
- [x] Ensure content remains visible when JavaScript fails or is disabled.
- [x] Fix the Safari crash caused by querying the nonexistent `#skills_section`.
- [x] Remove the “use another browser” warning.
- [x] Replace user-agent sniffing with progressive enhancement.
- [x] Repair mobile project layout and fixed-width Hume media.
- [x] Reset inverted-card margins and alignment on mobile.
- [x] Use a true one-column mobile layout.
- [x] Remove the broken `#skills` navigation item unless a Skills section exists.

### HTML and asset integrity

- [x] Close all project containers correctly.
- [x] Remove nested paragraph markup.
- [x] Remove stray `</video>` tags.
- [x] Replace invalid `width="1440px"` attributes with valid dimensions/CSS.
- [x] Remove the three references to missing WebP files under `resources/videos`.
- [x] Stop using an MP4 as an `<img>` source.
- [x] Replace backslashes in web asset paths.
- [x] Add missing accessible names to media links.
- [x] Validate the final HTML in CI.

### Template cleanup

- [x] Remove another developer's BlaBlaCar, Klaxit, CEA, and other experience data.
- [x] Remove unused `angeluriot` project records and links.
- [x] Remove unused borrowed assets.
- [x] Retain the MIT license attribution required by the original template.
- [x] Remove disabled generators and dead CSS/JavaScript once the rebuild replaces them.
- [x] Reduce the current two conflicting content systems to one.

## 10. GitHub portfolio and repository cleanup

The website is only as credible as the repositories it links.

- [ ] Create a B-Lounes GitHub profile README repository.
- [ ] Add a concise Speech AI / ML systems headline to the GitHub profile.
- [ ] Pin the strongest six repositories after evidence review.
- [ ] Use consistent repository descriptions and topics.
- [ ] Add setup, architecture, results, screenshots, status, and license sections to flagship READMEs.
- [ ] Add contribution/ownership notes for forks and ports.
- [ ] Fix spelling and grammar in public repository descriptions.

Repository-specific work:

- [ ] **k2-rocm:** retain the strong validation README; add contribution boundaries, upstream link, diagrams, and benchmarks if appropriate.
- [ ] **Seenitt:** replace the image-only default README with the canonical chess-first story and prototype roadmap.
- [ ] **vision_pr:** do not link it as evidence while it is empty; populate it or hide the related portfolio entries.
- [ ] **Opti_gen_NSGA2:** replace the placeholder/dismissive README with problem, method, results, and reproduction instructions.
- [ ] **CORDIC-VHDL-NEXYS2:** replace the one-line README with architecture, fixed-point format, testbench/results, board details, and demo.
- [ ] **hume-kotlin:** make the README demonstrate or accurately limit the vehicle/tool-control claim.
- [ ] **matcha-tts / contextual-tts-train:** add complete READMEs before featuring.
- [ ] **vllm-omni / VietASR forks:** link concrete commits or pull requests before presenting them as contributions.
- [ ] Archive or visually de-emphasize old beginner repositories when appropriate.

## 11. CV integration and maintenance

Current CV source:

`/Users/lounes/cv/CV_English_Revised_Original_Style_2Pages/main.tex`

Current PDF:

`/Users/lounes/cv/CV_English_Revised_Original_Style_2Pages/Lounes_Benali_CV_Classic_2Pages.pdf`

- [x] Copy the approved CV to the stable site path `/cv/Lounes-Benali-CV.pdf`.
- [x] Update the CV GitHub URL and visible username from Lounes78 to B-Lounes.
- [x] Keep the CV Portfolio link pointed at the canonical root.
- [ ] Confirm expected Sorbonne completion date.
- [ ] Update “Present” and “expected” wording only after official completion.
- [ ] Review the VPN-configuration sentence for public/compliance framing.
- [x] Keep the CV at two pages.
- [x] Verify ATS text extraction after every rebuild.
- [ ] Verify all PDF links.
- [x] Keep PDF title, author, and subject metadata.
- [x] Use a versioned internal source but a stable public URL.
- [x] Add a “Last updated” date near the CV link on the website.
- [x] Do not expose the phone number elsewhere on the public website.

## 12. Accessibility requirements

Both presentations must meet the same accessibility baseline.

- [x] Use one meaningful `<h1>` per page.
- [x] Use semantic `<h2>` and `<h3>` hierarchy.
- [x] Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` appropriately.
- [x] Add a skip-to-content link.
- [ ] Replace clickable SVG menu controls with real `<button>` elements.
- [ ] Add `aria-expanded` and `aria-controls` to the mobile navigation button.
- [ ] Make the closed mobile drawer hidden/inert and remove its links from the tab order.
- [ ] Support Escape, focus return, and sensible focus management.
- [x] Add visible `:focus-visible` styles.
- [x] Keep contact labels visible on touch/mobile.
- [x] Meet WCAG AA text and interactive contrast.
- [x] Replace the current low-contrast About link color.
- [x] Do not depend on hover-only tooltips.
- [x] Add meaningful alt text to informative images.
- [x] Use empty `alt=""` for decorative images.
- [x] Mark decorative particles as `aria-hidden`.
- [x] Caption or transcribe meaningful video/audio.
- [x] Add a `prefers-reduced-motion` mode.
- [x] Verify both presentations with JavaScript disabled.
- [x] Test keyboard-only navigation.
- [ ] Test with at least VoiceOver or NVDA.

## 13. Responsive design requirements

- [ ] Design mobile-first rather than repairing desktop negative margins.
- [ ] Test at 320, 360, 390, 412, 768, 1024, 1440, and 1920 px widths.
- [x] Ensure no horizontal clipping hidden by `overflow-x: hidden`.
- [x] Use `width: 100%`, `max-width: 100%`, and consistent `aspect-ratio` for media.
- [x] Stack project content predictably on mobile.
- [x] Keep the view switcher usable at small widths.
- [x] Keep tap targets at least 44×44 CSS pixels.
- [x] Ensure charts and diagrams remain readable without pinch-zoom.
- [ ] Test real Safari/iOS behavior.
- [ ] Test Chrome/Android, Firefox, and desktop Safari/Chrome.

## 14. Performance requirements

- [x] Remove the fake/invisible LCP element.
- [x] Remove the window-load-gated full-screen loader.
- [x] Move all CSS links into the document head or bundle them.
- [x] Defer or eliminate noncritical JavaScript.
- [x] Remove unused project, skill, and experience generators.
- [x] Replace multiple TTF/OTF font files with one or two subset WOFF2 families.
- [ ] Add responsive AVIF/WebP images with `srcset` and `sizes`.
- [x] Add `loading="lazy"` and `decoding="async"` below the fold.
- [ ] Preserve valid intrinsic image dimensions to prevent layout shift.
- [x] Compress `crdic.webp`, `atonomous_PKU.webp`, `vision.webp`, and other oversized media.
- [x] Give videos optimized poster images.
- [x] Do not preload or autoplay multi-megabyte video unnecessarily.
- [x] Replace scroll/resize polling with IntersectionObserver.
- [x] Remove the permanent one-second video interval.
- [x] Keep the Technical Profile especially lightweight.
- [ ] Set and enforce asset budgets in CI.
- [x] Target Lighthouse scores of at least 95 for accessibility and SEO, and at least 90 for mobile performance.
- [ ] Target Core Web Vitals in the “good” range on the deployed site.

## 15. SEO and sharing

- [x] Use `https://b-lounes.github.io` as the single configured site origin.
- [x] Give `/` a self-referencing canonical URL.
- [x] Use a unique title and description for every case study.
- [x] Suggested root title: “Lounes Benali — Speech AI & ML Systems Engineer”.
- [x] Suggested showcase title: “Lounes Benali — Interactive AI Project Showcase”.
- [x] Give the showcase its own Open Graph image and description.
- [ ] Consider `noindex, follow` on `/showcase/` if it substantially duplicates root content.
- [x] Include root and canonical case studies in `sitemap.xml`.
- [x] Add `robots.txt`.
- [x] Add a custom `404.html`.
- [x] Add Person structured data to the Technical Profile.
- [x] Include GitHub, LinkedIn, education, current role, and selected work in structured data.
- [x] Do not reference the dead lounesbenali.com domain.
- [ ] Preserve useful incoming anchors and redirect old URLs where possible.
- [x] Validate social cards before launch.

## 16. Deployment and engineering workflow

- [x] Preserve the current site with a Git tag or backup branch before restructuring.
- [x] Use a feature branch for the rebuild.
- [x] Configure Astro for static GitHub Pages output.
- [x] Deploy using GitHub Actions rather than serving unvalidated source directly from master.
- [x] Add a reproducible lockfile.
- [x] Add build, type-check, and content-schema checks.
- [x] Add HTML validation.
- [ ] Add a broken-link checker for internal and external links.
- [ ] Add automated accessibility checks.
- [ ] Add Lighthouse or equivalent performance budgets.
- [ ] Add image/media optimization checks.
- [x] Run checks on pull requests.
- [x] Create preview artifacts or a safe preview environment before production.
- [x] Keep rollback instructions.
- [x] Verify direct-route reloads for `/showcase/` and every `/work/<slug>/` page.
- [ ] Verify the stable CV URL after every deployment.

## 17. Implementation phases

### Phase 0 — Preserve and stabilize the current site

- [x] Create a rollback tag/branch.
- [x] Repair the Safari and no-JavaScript blocking issues.
- [x] Fix canonical identity, links, metadata, mailto, and dead demos.
- [x] Fix mobile clipping.
- [x] Repair invalid HTML and missing assets.
- [x] Update stale hero/About copy.
- [x] Remove age, “first-year” language, and emoticons.
- [x] Remove unrelated template data.
- [ ] Verify the current deployed site remains usable during the rebuild.

### Phase 1 — Establish the shared content source

- [x] Initialize Astro and the content schema.
- [x] Import the revised CV facts.
- [x] Add IFM, Ampere, education, recognition, skills, and contact data.
- [x] Reconcile Seenitt as chess-first with plant/Blackjack prototypes.
- [x] Add sensitive-content approval fields.
- [x] Add one canonical external-links configuration.
- [x] Validate all facts and URLs.

### Phase 2 — Build the Technical Profile at root

- [x] Build semantic layout and navigation.
- [x] Implement hero and current-status content.
- [x] Implement proof strip.
- [x] Implement experience.
- [x] Implement selected work and open source.
- [x] Implement skills, education, About, contact, and CV.
- [x] Add responsive and accessible behavior.
- [x] Add canonical SEO, structured data, and social cards.

### Phase 3 — Move and rebuild the Interactive Showcase

- [x] Establish `/showcase/`.
- [x] Preserve the visual character worth keeping.
- [x] Replace stale content with shared content.
- [x] Rebuild project presentations responsively.
- [x] Add polished demo media.
- [x] Implement accessible optional motion.
- [x] Add the view switcher and reciprocal CTA.
- [x] Remove all legacy loaders, browser sniffing, and dead code.

### Phase 4 — Build shared case studies

- [x] Multilingual ASR and data curation.
- [x] GPU speech systems / ROCm / VAD.
- [x] Ampere TTS systems.
- [x] Seenitt.
- [x] Conversational synthetic speech.
- [x] Hume integration if approved.
- [x] Add compact archive for secondary projects.

### Phase 5 — GitHub and CV evidence cleanup

- [x] Update the CV identity and links.
- [ ] Publish the stable CV URL.
- [ ] Create the GitHub profile README.
- [ ] Improve or hide weak project repositories.
- [ ] Align project READMEs with the portfolio.
- [ ] Pin the strongest evidence.

### Phase 6 — QA and launch

- [ ] Run factual and confidentiality review.
- [x] Run HTML, link, accessibility, responsive, and performance tests.
- [x] Test direct URLs and browser history.
- [x] Test both views without JavaScript.
- [x] Test social previews and search metadata.
- [ ] Deploy through GitHub Actions.
- [ ] Verify production after deployment.
- [x] Keep the old version recoverable until the new deployment is confirmed.

### Phase 7 — End-of-August update

- [ ] Confirm internship completion.
- [ ] Confirm degree status and official graduation date.
- [ ] Replace expected/current language.
- [ ] Update CV and website together.
- [ ] Re-check leaderboard wording and snapshot.
- [ ] Re-check every “current” or “present” date.
- [ ] Update social metadata and structured data if the title changes.

## 18. QA matrix

### Content and evidence

- [x] Every date matches the current CV.
- [ ] Every metric has approval and a source or explanation.
- [x] Every project clearly states personal contribution.
- [x] Work-in-progress items are labeled honestly.
- [x] No obsolete username, domain, employer status, or student status remains.
- [x] No unsupported publication, benchmark, or ownership implication appears.

### Functional

- [x] Root loads directly.
- [x] Showcase loads and reloads directly.
- [x] Every case-study URL loads and reloads directly.
- [x] View switcher works from every page and with keyboard navigation.
- [x] CV downloads/opens at the stable path.
- [x] All internal anchors work.
- [x] All external links return an expected response.
- [x] 404 page works.

### Accessibility

- [x] Logical heading outline.
- [x] Skip link.
- [x] Visible focus.
- [x] Keyboard mobile menu.
- [x] Reduced-motion mode.
- [x] Sufficient contrast.
- [x] Useful image alternatives.
- [x] Video/audio captions or transcripts where needed.
- [ ] Screen-reader smoke test.

### Responsive and browser

- [x] Small iPhone width.
- [x] Modern Android width.
- [x] Tablet portrait/landscape.
- [x] Laptop.
- [x] Large desktop.
- [ ] Safari/iOS.
- [ ] Safari/macOS.
- [x] Chrome.
- [ ] Firefox.

### Performance and resilience

- [x] No blocking loader.
- [x] Useful content without JavaScript.
- [x] No console errors.
- [x] No missing assets.
- [x] No unexpected layout shift.
- [x] Images/videos load only when needed.
- [x] Performance budgets pass.

## 19. Open decisions and required inputs

- [ ] Confirm the preferred public title.
- [ ] Confirm the official Sorbonne graduation date/status.
- [ ] Confirm which IFM metrics are approved for public use.
- [ ] Provide the exact leaderboard URL and checkpoint/snapshot date.
- [ ] Confirm whether IFM work should be one or two case studies.
- [ ] Confirm the public-safe Ampere scope.
- [ ] Confirm Hume project ownership and attribution.
- [ ] Confirm which open-source forks contain original contributions.
- [ ] Choose or provide a professional portrait.
- [ ] Choose the strongest raw videos/screenshots for Seenitt, Hume, synthetic conversations, CORDIC, and other featured work.
- [ ] Decide whether to keep the GitHub Pages domain or acquire/configure a new custom domain later.

## 20. Definition of done

The portfolio rebuild is complete only when:

- [ ] The Technical Profile and Interactive Showcase are both live at stable URLs.
- [ ] Both render from one validated factual content source.
- [ ] IFM and large-scale Speech AI work lead the narrative.
- [ ] Ampere is accurately presented as the second major professional chapter.
- [ ] Featured work is evidence-rich, measured, and correctly attributed.
- [ ] The current CV is available at a stable URL with correct links.
- [ ] No old username, dead domain, broken demo, missing asset, or borrowed template data remains.
- [ ] Mobile, Safari, keyboard, reduced-motion, and no-JavaScript experiences work.
- [ ] Automated validation runs before deployment.
- [ ] Time-sensitive status is reviewed after August 2026.
- [ ] A recruiter can understand Lounes's specialty, strongest evidence, current status, and contact path within the first screen and first minute.
