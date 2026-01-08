
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

prev.addEventListener('click', () => { idx = (idx - 1 + images.length) % images.length; renderMain(); thumbs.scrollLeft -= 80; });
next.addEventListener('click', () => { idx = (idx + 1) % images.length; renderMain(); thumbs.scrollLeft += 80; });

renderThumbs(); renderMain();
