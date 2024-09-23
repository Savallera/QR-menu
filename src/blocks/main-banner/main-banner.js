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
