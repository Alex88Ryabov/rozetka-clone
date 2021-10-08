function productsMod() {

  const products = document.querySelectorAll('.products-preview__products');


  products[2].querySelectorAll('.product-small-card').forEach(rowThree => {
    rowThree.classList.add('product-small-card--border-color');

  })


};

module.exports = productsMod;