const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', handleWrite);

function handleWrite(event) {
  if (event.target.value.trim()) {
    output.textContent = event.target.value;
  } else {
    return (output.textContent = 'Anonymous');
  }
}
