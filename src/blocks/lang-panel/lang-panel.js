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
