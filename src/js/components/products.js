function productsOpen() {
  const productsSection = document.querySelectorAll('.js-products');


  productsSection.forEach(section => {
    const btnOpen = section.querySelector('.js-products-open');
    const products = section.querySelectorAll('.js-product');
    const iconArrow = btnOpen.querySelector('.products-preview__icon');
    const maxProductsLengthToShowStart = section.getAttribute('data-length');

    products.forEach((product, index) => {
      if (index > (maxProductsLengthToShowStart - 1)) {
        product.classList.add('hidden');
      }
    })



    btnOpen.addEventListener('click', () => {
      if (section.classList.contains('is-shown')) {
        section.classList.remove('is-shown');
        btnOpen.querySelector('span').textContent = 'Все акции';
        if (iconArrow.classList.contains('js-products-icon-rotate')) {
          iconArrow.classList.remove('js-products-icon-rotate');
        }

        products.forEach((product, index) => {
          if (index > (maxProductsLengthToShowStart - 1)) {
            product.classList.add('hidden');
          }
        })
      } else {
        section.classList.add('is-shown');
        btnOpen.querySelector('span').textContent = 'Скрыть';
        iconArrow.classList.add('js-products-icon-rotate');
        products.forEach(product => {
        product.classList.remove('hidden');
        })
      };

    });
  });
};
module.exports = productsOpen;