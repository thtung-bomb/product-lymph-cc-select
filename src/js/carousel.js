
const images = [
	"https://trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674",
	"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684",
	"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684",
	"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685",
	"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685",
	"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685",
	"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard6.jpg?v=1760103685",
	"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard8.jpg?v=1760103685",
	"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard9.jpg?v=1760103684",
	"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard10.jpg?v=1760103684",
	"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard11.jpg?v=1760103684",
	"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard12.jpg?v=1760103685",
	"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard13.jpg?v=1760103685"
];
let idx = 0;
const main = document.getElementById('mainImage');
const thumbs = document.getElementById('thumbs');
const prev = document.getElementById('prevBtn');
const next = document.getElementById('nextBtn');

const nut = document.getElementById('nutritionalBtn');
const sale = document.getElementById('saleBadge');

function renderMain() {
	main.src = images[idx];
	Array.from(thumbs.querySelectorAll('img')).forEach((el, i) => el.classList.toggle('active', i === idx));
	if (nut) nut.style.display = (idx === 0) ? '' : 'none';
	if (sale) sale.style.display = (idx === 0) ? '' : 'none';
}

function renderThumbs() {
	thumbs.innerHTML = '';
	images.forEach((src, i) => {
		const img = document.createElement('img');
		img.src = src; img.alt = 'thumb-' + i;
		img.addEventListener('click', () => { idx = i; renderMain(); });
		if (i === idx) img.classList.add('active');
		thumbs.appendChild(img);
	});
}

if (prev) prev.addEventListener('click', () => { idx = (idx - 1 + images.length) % images.length; renderMain(); if (thumbs) thumbs.scrollLeft -= 80; });
if (next) next.addEventListener('click', () => { idx = (idx + 1) % images.length; renderMain(); if (thumbs) thumbs.scrollLeft += 80; });

renderThumbs(); renderMain();



// Lightweight replacement for slick slider behavior: dynamic widths, dots, prev/next, touch

