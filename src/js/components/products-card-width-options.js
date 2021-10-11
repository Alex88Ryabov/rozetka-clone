function productsCardWidth() {
  const products = document.querySelectorAll('.js-products')
  const productsContainer = document.querySelectorAll('.js-product-cards');

  for (let j = 0; j < productsContainer.length; j++) {
    const productCard = productsContainer[j].querySelectorAll('.js-product');
    const dataLength = products[j].dataset.length;
    const productsBtn = products[j].querySelector('.js-products-open');
    productsBtn.style.minWidth = `${productCard[0].offsetWidth  }px`;


    for (let i = 0; i < productCard.length; i++) {

      productCard[i].style.minWidth = `${productsContainer[0].offsetWidth
        / dataLength - 1}px`
      productCard[i].style.maxWidth = `${productsContainer[0].offsetWidth
        / dataLength}px`



    };
  };


};

  module.exports = productsCardWidth;