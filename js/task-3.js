const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', handleWrite);

function handleWrite(event) {
  if (event.target.value.trim() === '') {
    return (output.textContent = 'Anonymous');
  } else {
    output.textContent = event.target.value.trim();
  }
}
