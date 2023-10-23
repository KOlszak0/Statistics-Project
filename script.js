const burgerCloseBtn = document.querySelector('.nav__close-icon')
const burgerOpenBtn = document.querySelector('.nav__burger-icon')
const navItems = document.querySelector('.nav__items')

const toggleBurgerMenu = () => {
    navItems.classList.toggle('show-nav')
    burgerOpenBtn.classList.toggle('hidden')
}

burgerOpenBtn.addEventListener('click', toggleBurgerMenu)
burgerCloseBtn.addEventListener('click', toggleBurgerMenu)