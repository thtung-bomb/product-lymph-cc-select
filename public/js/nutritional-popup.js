
const popupId = "nutritional-info-popup"
const closeButtonId = "close-popup-button"
const openButtonId = "open-popup-btn"

let closeButton = document.getElementById(closeButtonId)
let openButton = document.getElementById(openButtonId)

openButton.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)

function openPopup() {
	const popup = document.getElementById(popupId)

	popup.classList.remove('hidden')
	popup.classList.add('fixed', 'flex')
}

function closePopup() {
	const popup = document.getElementById(popupId)

	popup.classList.remove('fixed', 'flex')
	popup.classList.add('hidden')
}