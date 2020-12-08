// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

let $p = $('<p>', {
  id: 'myParagraph',
  text: 'Textul care trebuie sa apra in paragraf',
  class: 'clase de css',
});

// Salveaza obiectul jQuery $('body') intr-o variabila numita $body si
// foloseste-o in metoda appendTo().
// https://api.jquery.com/appendTo/
// Creaza inca un paragraf cu idul message care sa contina textul:
// “Parola nu trebuie sa fie mai mica de 5 caractere.”.
// Folosind metoda append a obiectului $body, adauga noul obiect in DOM.
// https://api.jquery.com/append/
// Dupa ce l-ai adaugat, foloseste dupa 5 secunde metoda addClass a
//noului obiect pentru a ii adauga clasa error.
// https://api.jquery.com/addClass/
let $body = $('body');
$body.append($p);

$p1 = $('<p>', {
  id: 'message',
  text: 'Parola nu trebuie sa fie mai mica de 5 caractere.',
});
$body.append($p1);
setTimeout(() => {
  $p1.addClass('error');
}, 5000);

// Selecteaza paragraful anterior (#myParagraph) si schimba textul sau in
// textul: “Am schimbat dinamic acest paragraf.” Folosind metoda .text()
// https://api.jquery.com/text/
// Creeaza un element de tip span cu idul example si cu textul
// “ParolaMea” si adauga-l la cel de-al doilea paragraf folosind metoda .appendTo()
// Creeaza un element de tip h2 cu textul “Mesaje” si adauga-l
// la inceputul div-ului cu clasa container folosind metoda .prependTo()
// https://api.jquery.com/prependTo/

//js
let message = 'Am schimbat dinamic acest paragraf.';
// document.getElementById('myParagraph').innerText = message;
// jQuery
$('#myParagraf').text(message);

$('<span>', {
  id: 'example',
  text: 'ParolaMea',
}).appendTo($p1);

let span = document.createElement('span');
span.id = 'example2';
span.innerText = 'Parola Ta';
$p1[0].append(span);

$('<h2>', {
  text: 'Mesage',
}).prependTo('.container');
// .prependTo($('.container'))

let h2 = document.createElement('h2');
h2.innerText = 'Message 2';
document.querySelector('.container').prepend(h2);
