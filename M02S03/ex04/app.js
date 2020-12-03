const img = document.querySelector('.image');
// $img.parent() <- jQuery
const paragraph = img.parentElement;
const loadedMessage = 'Imaginea s-a incarcat.';

img.addEventListener('load', () => {
  const messageContainer = document.createElement('span');
  messageContainer.innerText = loadedMessage;

  paragraph.append(messageContainer);
});
