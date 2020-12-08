(() => {
  document.addEventListener('DOMContentLoaded', () => {
    let stage = document.querySelector('.stage');
    let logMessage = (message) => {
      let paragraph = document.createElement('p');
      paragraph.innerText = message;
      paragraph.classList.add('message');

      document.body.append(paragraph);
    };

    stage.addEventListener('mouseover', () => {
      let message = 'Mouseul este pe scena';
      console.log(message);
      logMessage(message);
    });

    stage.addEventListener('mouseout', () => {
      let message = 'Mouseul nu este pe scena';
      console.log(message);
      logMessage(message);
    });
  });
})();
