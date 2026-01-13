// Dữ liệu reviews
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
	}
];

// Hàm render stars
function renderStars(rating) {
	let starsHtml = '';
	for (let i = 1; i <= 5; i++) {
		starsHtml += `<i class="fa-solid fa-star ${i <= rating ? 'star-pink' : 'text-gray-300'} text-sm"></i>`;
	}
	return starsHtml;
}

// Hàm render một review
function renderReview(review) {
	return `
        <div class="p-6 hover:bg-gray-50 transition-colors duration-200">
            <!-- Header: Stars và Date -->
            <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2">
                    ${renderStars(review.rating)}
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

            <!-- Badge -->
            ${review.badge ? `
                <div class="inline-flex items-center px-3 py-1 border border-gray-300 rounded text-xs text-gray-500">
                    ${review.badge}
                </div>
            ` : ''}
        </div>
    `;
}

// Hàm render tất cả reviews
function renderReviews(reviews) {
	const container = document.getElementById('reviewsList');
	if (container) {
		container.innerHTML = reviews.map(review => renderReview(review)).join('');
	}
}

// Hàm render pagination
function renderPagination(currentPage = 1, totalPages = 22) {
	const container = document.getElementById('pagination');
	if (!container) return;

	let html = '';

	// Page 1
	html += `<button class="w-8 h-8 flex items-center justify-center rounded ${currentPage === 1 ? 'bg-pink text-white' : 'text-gray-700 hover:bg-gray-100'} transition-colors duration-200" onclick="changePage(1)">1</button>`;

	// Page 2
	if (totalPages >= 2) {
		html += `<button class="w-8 h-8 flex items-center justify-center rounded ${currentPage === 2 ? 'bg-pink text-white' : 'text-gray-700 hover:bg-gray-100'} transition-colors duration-200" onclick="changePage(2)">2</button>`;
	}

	// Page 3
	if (totalPages >= 3) {
		html += `<button class="w-8 h-8 flex items-center justify-center rounded ${currentPage === 3 ? 'bg-pink text-white' : 'text-gray-700 hover:bg-gray-100'} transition-colors duration-200" onclick="changePage(3)">3</button>`;
	}

	// Next button
	if (currentPage < totalPages) {
		html += `<button class="w-8 h-8 flex items-center justify-center rounded text-gray-700 hover:bg-gray-100 transition-colors duration-200" onclick="changePage(${currentPage + 1})">
            <i class="fa-solid fa-chevron-right text-xs"></i>
        </button>`;
	}

	// Last page button
	if (totalPages > 3) {
		html += `<button class="w-8 h-8 flex items-center justify-center rounded text-gray-700 hover:bg-gray-100 transition-colors duration-200" onclick="changePage(${totalPages})">
            <i class="fa-solid fa-angles-right text-xs"></i>
        </button>`;
	}

	container.innerHTML = html;
}

// Hàm thay đổi trang
function changePage(page) {
	console.log(`Changing to page ${page}`);
	renderPagination(page);
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Hàm sort reviews
function sortReviews(sortType) {
	console.log(`Sorting by: ${sortType}`);
	// Thêm logic sort ở đây
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
	renderReviews(reviewsData);
	renderPagination(1, 22);

	const sortDropdown = document.getElementById('sortDropdown');
	if (sortDropdown) {
		sortDropdown.addEventListener('change', function (e) {
			sortReviews(e.target.value);
		});
	}
});