const container = document.querySelector('.product_ugc-container');
if (!container) {
	// no UGC carousel on this page
} else {
	const outer = container.closest('.product_carousel-outer') || container.parentElement;
	const viewport = container.querySelector('.slick-list') || container.querySelector('.ugc-viewport');
	const track = container.querySelector('.slick-track');
	if (!viewport || !track) {
		// missing structure, abort slider setup
	} else {
		// If you have a list of remote video URLs, render them into the track here.
		const videoUrls = [
			"https://cdn.shopify.com/videos/c/o/v/014b7db24d12443791bd22d345637ccc.mp4",
			"https://cdn.shopify.com/videos/c/o/v/4eecdc1058f349628e1c50ba81112b54.mov",
			"https://cdn.shopify.com/videos/c/o/v/2967808b09114feb9616d295fd2f3557.mp4",
			"https://cdn.shopify.com/videos/c/o/v/88efaa94523742bdb8f980d66600cde2.mp4",
			"https://cdn.shopify.com/videos/c/o/v/a7bce8da322747e08ef1ce7c87317c30.mp4",
			"https://cdn.shopify.com/videos/c/o/v/3a117937ae264508b440a6972ebcb6a1.mp4",
			"https://cdn.shopify.com/videos/c/o/v/27085ed5be5c4c38ad579f0fdae8aefa.mp4",
			"https://cdn.shopify.com/videos/c/o/v/a4ab9e815f3446ea8b84292627ec2a10.mp4",
			"https://cdn.shopify.com/videos/c/o/v/68b2aa06fab44d968723e052a14d87d5.mp4",
			"https://cdn.shopify.com/videos/c/o/v/0ec8de99a9c3459da6c53e18c0eeab3c.mp4"
		];

		// Clear existing slides then render new ones from videoUrls
		track.innerHTML = '';
		const playIcon = 'https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519';
		// poster images for each video (same order)
		const posterUrls = [
			"//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_12.40.11.png?v=1752486039",
			"//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.12.02.png?v=1752498744",
			"//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.04.png?v=1752497038",
			"//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.34.png?v=1752497063",
			"//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.11.50.png?v=1752498777",
			"//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.10.png?v=1752497092",
			"//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.44.54.png?v=1752497118",
			"//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.46.37.png?v=1752497216",
			"//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.45.36.png?v=1752497166",
			"//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.47.12.png?v=1752497252"
		];
		videoUrls.forEach((url, i) => {
			const slide = document.createElement('div');
			slide.className = 'slick-slide';
			slide.setAttribute('data-slick-index', i);
			slide.setAttribute('role', 'tabpanel');
			slide.setAttribute('aria-hidden', 'true');

			const poster = posterUrls[i] || '';
			slide.innerHTML = `
					<div class="float-left h-full min-h-px w-77.5 p-2" data-slick-index="${i}" role="tabpanel">
						<div>
							<div class="inline-block md:w-[45%] lg:w-[65%] xl:w-full">
								<div class="rounded-sm h-fit relative cursor-pointer overflow-hidden bg-transparent">
									<img src="${playIcon}" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 z-10 product_ugc-play">
									<video playsinline preload="metadata" poster="${poster}" class="block w-full object-cover aspect-9/16 overflow-hidden rounded-sm ugc-video-el">
										<source src="${url}" type="video/mp4">
									</video>
								</div>
							</div>
						</div>
					</div>`;

			// ensure slide has stable id for aria-controls
			slide.id = 'slick-slide' + i;
			track.appendChild(slide);
		});

		const slides = Array.from(track.children);
		const dotsUL = container.querySelector('.slick-dots');
		const prevBtn = outer && outer.querySelector('.product_carousel-prev');
		const nextBtn = outer && outer.querySelector('.product_carousel-next');

		let perView = calcPerView();
		let index = 0;

		function calcPerView() {
			return window.innerWidth < 640 ? 1 : 4; // mobile:1, desktop:4
		}

		function applySizes() {
			perView = calcPerView();
			const vw = viewport.clientWidth;
			const slideW = vw / perView;
			slides.forEach(s => {
				s.style.flex = `0 0 ${slideW}px`;
				s.style.width = `${slideW}px`;
				s.style.boxSizing = 'border-box';
			});
			track.style.width = `${slideW * slides.length}px`;
			clampIndex();
			goTo(index);
			// update dots/visibility
			updateActiveStates();
		}

		function clampIndex() {
			const maxIndex = Math.max(0, slides.length - perView);
			if (index > maxIndex) index = maxIndex;
			if (index < 0) index = 0;
		}

		function goTo(i) {
			index = i;
			clampIndex();
			const slideW = slides[0].getBoundingClientRect().width;
			track.style.transform = `translate3d(${-index * slideW}px,0,0)`;
			updateActiveStates();
		}

		function updateActiveStates() {
			// update dots active
			const pages = Math.max(1, slides.length - perView + 1);
			if (dotsUL) {
				// ensure number of dots equals pages; if mismatch, rebuild
				if (dotsUL.children.length !== pages) {
					dotsUL.innerHTML = '';
					for (let i = 0; i < pages; i++) {
						const li = document.createElement('li');
						li.setAttribute('role', 'presentation');
						const btn = document.createElement('button');
						btn.type = 'button'; btn.setAttribute('role', 'tab');
						btn.setAttribute('aria-controls', 'slick-slide' + i);
						btn.setAttribute('aria-label', `${i + 1} of ${pages}`);
						btn.addEventListener('click', () => goTo(i));
						li.appendChild(btn);
						dotsUL.appendChild(li);
					}
				}

				// sync active state on <li> and button attributes
				Array.from(dotsUL.children).forEach((li, liIdx) => {
					const btn = li.querySelector('button');
					if (!btn) return;
					if (liIdx === index) {
						li.classList.add('slick-active');
						btn.setAttribute('aria-selected', 'true');
						btn.setAttribute('tabindex', '0');
					} else {
						li.classList.remove('slick-active');
						btn.setAttribute('aria-selected', 'false');
						btn.setAttribute('tabindex', '-1');
					}
				});
			}

			// update slide visibility attributes and pause hidden videos
			slides.forEach((s, idx) => {
				const video = s.querySelector('video');
				const play = s.querySelector('.product_ugc-play');
				if (idx >= index && idx < index + perView) {
					s.setAttribute('aria-hidden', 'false');
					s.classList.add('is-visible');
					// mark visible slides as slick-active
					s.classList.add('slick-active');
				} else {
					s.setAttribute('aria-hidden', 'true');
					s.classList.remove('is-visible');
					// remove active marker for hidden slides
					s.classList.remove('slick-active');
					// pause and reset hidden videos
					if (video && !video.paused) { try { video.pause(); video.currentTime = 0; } catch (e) { } }
					if (play) play.style.display = 'block';
				}

				// mark the first visible slide as current
				if (idx === index) {
					s.classList.add('slick-current');
				} else {
					s.classList.remove('slick-current');
				}
			});
		}

		// Prev / Next
		if (prevBtn) prevBtn.addEventListener('click', () => { goTo(Math.max(0, index - 1)); });
		if (nextBtn) nextBtn.addEventListener('click', () => { goTo(Math.min(slides.length - perView, index + 1)); });

		// touch dragging
		(function () {
			let startX = 0, delta = 0, dragging = false;
			viewport.addEventListener('touchstart', e => { startX = e.touches[0].clientX; dragging = true; track.style.transition = 'none'; });
			viewport.addEventListener('touchmove', e => { if (!dragging) return; delta = e.touches[0].clientX - startX; track.style.transform = `translate3d(${-index * slides[0].getBoundingClientRect().width + delta}px,0,0)`; });
			viewport.addEventListener('touchend', () => { dragging = false; track.style.transition = 'transform .36s cubic-bezier(.22,.9,.32,1)'; if (delta > 50) goTo(index - 1); else if (delta < -50) goTo(index + 1); else goTo(index); delta = 0; });
		})();

		// clicking a slide: custom play behavior (pause others, unmute this, hide timebar/options)
		slides.forEach(s => {
			const video = s.querySelector('video');
			const play = s.querySelector('.product_ugc-play');
			if (!video) return;

			// disable context menu to hide default video options
			video.addEventListener('contextmenu', e => e.preventDefault());
			try { video.disablePictureInPicture = true; } catch (e) { }
			video.controlsList = 'nofullscreen nodownload noremoteplayback';

			s.addEventListener('click', () => {
				// pause other videos
				slides.forEach(other => {
					const ov = other.querySelector('video');
					const op = other.querySelector('.product_ugc-play');
					if (ov && ov !== video) { try { ov.pause(); ov.currentTime = 0; ov.muted = true; ov.removeAttribute('controls'); } catch (e) { } if (op) op.style.display = 'block'; }
				});

				if (video.paused) {
					video.muted = false; // bật tiếng
					video.play().catch(() => { });
					if (play) play.style.display = 'none';
					// hide native controls/time bar
					video.removeAttribute('controls');
				} else {
					video.pause();
					video.muted = true;
					if (play) play.style.display = 'block';
					video.removeAttribute('controls');
				}
			});
		});

		// resize handling
		let rt;
		window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(applySizes, 120); });

		// override any inline width previously set by server markup
		track.style.width = 'auto';
		slides.forEach(s => { s.style.width = 'auto'; s.style.flex = '0 0 auto'; });

		// initialize sizes and UI
		applySizes();

		// expose nothing globally; slider set up complete
	}
}
