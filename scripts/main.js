
const cardLists = document.querySelectorAll('.page__card-deck');
const cards = document.querySelectorAll('.card');

const cardDeckButton = document.querySelector('.icon--type-card-deck');
const listButton = document.querySelector('.icon--type-list');
const changeViewOnCardDeck = (event) => {
  listButton.classList.remove('icon-button_actived');
  cardDeckButton.classList.add('icon-button_actived');
  cardLists.forEach((list) => list.classList.remove('page__card-deck_wide-cards'));
  cards.forEach((card) => {
    card.classList.remove('card_orientation-gorizontal');
  });
  event.target.classList.add('icon-button_actived');
};
const changeViewOnList = () => {
  cardDeckButton.classList.remove('icon-button_actived');
  listButton.classList.add('icon-button_actived');
  cardLists.forEach((list) => list.classList.add('page__card-deck_wide-cards'));
  cards.forEach((card) => {
    card.classList.add('card_orientation-gorizontal');
  });
};

const openCardDetail = (container) => {
  container.classList.add('card_detail-opened');
};
const closeCardDetail = (container) => {
  container.classList.remove('card_detail-opened');
};

cardDeckButton.addEventListener('click', changeViewOnCardDeck);
listButton.addEventListener('click', changeViewOnList);

cards.forEach((card) => {
  if (card.querySelector('.card__info-button')) {
    const infoButton = card.querySelector('.card__info-button');
    const closeButton = card.querySelector('.card__close-button');
    infoButton.addEventListener('click', () => {
      openCardDetail(card);
    });

    closeButton.addEventListener('click', () => {
      closeCardDetail(card);
    });
  }
});

const langPanel = document.querySelector('.lang-panel');
const langPanelContainer = document.querySelector('.lang-panel__container');
const langPanelButton = document.querySelector('.lang-panel__button');
const openLangPanel = () => {
  langPanel.classList.add('lang-panel_opened');
};
const closeLangPanel = () => {
  langPanel.classList.remove('lang-panel_opened');
};
langPanelButton.addEventListener('click', () => {
  if (langPanel.classList.contains('lang-panel_opened')) {
    closeLangPanel();
    return;
  }
  openLangPanel();
});

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
