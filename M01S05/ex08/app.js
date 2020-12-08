let button = document.getElementById('clicker');
let removeButton = document.getElementById('remove');
let clickHandler = () => {
  alert('Ai apasat butonul!');
};

button.addEventListener('click', clickHandler);

removeButton.addEventListener('click', () => {
  button.removeEventListener('click', clickHandler);
});

('test');
