const cardList = document.querySelector('.page__card-deck');
const cards = document.querySelectorAll('.card');

const cardDeckButton = document.querySelector('.icon--type-card-deck');
const listButton = document.querySelector('.icon--type-list');
const changeViewOnCardDeck = (event) => {
  listButton.classList.remove('icon-button_actived');
  cardDeckButton.classList.add('icon-button_actived');
  cardList.classList.remove('page__card-deck_one-column');
  cards.forEach((card) => {
    card.classList.remove('card_orientation-gorizontal');
  });
  event.target.classList.add('icon-button_actived');
};
const changeViewOnList = () => {
  cardDeckButton.classList.remove('icon-button_actived');
  listButton.classList.add('icon-button_actived');
  cardList.classList.add('page__card-deck_one-column');
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
