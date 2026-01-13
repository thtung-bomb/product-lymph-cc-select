// State cho form
let formState = {
	isOpen: false,
	isSubmitted: false,
	selectedRating: 0
};

// Toggle form hiển thị/ẩn
function toggleReviewForm() {
	const container = document.getElementById('reviewFormContainer');
	const btn = document.getElementById('writeReviewBtn');
	const form = document.getElementById('reviewForm');
	const successMsg = document.getElementById('successMessage');

	formState.isOpen = !formState.isOpen;

	if (formState.isOpen) {
		// Mở form
		container.classList.remove('max-h-0', 'opacity-0');
		container.classList.add('max-h-fit', 'opacity-100');

		if (formState.isSubmitted) {
			btn.textContent = 'Refresh page';
			btn.onclick = () => location.reload();
		} else {
			btn.textContent = 'Cancel write review';
		}
	} else {
		// Đóng form
		container.classList.add('max-h-0', 'opacity-0');
		container.classList.remove('max-h-fit', 'opacity-100');

		if (!formState.isSubmitted) {
			btn.textContent = 'Write a review';
			btn.onclick = toggleReviewForm;
			// Reset form
			form.reset();
			formState.selectedRating = 0;
			resetStars();
		}
	}
}

// Set rating
function setRating(rating) {
	formState.selectedRating = rating;
	document.getElementById('ratingValue').value = rating;

	// Update stars display
	const stars = document.querySelectorAll('[data-star]');
	stars.forEach((star, index) => {
		if (index < rating) {
			star.classList.remove('fa-regular', 'text-gray-300');
			star.classList.add('fa-solid', 'text-[#fa8a8a]');
		} else {
			star.classList.remove('fa-solid', 'text-[#fa8a8a]');
			star.classList.add('fa-regular', 'text-gray-300');
		}
	});
}

// Reset stars
function resetStars() {
	const stars = document.querySelectorAll('[data-star]');
	stars.forEach(star => {
		star.classList.remove('fa-solid', 'text-[#fa8a8a]');
		star.classList.add('fa-regular', 'text-gray-300');
	});
}

// Submit review
function submitReview(event) {
	event.preventDefault();

	const formData = new FormData(event.target);
	const reviewData = {
		rating: formData.get('rating'),
		content: formData.get('content'),
		displayName: formData.get('displayName'),
		email: formData.get('email'),
		date: new Date().toLocaleDateString('en-US')
	};

	console.log('Review submitted:', reviewData);

	// Giả lập submit thành công
	setTimeout(() => {
		// Hide form, show success message
		document.getElementById('reviewForm').classList.add('hidden');
		document.getElementById('successMessage').classList.remove('hidden');

		// Update state
		formState.isSubmitted = true;

		// Update button
		const btn = document.getElementById('writeReviewBtn');
		btn.textContent = 'Refresh page';
		btn.onclick = () => location.reload();

		// Thêm review vào danh sách (optional)
		allReviews.unshift({
			id: String(Date.now()),
			rating: parseInt(reviewData.rating),
			author: reviewData.displayName,
			verified: false,
			date: reviewData.date,
			content: reviewData.content
		});

		console.log('====================================');
		console.log(allReviews);
		console.log('====================================');

	}, 500);
}

// File upload preview (optional)
document.addEventListener('DOMContentLoaded', function () {
	const fileUpload = document.getElementById('fileUpload');
	if (fileUpload) {
		fileUpload.addEventListener('change', function (e) {
			const file = e.target.files[0];
			if (file) {
				console.log('File selected:', file.name);
				// Có thể thêm preview ở đây
			}
		});
	}
});

// Write review button event listener
document.addEventListener('DOMContentLoaded', function () {
	const writeReviewBtn = document.querySelector('a[onclick*="toggleReviewForm"]');
	if (writeReviewBtn) {
		writeReviewBtn.onclick = function () {
			toggleReviewForm();
			return false;
		};
	}
});
