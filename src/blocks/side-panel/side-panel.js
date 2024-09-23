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
