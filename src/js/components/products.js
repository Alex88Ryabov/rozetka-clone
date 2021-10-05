const productsSection = document.querySelectorAll('.js-products');

// const favourites = document.querySelector('.product-small-card__btn');
// const icon = document.querySelector('.product-small-card__icon');
// const btn = document.querySelector('.products-preview__btn');
// const arrow = document.querySelector('.products-preview__icon');
// products.forEach(product => {
//   product.classList.remove('hidden');
// })

productsSection.forEach(section => {
  const btnOpen = section.querySelector('.js-products-open');
  const products = section.querySelectorAll('.js-product');
  
  btnOpen.addEventListener('click', () => {
    if (section.classList.contains('is-show')) {
      section.classList.remove('is-show');
      btnOpen.textContent = 'Все акции';

      products.forEach((product, index) => {
        if (index > 5) {
          product.classList.add('hidden')
        }
        
      })
    } else {
      section.classList.add('is-show');
      btnOpen.textContent = 'Скрыть';
      products.forEach(product => {
        product.classList.remove('hidden')
      })
    }
    
  
  })
})

// let i = 0;
// const closeProducts = () => {
//   while(i < products.length) {
//     products[i].classList.add('product-small-card--hidden');

// };





// btn.addEventListener('click', closeProducts);




//    // arrow.classList.toggle('products-priview__icon--rotate');
// //   btn.classList.toggle('products-preview__btn--shown');
// // };
