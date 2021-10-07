import 'slick-carousel';
import { btnPrev, btnNext } from './components/slick-btns';

import initFavorite from './components/favorite';
import productsOpen from './components/products';
import burgerMenuOpen from './components/side-menu-burger';
import accordionBurgerMenuInfo from './components/side-menu-info';



$('.js-slider').slick({
  autoplay: true,
  arrows: true,
  prevArrow: btnPrev,
  nextArrow: btnNext
});

initFavorite();
productsOpen();
burgerMenuOpen();
accordionBurgerMenuInfo();


// window.addEventListener('scroll', () => {
//   console.log(window.pageYOffset);
//   // console.log(window.innerHeight);
//   console.log(document.documentElement.offsetHeight);
//   console.log(window.innerHeight + Math.round(window.pageYOffset));
// })