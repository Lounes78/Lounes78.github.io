'use strict';

function header_events()
{
	const headerWrapper = document.querySelector('#header_div');
	const header = document.querySelector('#header');
	const openButton = document.querySelector('#header .menu_icon');
	const menuPanel = document.querySelector('#menu_div');
	const closeButton = document.querySelector('#menu_div .menu_icon');
	const backdrop = document.querySelector('#menu_backdrop');

	if (!headerWrapper || !header || !openButton || !menuPanel || !closeButton || !backdrop)
		return;

	const desktopMenu = document.querySelector('#header .menu');
	const desktopQuery = window.matchMedia('(min-width: 1121px)');
	let menuOpen = false;
	let lastScrollTop = Math.max(window.scrollY, 0);
	let scrollFrame = null;

	function focusableMenuItems()
	{
		return [...menuPanel.querySelectorAll('a[href], button:not([disabled])')]
			.filter((element) => element.getClientRects().length > 0);
	}

	function openMenu()
	{
		if (desktopQuery.matches)
			return;

		menuOpen = true;
		menuPanel.hidden = false;
		menuPanel.inert = false;
		menuPanel.setAttribute('aria-hidden', 'false');
		menuPanel.getBoundingClientRect();
		menuPanel.style.transform = 'translateX(0)';
		menuPanel.style.boxShadow = '-10px 0 30px rgba(0, 0, 0, 0.7)';
		openButton.setAttribute('aria-expanded', 'true');
		backdrop.tabIndex = 0;
		document.body.classList.add('menu_open');
		headerWrapper.style.top = '0';
		closeButton.focus();
	}

	function closeMenu(restoreFocus = false)
	{
		if (!menuOpen && menuPanel.getAttribute('aria-hidden') === 'true')
			return;

		menuOpen = false;
		menuPanel.setAttribute('aria-hidden', 'true');
		menuPanel.style.transform = 'translateX(100%)';
		menuPanel.style.boxShadow = 'none';
		openButton.setAttribute('aria-expanded', 'false');
		backdrop.tabIndex = -1;
		document.body.classList.remove('menu_open');

		window.setTimeout(() =>
		{
			if (!menuOpen)
			{
				menuPanel.inert = true;
				menuPanel.hidden = true;
			}
		}, 500);

		if (restoreFocus && !desktopQuery.matches)
			openButton.focus();
	}

	function syncNavigationMode()
	{
		if (desktopMenu)
			desktopMenu.setAttribute('aria-hidden', desktopQuery.matches ? 'false' : 'true');

		if (desktopQuery.matches)
			closeMenu(false);
	}

	function updateHeader()
	{
		scrollFrame = null;
		const scrollTop = Math.max(window.scrollY, 0);
		const detached = scrollTop > 28;

		headerWrapper.style.height = detached ? '70px' : '100px';
		headerWrapper.style.boxShadow = detached ? '0 5px 30px rgba(0, 0, 0, 0.7)' : 'none';
		header.style.backgroundColor = detached ? 'var(--fade_dark_blue)' : 'rgba(16, 29, 48, 0)';
		header.style.backdropFilter = detached ? 'blur(8px)' : 'none';
		header.style.webkitBackdropFilter = detached ? 'blur(8px)' : 'none';

		if (!menuOpen && detached && scrollTop > lastScrollTop + 5)
		{
			headerWrapper.style.top = '-73px';
			headerWrapper.style.boxShadow = 'none';
		}
		else if (menuOpen || !detached || scrollTop < lastScrollTop - 2)
		{
			headerWrapper.style.top = '0';
		}

		lastScrollTop = scrollTop;
	}

	function queueHeaderUpdate()
	{
		if (scrollFrame === null)
			scrollFrame = window.requestAnimationFrame(updateHeader);
	}

	openButton.addEventListener('click', openMenu);
	closeButton.addEventListener('click', () => closeMenu(true));
	backdrop.addEventListener('click', () => closeMenu(true));

	menuPanel.querySelectorAll('a[href]').forEach((link) =>
	{
		link.addEventListener('click', () => closeMenu(false));
	});

	document.addEventListener('keydown', (event) =>
	{
		if (!menuOpen)
			return;

		if (event.key === 'Escape')
		{
			event.preventDefault();
			closeMenu(true);
			return;
		}

		if (event.key !== 'Tab')
			return;

		const items = focusableMenuItems();
		if (items.length === 0)
			return;

		const first = items[0];
		const last = items[items.length - 1];

		if (event.shiftKey && document.activeElement === first)
		{
			event.preventDefault();
			last.focus();
		}
		else if (!event.shiftKey && document.activeElement === last)
		{
			event.preventDefault();
			first.focus();
		}
	});

	window.addEventListener('scroll', queueHeaderUpdate, { passive: true });
	window.addEventListener('resize', queueHeaderUpdate);
	desktopQuery.addEventListener('change', syncNavigationMode);

	menuPanel.inert = true;
	menuPanel.hidden = true;
	syncNavigationMode();
	updateHeader();
}
