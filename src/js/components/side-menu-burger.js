function burgerMenuOpen() {
  const headerIn = document.querySelector('.header__in')
  const burgerBtn = headerIn.querySelector('.burger__btn')
  const body = document.querySelector('body');
  const sideMenu = body.querySelector('.side-menu');
  const overlay = sideMenu.querySelector('.side-menu__overlay');
  const content = sideMenu.querySelector('.side-menu__content');
  const closeBtn = content.querySelector('.side-menu__close-btn');


  const openBurger = () => {
    overlay.classList.add('side-menu__overlay--shown');
    content.classList.add('side-menu__content--shown');
    body.classList.add('body--overflow');
  };

  const closeBurger = () => {
    overlay.classList.remove('side-menu__overlay--shown');
    content.classList.remove('side-menu__content--shown');
    body.classList.remove('body--overflow');

  };




  burgerBtn.addEventListener('click', openBurger);

  closeBtn.addEventListener('click', closeBurger);
};

module.exports = burgerMenuOpen;