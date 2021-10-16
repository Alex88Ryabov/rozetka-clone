function productsOpen() {
  const DesctopScreenWidth = 1440;
  const LaptopScreenWidth = 1280;
  const TabletScreenWidth = 768;
  const ProductsToShowDesctop = 6;
  const ProductsToShowLaptop = 5;
  const ProductsToShowTablet = 4;
  const ProductsToShowSmartphone = 2;
  const productsSection = document.querySelectorAll('.js-products');


  productsSection.forEach(section => {
    const btnOpen = section.querySelector('.js-products-open');
    const products = section.querySelectorAll('.js-product');
    const iconArrow = btnOpen.querySelector('.products-preview__icon');

    const addHidden = (productsLength) => {
      for (let i = productsLength; i < products.length; i++) {
        products[i].classList.add('hidden');

      }
    }

    products.forEach((product) => {
      product.classList.remove('hidden');

      if (window.innerWidth >= DesctopScreenWidth) {
        addHidden(ProductsToShowDesctop);
      } else if (window.innerWidth <= DesctopScreenWidth && window.innerWidth >= LaptopScreenWidth) {
        product.classList.remove('hidden');
        addHidden(ProductsToShowLaptop);
      } else if (window.innerWidth <= LaptopScreenWidth && window.innerWidth >= TabletScreenWidth) {
        product.classList.remove('hidden');
        addHidden(ProductsToShowTablet);
      } else if (window.innerWidth <= TabletScreenWidth) {
        product.classList.remove('hidden');
        addHidden(ProductsToShowSmartphone);
      };
    });




    btnOpen.addEventListener('click', () => {
      if (section.classList.contains('is-shown')) {
        section.classList.remove('is-shown');
        btnOpen.querySelector('span').textContent = 'Все акции';
        if (iconArrow.classList.contains('js-products-icon-rotate')) {
          iconArrow.classList.remove('js-products-icon-rotate');
        }

        products.forEach((product, index) => {
          if (index >= ProductsToShowDesctop) {
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