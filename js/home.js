'use strict';

function home_events()
{
	const particleContainer = document.querySelector('#particles');

	if (!particleContainer || typeof window.particlesJS === 'undefined')
		return;

	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	let heroVisible = true;
	let particleInstance = null;
	let movementEnabled = null;

	function syncParticleMotion()
	{
		if (!particleInstance)
			return;

		const shouldMove = !reducedMotion.matches && heroVisible && !document.hidden;
		if (movementEnabled === shouldMove)
			return;

		movementEnabled = shouldMove;
		particleInstance.pJS.particles.move.enable = shouldMove;

		if (shouldMove)
			particleInstance.pJS.fn.vendors.draw();
	}

	window.particlesJS.load('particles', 'resources/jsons/particles.json', () =>
	{
		particleInstance = window.pJSDom[window.pJSDom.length - 1];
		movementEnabled = particleInstance.pJS.particles.move.enable;
		syncParticleMotion();

		window.requestAnimationFrame(() =>
		{
			window.requestAnimationFrame(() => particleContainer.classList.add('is_ready'));
		});
	});

	if ('IntersectionObserver' in window)
	{
		const observer = new IntersectionObserver((entries) =>
		{
			heroVisible = entries[0].isIntersecting;
			syncParticleMotion();
		}, { rootMargin: '120px 0px' });

		observer.observe(particleContainer);
	}

	document.addEventListener('visibilitychange', syncParticleMotion);
	reducedMotion.addEventListener('change', syncParticleMotion);
}
