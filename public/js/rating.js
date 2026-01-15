// const ratingsData = [
// 	{ rating: 5, frequency: 84, percentage: 76 },
// 	{ rating: 4, frequency: 17, percentage: 15 },
// 	{ rating: 3, frequency: 8, percentage: 7 },
// 	{ rating: 2, frequency: 1, percentage: 1 },
// 	{ rating: 1, frequency: 0, percentage: 0 }
// ];

// Hàm render stars
function renderStars(rating) {
	let starsHtml = '';
	for (let i = 1; i <= 5; i++) {
		if (i <= rating) {
			starsHtml += '<i class="fa-solid fa-star star-rating active"></i>';
		} else {
			starsHtml += '<i class="fa-regular fa-star star-rating inactive"></i>';
		}
	}
	return starsHtml;
}

// Hàm render histogram
function renderHistogram(data) {
	const container = document.getElementById('histogram');
	let html = '';

	data.forEach(item => {
		html += `
							<div class="histogram-row" 
									data-rating="${item.rating}" 
									data-frequency="${item.frequency}" 
									data-percentage="${item.percentage}"
									onclick="filterReviews(${item.rating})"
									role="button"
									tabindex="0"
									aria-label="${item.percentage}% (${item.frequency}) reviews with ${item.rating} star rating">
									<div class="star-rating">
											${renderStars(item.rating)}
									</div>
									<div class="bar-container">
											<div class="bar-fill" style="width: ${item.percentage}%;"></div>
									</div>
									<div class="frequency">${item.frequency}</div>
							</div>
                `;
	});

	html += `
                <div class="clear-filter" onclick="clearFilter()" tabindex="0">
                    See all reviews
                </div>
            `;

	container.innerHTML = html;
}

// Hàm filter reviews
function filterReviews(rating) {
	console.log(`Filtering reviews with ${rating} stars`);
	// Thêm logic filter của bạn ở đây
	alert(`Showing reviews with ${rating} stars`);
}

// Hàm clear filter
function clearFilter() {
	console.log('Showing all reviews');
	// Thêm logic clear filter của bạn ở đây
	alert('Showing all reviews');
}

// Keyboard accessibility
document.addEventListener('keydown', function (e) {
	if (e.target.hasAttribute('tabindex') && (e.key === 'Enter' || e.key === ' ')) {
		e.preventDefault();
		e.target.click();
	}
});

// Render khi trang load
window.addEventListener('DOMContentLoaded', function () {
	renderHistogram(ratingsData);
});