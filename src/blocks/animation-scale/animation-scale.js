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
