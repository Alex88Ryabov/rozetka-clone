function initFavorite() {
  const cards = document.querySelectorAll('.js-product');


  cards.forEach(card => {
    const favoriteBtn = card.querySelector('.js-favorite');
    const heartIcon = favoriteBtn.querySelector('.js-favorite-icon');
    favoriteBtn.classList.add('is-shown');


    const pushFavoriteBtn = () => {
      if (favoriteBtn.classList.contains('is-shown')) {
        favoriteBtn.classList.remove('is-shown');
        heartIcon.classList.add('is-active');
      } else {
        favoriteBtn.classList.add('is-shown');
        heartIcon.classList.remove('is-active');
        
      };
    };
    
    // heartIcon.classList.conains('is-active');
    favoriteBtn.addEventListener('click', pushFavoriteBtn);
  })





};


module.exports = initFavorite;



