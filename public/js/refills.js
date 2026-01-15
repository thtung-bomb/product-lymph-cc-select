document.addEventListener('DOMContentLoaded', () => {
	const radios = document.querySelectorAll('input[name="bundle"]');
	const refills = document.querySelectorAll('.product_atc-refills');

	function showFor(value) {
		refills.forEach(p => {
			if (p.getAttribute('data') === String(value)) {
				p.style.display = '';
			} else {
				p.style.display = 'none';
			}
		});
	}

	radios.forEach(r => r.addEventListener('change', e => showFor(e.target.value)));

	// initialize: if a radio is checked, show its matching paragraph
	const checked = document.querySelector('input[name="bundle"]:checked');
	if (checked) showFor(checked.value);
	else {
		// otherwise try to derive from the visible paragraph or default to first
		const visible = Array.from(refills).find(p => !p.classList.contains('hided')) || refills[0];
		if (visible) {
			const v = visible.getAttribute('data');
			const r = document.querySelector(`input[name="bundle"][value="${v}"]`);
			if (r) r.checked = true;
			showFor(v);
		}
	}
});
