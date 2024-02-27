const orderContainer = document.querySelector('.order');
const orderHeader = document.querySelector('.order__header');
const orderEditContainer = document.querySelector('.order__card_type_edit');
const orderSuccessContainer = document.querySelector(
  '.order__card_type_success'
);
const orderContinueButton = document.querySelector(
  '.order-panel__button_role_continue'
);
const orderButton = document.querySelector('.order-panel__button_role_order');
const newOrderButton = document.querySelector(
  '.order-panel__button_role_new-order'
);
const orderBackButton = document.querySelector(
  '.order__header-button_type_back'
);
const orderClearButton = document.querySelector(
  '.order__header-button_type_clear'
);
const orderAddMoreButton = document.querySelector('.order__add-more-button');
const openOrderPanel = () => {
  orderContainer.classList.add('order_opened');
  orderContinueButton.classList.add('visually-hidden');
  orderButton.classList.remove('visually-hidden');
  document.body.style.overflow = 'hidden';
};
const closeOrderPanel = () => {
  orderContainer.classList.remove('order_opened');
  orderContinueButton.classList.remove('visually-hidden');
  orderButton.classList.add('visually-hidden');
  document.body.style.overflow = 'initial';

  backAfterSuccessedOrder();
};
const successedOrder = () => {
  orderHeader.querySelector('.order__title').classList.add('visually-hidden');
  orderClearButton.classList.add('visually-hidden');
  orderEditContainer.classList.add('visually-hidden');
  orderSuccessContainer.classList.remove('visually-hidden');
  orderButton.classList.add('visually-hidden');
  newOrderButton.classList.remove('visually-hidden');
};
const backAfterSuccessedOrder = () => {
  newOrderButton.classList.add('visually-hidden');
  orderHeader
    .querySelector('.order__title')
    .classList.remove('visually-hidden');
  orderClearButton.classList.remove('visually-hidden');
  orderEditContainer.classList.remove('visually-hidden');
  orderSuccessContainer.classList.add('visually-hidden');
  orderButton.classList.add('visually-hidden');
  newOrderButton.classList.add('visually-hidden');
};

orderContinueButton.addEventListener('click', openOrderPanel);
orderBackButton.addEventListener('click', closeOrderPanel);
orderAddMoreButton.addEventListener('click', closeOrderPanel);
orderButton.addEventListener('click', successedOrder);
newOrderButton.addEventListener('click', closeOrderPanel);
