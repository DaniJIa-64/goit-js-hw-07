function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

button.addEventListener('click', handleClick);

function handleClick() {
  spanColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = spanColor.textContent;
}
