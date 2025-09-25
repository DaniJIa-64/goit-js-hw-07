const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;
  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };
  info.email === '' || info.password === ''
    ? alert('All form fields must be filled in')
    : console.log(info);
  event.target.reset();
}
