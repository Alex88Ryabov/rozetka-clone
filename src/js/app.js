import 'slick-carousel';
import { btnPrev, btnNext } from './components/slick-btns';

import initFavorite from './components/favorite';
import productsOpen from './components/products-open';
import burgerMenuOpen from './components/side-menu-burger';
import accordionBurgerMenuInfo from './components/side-menu-info';
import productsMod from './components/products-border-color';
import productsCardWidth from './components/products-card-width-options';
import test from './components/test';
import constants from './components/constants';


$('.js-slider').slick({
  autoplay: true,
  arrows: true,
  prevArrow: btnPrev,
  nextArrow: btnNext,
  adaptiveHeight: true
});

initFavorite();
productsOpen();
burgerMenuOpen();
accordionBurgerMenuInfo();
productsMod();
productsCardWidth();
test();
constants();

window.addEventListener('resize', () => { 
    productsCardWidth();
    productsOpen();
    
})
