import "slick-carousel";
import { btnPrev, btnNext } from './components/slick-btns'

$(".js-slider").slick({
  autoplay: true,
  arrows: true,
  prevArrow: btnPrev,
  nextArrow: btnNext
});

