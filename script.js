const burgerCloseBtn = document.querySelector('.nav__close-icon')
const burgerOpenBtn = document.querySelector('.nav__burger-icon')
const navItems = document.querySelector('.nav__items')
const books = document.querySelectorAll('.fav-main__question--podium--item--book')
const books2 = document.querySelectorAll('.fav-main__question--podium--item--book2')
const podiumBtn1 = document.querySelector('.fav-main__question--podium-btn1')
const podiumBtn2 = document.querySelector('.fav-main__question--podium-btn2')

const toggleBurgerMenu = () => {
	navItems.classList.toggle('show-nav')
	burgerOpenBtn.classList.toggle('hidden')
}

const movebook = () => {
	podiumBtn1.setAttribute('disabled', true)
	podiumBtn1.classList.add('disabled')
	setTimeout(function () {
		podiumBtn1.removeAttribute('disabled', true)
		podiumBtn1.classList.remove('disabled')
	}, 2500)

	const order = [2, 0, 1] // Kolejność indeksów elementów
	order.forEach((index, i) => {
		setTimeout(() => {
			const book = books[index] // Pobierz element na podstawie kolejności
			if (!book.classList.contains('move-column')) {
				book.classList.add('move-column')
				podiumBtn1.textContent = 'Ukryj wyniki'
			} else {
				book.classList.remove('move-column')
				podiumBtn1.textContent = 'Poznaj wyniki'
			}
		}, 1000 * i) // Dodaj 2 sekundy opóźnienia dla każdego elementu
	})
}

const movebook2 = () => {
	podiumBtn2.setAttribute('disabled', true)
	podiumBtn2.classList.add('disabled')
	setTimeout(function () {
		podiumBtn2.removeAttribute('disabled', true)
		podiumBtn2.classList.remove('disabled')
	}, 2500)

	const order = [2, 0, 1] // Kolejność indeksów elementów
	order.forEach((index, i) => {
		setTimeout(() => {
			const book = books2[index] // Pobierz element na podstawie kolejności
			if (!book.classList.contains('move-column')) {
				book.classList.add('move-column')
				podiumBtn2.textContent = 'Ukryj wyniki'
			} else {
				book.classList.remove('move-column')
				podiumBtn2.textContent = 'Poznaj wyniki'
			}
		}, 1000 * i) // Dodaj 2 sekundy opóźnienia dla każdego elementu
	})
}

burgerOpenBtn.addEventListener('click', toggleBurgerMenu)
burgerCloseBtn.addEventListener('click', toggleBurgerMenu)
podiumBtn1.addEventListener('click', movebook)
podiumBtn2.addEventListener('click', movebook2)
