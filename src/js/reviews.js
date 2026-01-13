
const ratingsData = [
	{ rating: 5, frequency: 84, percentage: 76 },
	{ rating: 4, frequency: 17, percentage: 15 },
	{ rating: 3, frequency: 8, percentage: 7 },
	{ rating: 2, frequency: 1, percentage: 1 },
	{ rating: 1, frequency: 0, percentage: 0 }
];

const reviewsData = [
	{
		id: "1",
		rating: 5,
		author: "Anonymous",
		verified: true,
		date: "12/08/2025",
		content: "Pretty sure I'm seeing improvement in the smoothness of my skin after 30 days. Will continue with confidence it's working.",
	},
	{
		id: "2",
		rating: 5,
		author: "Anonymous",
		verified: true,
		date: "12/01/2025",
		content: "One month and I've already seen a difference!",
	},
	{
		id: "3",
		rating: 5,
		author: "Donabeth Houx",
		verified: true,
		date: "11/23/2025",
		content: "I LOVE THEM! My legs have gone from late stage 2 to late one!!! Oh my gosh! It's a miracle! I no longer have to worry about elephantitus in my future! Thank you so much!!!!!!",
	},
	{
		id: "4",
		rating: 5,
		author: "Dawn Camacho",
		verified: true,
		date: "11/17/2025",
		content: "It took me about 60 days to notice a difference in smoothness. My husband noticed which is why I purchased another round. I'm happy.",
	},
	{
		id: "5",
		rating: 5,
		author: "Anonymous",
		verified: true,
		date: "11/13/2025",
		content: "I have noticed a difference on my swelling.",
	},
	{
		id: "6",
		rating: 4,
		author: "John Doe",
		verified: true,
		date: "11/10/2025",
		content: "Good product, but took longer than expected to see results.",
	},
	{
		id: "7",
		rating: 4,
		author: "Jane Smith",
		verified: true,
		date: "11/05/2025",
		content: "Works well, but a bit pricey.",
	},
	{
		id: "8",
		rating: 3,
		author: "Mike Johnson",
		verified: true,
		date: "10/28/2025",
		content: "It's okay, not amazing but not bad either.",
	},
	// Thêm nhiều reviews khác để test pagination...
];

const authors = [
	"Anonymous",
	"Emily Rose",
	"Sarah Miller",
	"Jessica Brown",
	"Laura Wilson",
	"Michael Lee",
	"David Tran",
	"Anna Nguyen",
	"Rachel Adams",
	"Olivia Martin"
];

const contentsByRating = {
	5: [
		"Amazing results after consistent use!",
		"Exceeded my expectations.",
		"Definitely repurchasing.",
		"Noticeable improvement and very happy.",
		"Life-changing product!"
	],
	4: [
		"Good results, just took some time.",
		"Works well overall.",
		"Happy but could be better.",
		"Solid product."
	],
	3: [
		"It's okay, results are average.",
		"Neither great nor bad.",
		"Decent but not impressive."
	],
	2: [
		"Very slow results, a bit disappointed."
	],
	1: [
		"Did not work for me at all."
	]
};

function randomDate() {
	const start = new Date(2025, 9, 1);
	const end = new Date(2025, 11, 31);
	const date = new Date(start.getTime() + Math.random() * (end - start));
	return date.toLocaleDateString("en-US");
}

let generatedReviews = [];
let idCounter = 1000;

ratingsData.forEach(({ rating, frequency }) => {
	for (let i = 0; i < frequency; i++) {
		generatedReviews.push({
			id: String(idCounter++),
			rating,
			author: authors[Math.floor(Math.random() * authors.length)],
			verified: true,
			date: randomDate(),
			content:
				contentsByRating[rating][
				Math.floor(Math.random() * contentsByRating[rating].length)
				],
		});
	}
});

// Gộp với reviews có sẵn nếu cần
const allReviews = [...reviewsData, ...generatedReviews];


