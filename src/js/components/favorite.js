import test from './test';

function initFavorite() {
  const cards = document.querySelectorAll('.js-product');

  cards.forEach(card => {
    const favoriteBtn = card.querySelector('.js-favorite');
    const favoriteIcon = favoriteBtn.querySelector('.js-favorite-icon');


    const pushFavoriteBtn = () => {
      favoriteIcon.classList.toggle('is-active');
    };


    favoriteBtn.addEventListener('click', pushFavoriteBtn);
  });
};


module.exports = initFavorite;



