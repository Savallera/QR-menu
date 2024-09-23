
const iconButtons = document.querySelectorAll('.icon-button');
const scaleButton = (event) => {
  event.classList.add('animation-scale');
  setTimeout(() => {
    event.classList.remove('animation-scale');
  }, 250);
};
iconButtons.forEach((button) => {
  button.addEventListener('click', () => {
    scaleButton(button);
  });
});

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

const waiterContainer = document.querySelector('.side-panel_role_waiter-panel');
const sidePanelHeader = waiterContainer.querySelector('.side-panel__header');
const waiterPanelBackButton = waiterContainer.querySelector(
  '.side-panel__header-button_type_back'
);
const waiterList = waiterContainer.querySelector('.side-panel__list');
const waiterField = waiterContainer.querySelector('.side-panel__field');
const waiterOpenButton = document.querySelector(
  '.main-banner__button_role_waiter'
);
const waiterSendButton = document.querySelector(
  '.bottom-panel__button_role_waiter'
);
const radioButton = document.querySelector('#waiter-other');
const openWaiteContainer = () => {
  waiterContainer.classList.add('side-panel_opened');
  waiterSendButton.classList.remove('visually-hidden');
  bottomPanelButtonContinue.classList.add('visually-hidden');
  document.body.style.overflow = 'hidden';
};
const closeWaiteContainer = () => {
  waiterContainer.classList.remove('side-panel_opened');
  waiterSendButton.classList.add('visually-hidden');
  bottomPanelButtonContinue.classList.remove('visually-hidden');
  document.body.style.overflow = 'initial';
  waiterOpenButton.querySelector('.button__text').textContent =
    'Позвать официанта еще раз';
};
waiterOpenButton.addEventListener('click', openWaiteContainer);
waiterSendButton.addEventListener('click', closeWaiteContainer);
waiterPanelBackButton.addEventListener('click', closeWaiteContainer);
document.addEventListener('change', () => {
  if (radioButton.checked) {
    waiterField.classList.remove('visually-hidden');
    waiterList.classList.add('side-panel__decoration-bottom');
  } else {
    waiterField.classList.add('visually-hidden');
    waiterList.classList.remove('side-panel__decoration-bottom');
  }
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

const orderContainer = document.querySelector('.side-panel_role_order');
const orderHeader = orderContainer.querySelector('.side-panel__header');
const orderTitle = orderHeader.querySelector('.side-panel__title-block');
const orderBackButton = orderContainer.querySelector(
  '.side-panel__header-button_type_back'
);
const orderClearButton = orderContainer.querySelector(
  '.side-panel__header-button_type_clear'
);
const orderAddMoreButton = orderContainer.querySelector(
  '.side-panel__add-more-button'
);
const orderEditContainer = orderContainer.querySelector(
  '.side-panel__card_type_edit'
);
const orderSuccessContainer = orderContainer.querySelector(
  '.side-panel__card_type_success'
);
const bottomPanelButtonContinue = document.querySelector(
  '.bottom-panel__button_role_continue'
);
const bottomPanelButtonOrder = document.querySelector(
  '.bottom-panel__button_role_order'
);
const bottomPanelButtonNewOrder = document.querySelector(
  '.bottom-panel__button_role_new-order'
);
const openOrderContainer = () => {
  orderContainer.classList.add('side-panel_opened');
  bottomPanelButtonContinue.classList.add('visually-hidden');
  bottomPanelButtonOrder.classList.remove('visually-hidden');
  document.body.style.overflow = 'hidden';
};
const closeOrderContainer = () => {
  orderContainer.classList.remove('side-panel_opened');
  bottomPanelButtonContinue.classList.remove('visually-hidden');
  bottomPanelButtonOrder.classList.add('visually-hidden');
  document.body.style.overflow = 'initial';

  backAfterSuccessedOrder();
};
const successedOrder = () => {
  orderTitle.classList.add('visually-hidden');
  orderClearButton.classList.add('visually-hidden');
  orderEditContainer.classList.add('visually-hidden');
  orderSuccessContainer.classList.remove('visually-hidden');
  bottomPanelButtonOrder.classList.add('visually-hidden');
  bottomPanelButtonNewOrder.classList.remove('visually-hidden');
};
const backAfterSuccessedOrder = () => {
  bottomPanelButtonNewOrder.classList.add('visually-hidden');
  orderTitle.classList.remove('visually-hidden');
  orderClearButton.classList.remove('visually-hidden');
  orderEditContainer.classList.remove('visually-hidden');
  orderSuccessContainer.classList.add('visually-hidden');
  bottomPanelButtonOrder.classList.add('visually-hidden');
  bottomPanelButtonNewOrder.classList.add('visually-hidden');
};

orderBackButton.addEventListener('click', closeOrderContainer);
orderAddMoreButton.addEventListener('click', closeOrderContainer);
bottomPanelButtonContinue.addEventListener('click', openOrderContainer);
bottomPanelButtonOrder.addEventListener('click', successedOrder);
bottomPanelButtonNewOrder.addEventListener('click', closeOrderContainer);