// State quản lý
let currentState = {
	filteredRating: null,
	currentPage: 1,
	itemsPerPage: 5,
	sortBy: 'most-recent'
};

// Hàm render stars cho histogram
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

// Hàm render stars cho review
function renderReviewStars(rating) {
	let starsHtml = '';
	for (let i = 1; i <= 5; i++) {
		starsHtml += `<i class="fa-solid fa-star ${i <= rating ? 'star-pink' : 'text-gray-300'} text-sm"></i>`;
	}
	return starsHtml;
}

// Hàm render histogram
function renderHistogram(data) {
	const container = document.getElementById('histogram');
	let html = '';

	data.forEach(item => {
		const isActive = currentState.filteredRating === item.rating;
		html += `
			<div class="histogram-row ${isActive ? 'bg-pink-50' : ''}" 
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
		<div class="clear-filter ${currentState.filteredRating ? '' : 'opacity-50 pointer-events-none'}" 
			onclick="clearFilter()" 
			tabindex="0">
			See all reviews
		</div>
	`;

	container.innerHTML = html;
}

// Hàm lấy reviews đã filter
function getFilteredReviews() {
	let filtered = [...allReviews];

	// Filter theo rating
	if (currentState.filteredRating) {
		filtered = filtered.filter(review => review.rating === currentState.filteredRating);
	}

	// Sort theo lựa chọn
	switch (currentState.sortBy) {
		case 'most-recent':
			break;
		case 'highest-rating':
			filtered.sort((a, b) => b.rating - a.rating);
			break;
		case 'lowest-rating':
			filtered.sort((a, b) => a.rating - b.rating);
			break;
		case 'with-pictures':
			// Filter reviews with pictures only (if implemented)
			break;
		case 'pictures-first':
			// Sort pictures first (if implemented)
			break;
		case 'videos-first':
			// Sort videos first (if implemented)
			break;
		case 'most-helpful':
			// Sort by helpfulness (if implemented)
			break;
	}

	return filtered;
}

// Hàm render một review
function renderReview(review) {
	return `
		<div class="p-6 hover:bg-gray-50 transition-colors duration-200">
			<!-- Header: Stars và Date -->
			<div class="flex items-center justify-between mb-3">
				<div class="flex items-center gap-2">
					${renderReviewStars(review.rating)}
				</div>
				<span class="text-sm text-gray-500">${review.date}</span>
			</div>

			<!-- Author và Verified Badge -->
			<div class="flex items-center gap-2 mb-3">
				<div class="relative w-6 h-6 bg-[#e0e0e080] flex items-center justify-center">
					<i class="fa-solid fa-user text-[#fa8a8a] text-sm"></i>
					<i class="fa-solid fa-square-check text-[#fa8a8a] text-[8px] absolute bottom-0 right-0"></i>
				</div>
				<div class="flex items-center gap-2 text-[#fa8a8a]">
					<span class="font-medium">${review.author}</span>
					${review.verified ? '<span class="verified-badge">Verified</span>' : ''}
				</div>
			</div>

			<!-- Review Content -->
			<div class="mb-3">
				<p class="text-gray-700 leading-relaxed">${review.content}</p>
			</div>
		</div>
	`;
}

// Hàm render reviews với pagination
function renderReviews() {
	const container = document.getElementById('reviewsList');
	if (!container) return;

	const filteredReviews = getFilteredReviews();
	const startIndex = (currentState.currentPage - 1) * currentState.itemsPerPage;
	const endIndex = startIndex + currentState.itemsPerPage;
	const pageReviews = filteredReviews.slice(startIndex, endIndex);

	if (pageReviews.length === 0) {
		container.innerHTML = '<div class="p-6 text-center text-gray-500">No reviews found</div>';
	} else {
		container.innerHTML = pageReviews.map(review => renderReview(review)).join('');
	}

	// Update pagination
	renderPagination(filteredReviews.length);
}

// Hàm render pagination
function renderPagination(totalItems) {
	const container = document.getElementById('pagination');
	if (!container) return;

	const totalPages = Math.ceil(totalItems / currentState.itemsPerPage);
	const currentPage = currentState.currentPage;

	if (totalPages <= 1) {
		container.innerHTML = '';
		return;
	}

	let html = '';

	// Nút First và Previous (hiện khi currentPage > 3)
	if (currentPage > 2) {
		html += `
			<button class="w-8 h-8 flex items-center justify-center rounded text-gray-700 hover:bg-gray-100 transition-colors duration-200" 
				onclick="changePage(1)" 
				aria-label="First page">
				<i class="fa-solid fa-angles-left text-xs"></i>
			</button>
			<button class="w-8 h-8 flex items-center justify-center rounded text-gray-700 hover:bg-gray-100 transition-colors duration-200" 
				onclick="changePage(${currentPage - 1})" 
				aria-label="Previous page">
				<i class="fa-solid fa-chevron-left text-xs"></i>
			</button>
		`;
	}

	// Hiển thị các số trang (tối đa 3 trang)
	let startPage = Math.max(1, currentPage - 1);
	let endPage = Math.min(totalPages, startPage + 2);

	// Điều chỉnh nếu gần cuối
	if (endPage - startPage < 2) {
		startPage = Math.max(1, endPage - 2);
	}

	for (let i = startPage; i <= endPage; i++) {
		html += `
			<button class="w-8 h-8 flex items-center justify-center rounded ${currentPage === i ? 'bg-pink text-white' : 'text-gray-700 hover:bg-gray-100'} transition-colors duration-200" 
				onclick="changePage(${i})">
				${i}
			</button>
		`;
	}

	// Nút Next và Last
	if (currentPage < totalPages) {
		html += `
			<button class="w-8 h-8 flex items-center justify-center rounded text-gray-700 hover:bg-gray-100 transition-colors duration-200" 
				onclick="changePage(${currentPage + 1})" 
				aria-label="Next page">
				<i class="fa-solid fa-chevron-right text-xs"></i>
			</button>
		`;
	}

	if (currentPage < totalPages - 2) {
		html += `
			<button class="w-8 h-8 flex items-center justify-center rounded text-gray-700 hover:bg-gray-100 transition-colors duration-200" 
				onclick="changePage(${totalPages})" 
				aria-label="Last page">
				<i class="fa-solid fa-angles-right text-xs"></i>
			</button>
		`;
	}

	container.innerHTML = html;
}

// Hàm filter reviews theo rating
function filterReviews(rating) {
	currentState.filteredRating = rating;
	currentState.currentPage = 1; // Reset về trang 1
	renderHistogram(ratingsData);
	renderReviews();

	// Scroll to reviews section
	document.getElementById('reviewsList')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Hàm clear filter
function clearFilter() {
	if (!currentState.filteredRating) return;

	currentState.filteredRating = null;
	currentState.currentPage = 1;
	renderHistogram(ratingsData);
	renderReviews();
}

// Hàm thay đổi trang
function changePage(page) {
	currentState.currentPage = page;
	renderReviews();

	// Scroll to top of reviews
	document.getElementById('reviewsList')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Hàm sort reviews
function sortReviews(sortType) {
	currentState.sortBy = sortType;
	currentState.currentPage = 1;
	renderReviews();
}

// Keyboard accessibility
document.addEventListener('keydown', function (e) {
	if (e.target.hasAttribute('tabindex') && (e.key === 'Enter' || e.key === ' ')) {
		e.preventDefault();
		e.target.click();
	}
});

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
	renderHistogram(ratingsData);
	renderReviews();

	const sortDropdown = document.getElementById('sortDropdown');
	if (sortDropdown) {
		sortDropdown.addEventListener('change', function (e) {
			sortReviews(e.target.value);
		});
	}
});