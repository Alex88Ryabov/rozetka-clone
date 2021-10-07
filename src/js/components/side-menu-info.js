

function accordionBurgerMenuInfo() {

const infoParts = document.querySelectorAll('.js-part');
infoParts.forEach(infoPart => {
  const infoBtn = infoPart.querySelector('.js-info-btn');
  const infoList = infoPart.querySelector('.js-info-list');
  const infoIcon = infoPart.querySelector('svg');

  const openList = () => {
    infoList.classList.toggle('js-info-list-is-active');
    infoIcon.classList.toggle('js-info-icon-rotate');
  }

  infoBtn.addEventListener('click', openList);
})

};
















module.exports = accordionBurgerMenuInfo;