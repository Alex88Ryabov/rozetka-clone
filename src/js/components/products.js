function productsOpen () {
const productsSection = document.querySelectorAll('.js-products');

productsSection.forEach(section => {
  const btnOpen = section.querySelector('.js-products-open');
  const products = section.querySelectorAll('.js-product');
  const iconArrow = btnOpen.querySelector('.products-preview__icon');

  btnOpen.addEventListener('click', () => {
    if (section.classList.contains('is-show')) {
      section.classList.remove('is-show');
      btnOpen.querySelector('span').textContent = 'Все акции';
      if (iconArrow.classList.contains('products-preview__icon--rotate')) {
        iconArrow.classList.remove('products-preview__icon--rotate');
      }
      
      products.forEach((product, index) => {
        if (index > 5) {
          product.classList.add('hidden')
        }
        
      })
    } else {
      section.classList.add('is-show');
      btnOpen.querySelector('span').textContent = 'Скрыть';
      iconArrow.classList.add('products-preview__icon--rotate');
      products.forEach(product => {
        product.classList.remove('hidden')
      })
    };
    
  });
});
};
module.exports = productsOpen;