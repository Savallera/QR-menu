const popup = document.querySelector('.popup');
const openPopup = function () {
  popup.classList.add('popup_opened');
};
const closePopup = function () {
  popup.classList.remove('popup_opened');
};
cards.forEach((card) => {
  card.querySelector('.card__image').addEventListener('click', () => {
    openPopup();
  });
});
popup.addEventListener('click', (evt) => {
  if (
    evt.target.classList.contains('popup') ||
    evt.target.classList.contains('popup__close-button')
  ) {
    closePopup();
  }
});
