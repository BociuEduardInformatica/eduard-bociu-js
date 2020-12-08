// better use feature detection

let paragraphElement = document.createElement('p');
let userAgentString = navigator.userAgent;
let message = 'Nu stim ce browser folosesti.';

if (
  userAgentString.indexOf('Chrome') >= 0 ||
  userAgentString.indexOf('Firefox') >= 0
) {
  message = 'Navighezi folosind Chrome sau Firefox';
}

paragraphElement.innerText = message;

document.body.append(paragraphElement);
