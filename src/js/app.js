import 'slick-carousel';
import { btnPrev, btnNext } from './components/slick-btns';

import initFavorite from './components/favorite';
import productsOpen from './components/products';
import burgerMenuOpen from './components/side-menu-burger';



$('.js-slider').slick({
  autoplay: true,
  arrows: true,
  prevArrow: btnPrev,
  nextArrow: btnNext
});

initFavorite();
productsOpen();
burgerMenuOpen();