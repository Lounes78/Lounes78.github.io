'use strict';

function revealPhoto()
{
	const photo = document.querySelector('#about_section .photo');
	if (!photo)
		return;

	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reducedMotion || !('IntersectionObserver' in window))
	{
		photo.classList.add('is_visible');
		return;
	}

	photo.classList.add('is_preparing');
	const observer = new IntersectionObserver((entries) =>
	{
		if (!entries[0].isIntersecting)
			return;

		photo.classList.add('is_visible');
		observer.disconnect();
	}, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });

	observer.observe(photo);
}

function revealSections()
{
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window))
		return;

	const elements = document.querySelectorAll(
		'#about_section .section_title, #about_section .p_1, .experience_item, ' +
		'#projects_section .project, #projects_section .other_project, ' +
		'#education_section .education_list > li, #education_section .language_card, ' +
		'#contact_section .social_line'
	);

	elements.forEach((element) => element.classList.add('scroll_reveal'));

	const observer = new IntersectionObserver((entries) =>
	{
		entries.forEach((entry) =>
		{
			if (!entry.isIntersecting)
				return;

			entry.target.classList.add('is_revealed');
			observer.unobserve(entry.target);
		});
	}, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

	elements.forEach((element) => observer.observe(element));
}

function syncContactLabelWidths()
{
	document.querySelectorAll('#contact_section .social_link').forEach((link) =>
	{
		const text = link.querySelector('.social_text');
		const label = text?.querySelector('span');
		if (!text || !label)
			return;

		const expandedWidth = Math.ceil(label.getBoundingClientRect().width) + 2;
		link.style.setProperty('--size', `${expandedWidth}px`);
	});
}

document.addEventListener('DOMContentLoaded', () =>
{
	document.documentElement.scrollLeft = 0;

	if (typeof header_events === 'function')
		header_events();
	if (typeof home_events === 'function')
		home_events();
	if (typeof videos_events === 'function')
		videos_events();

	revealPhoto();
	revealSections();
	syncContactLabelWidths();

	if (document.fonts)
		document.fonts.ready.then(syncContactLabelWidths);
});
