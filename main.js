const burger = document.querySelector('.header__menu');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('header__nav--open');
});
