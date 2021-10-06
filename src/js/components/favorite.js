// const cards = document.querySelectorAll('.products-preview__products');
// console.log('cards');
// cards.forEach(card => {

//   const favouritBtn = card.querySelector('.js-favourit');

//   favouritBtn.addEventListener('click', () => {
//     if (card.classList.contains('shown')) {
//       card.classList.remove('shown');
//       if (favouritBtn.querySelector('.product-small-card__icon').classList.contains('is-active')) {
//         favouritBtn.querySelector('.product-small-card__icon').classList.remove('product-small-card__icon--active');
//       } else {
//         card.classList.add('shown');
//         favouritBtn.querySelector('.product-small-card__icon').classList.add('product-small-card__icon--active');
//   }

// }
// }) 
// })
function initFavorite() {
  const card = document.querySelector('.js-product');
  const btn = card.querySelector('.js-favorite');
  const heart = btn.querySelector('.js-favorite-icon');

  const heartActive = () => {
    console.log('b la');
    if (heart.classList.contains('is-active')) {
      heart.classList.remove('is-active');
    } else {
      heart.classList.add('is-active');
    }
  };
  console.log('bla');
  btn.addEventListener('click', heartActive);
};

module.exports = initFavorite;



