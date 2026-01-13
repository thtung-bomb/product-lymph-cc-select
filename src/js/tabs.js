document.addEventListener('DOMContentLoaded', () => {
	try {
		console.log('tabs.js initialized');
		const blocks = document.querySelectorAll('.product_tab-block');

		blocks.forEach((block, idx) => {
			const thumb = block.querySelector('.product_tab-thumb');
			const content = block.querySelector('.product_tab-content');
			if (!thumb || !content) return;

			const id = content.id || `tab-content-${idx}`;
			content.id = id;

			thumb.setAttribute('role', 'button');
			thumb.setAttribute('tabindex', '0');
			thumb.setAttribute('aria-controls', id);
			thumb.setAttribute('aria-expanded', 'false');

			// Ensure content is measurable even if author used inline display:none
			if (getComputedStyle(content).display === 'none') content.style.display = 'block';

			// Initialize collapsed state
			content.style.overflow = 'hidden';
			content.style.maxHeight = '0px';
			content.style.opacity = '0';
			content.dataset.open = 'false';

			const thumbImg = thumb.querySelector('img');
			if (thumbImg) {
				thumbImg.classList.add('transition-transform', 'duration-300');
			}

			const open = () => {
				thumb.setAttribute('aria-expanded', 'true');
				// measure then set to scrollHeight for smooth transition
				const h = content.scrollHeight;
				content.style.maxHeight = h + 'px';
				content.style.opacity = '1';
				content.dataset.open = 'true';
				if (thumbImg) thumbImg.classList.add('rotate-45');
			};

			const close = () => {
				thumb.setAttribute('aria-expanded', 'false');
				// If maxHeight is 'none' (cleared after open), set it to current height first
				if (content.style.maxHeight === 'none' || content.style.maxHeight === '') {
					const h = content.scrollHeight;
					content.style.maxHeight = h + 'px';
					// Force reflow so the following change is animated
					// eslint-disable-next-line no-unused-expressions
					content.offsetHeight;
				}
				content.style.maxHeight = '0px';
				content.style.opacity = '0';
				content.dataset.open = 'false';
				if (thumbImg) thumbImg.classList.remove('rotate-45');
			};

			const toggle = () => (thumb.getAttribute('aria-expanded') === 'true' ? close() : open());

			thumb.addEventListener('click', () => requestAnimationFrame(toggle));
			thumb.addEventListener('keydown', (e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					requestAnimationFrame(toggle);
				}
			});

			// When transition ends, if open we clear maxHeight to allow for responsive content
			content.addEventListener('transitionend', (ev) => {
				// Some browsers report propertyName differently; check for 'max' to be safe
				if (!ev.propertyName || ev.propertyName.indexOf('max') === -1) return;
				if (content.dataset.open === 'true') {
					content.style.maxHeight = 'none';
				}
			});

			// Close when clicking inside content, but ignore interactive elements
			const interactiveSelector = 'a, button, input, textarea, select, label, [role="button"], [data-no-close]';
			content.addEventListener('click', (e) => {
				if (content.dataset.open !== 'true') return;
				const el = e.target;
				// If clicked element or any of its ancestors up to content is interactive, do nothing
				let node = el;
				while (node && node !== content) {
					if (node.matches && node.matches(interactiveSelector)) return;
					node = node.parentElement;
				}
				// If we reached here, the click was on a non-interactive area — close
				requestAnimationFrame(close);
			});
		}
		);
	} catch (err) {
		console.error('Error initializing tabs.js', err);
	}
});