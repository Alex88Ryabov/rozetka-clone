



function productsCardWidth() {
  const DesctopScreenWidth = 1920;
  const LaptopScreenWidth = 1440;
  const TabletScreenWidth = 1280;
  const SmartphoneScreenWidth = 768;
  const ProductsToShowDesctop = 6;
  const ProductsToShowLaptop = 5;
  const ProductsToShowTablet = 4;
  const ProductsToShowSmartphone = 2;
  const FullWidth = 100;
  const products = document.querySelectorAll('.js-products')
  const productsContainer = document.querySelectorAll('.js-product-cards');



  for (let j = 0; j < productsContainer.length; j++) {
    const productCard = productsContainer[j].querySelectorAll('.js-product');
    const productsBtn = products[j].querySelector('.js-products-open');
    
    for (let i = 0; i < productCard.length; i++) {
      if (window.innerWidth <= DesctopScreenWidth && window.innerWidth > LaptopScreenWidth) {
        productCard[i].style.maxWidth = `${FullWidth / ProductsToShowDesctop}%`
        productCard[i].style.minWidth = `${FullWidth / ProductsToShowDesctop}%`
      } else if (window.innerWidth <= LaptopScreenWidth && window.innerWidth > TabletScreenWidth) {
        productCard[i].style.maxWidth = `${FullWidth / ProductsToShowLaptop}%`
        productCard[i].style.minWidth = `${FullWidth / ProductsToShowLaptop}%`
      } else if (window.innerWidth <= TabletScreenWidth && window.innerWidth > SmartphoneScreenWidth) {
        productCard[i].style.maxWidth = `${FullWidth / ProductsToShowTablet}%`
        productCard[i].style.minWidth = `${FullWidth / ProductsToShowTablet}%`

      } else if (window.innerWidth <= SmartphoneScreenWidth) {
        productCard[i].style.maxWidth = `${FullWidth / ProductsToShowSmartphone}%`
        productCard[i].style.minWidth = `${FullWidth / ProductsToShowSmartphone}%`

      }
      

    };
    if (window.innerWidth <= SmartphoneScreenWidth) {
      productsBtn.style.width = `${FullWidth}%` ;
    } else {
      productsBtn.style.width = `${productCard[0].offsetWidth}px`;

    }
  };


};

module.exports = productsCardWidth;