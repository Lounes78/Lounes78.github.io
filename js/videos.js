'use strict';

function videos_events()
{
	const videos = [...document.querySelectorAll('video')];
	if (videos.length === 0)
		return;

	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	const desktopVideo = window.matchMedia('(min-width: 961px)');
	const visibleVideos = new Set();

	function syncControls()
	{
		videos.forEach((video) =>
		{
			video.controls = desktopVideo.matches;
		});
	}

	function pauseAll()
	{
		videos.forEach((video) => video.pause());
	}

	function playVisible()
	{
		if (document.hidden || reducedMotion.matches)
		{
			pauseAll();
			return;
		}

		visibleVideos.forEach((video) =>
		{
			const playRequest = video.play();
			if (playRequest)
				playRequest.catch(() => {});
		});
	}

	syncControls();
	desktopVideo.addEventListener('change', syncControls);

	if (!('IntersectionObserver' in window))
	{
		pauseAll();
		return;
	}

	const observer = new IntersectionObserver((entries) =>
	{
		entries.forEach((entry) =>
		{
			const video = entry.target;

			if (entry.isIntersecting)
			{
				visibleVideos.add(video);
				playVisible();
			}
			else
			{
				visibleVideos.delete(video);
				video.pause();
			}
		});
	}, { rootMargin: '180px 0px', threshold: 0.15 });

	videos.forEach((video) => observer.observe(video));

	document.addEventListener('visibilitychange', () =>
	{
		if (document.hidden)
			pauseAll();
		else
			playVisible();
	});

	reducedMotion.addEventListener('change', playVisible);
}
