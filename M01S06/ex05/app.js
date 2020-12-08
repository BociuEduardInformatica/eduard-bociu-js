// 1. In functia adaugata ca parametru la addEventListener
// keywordul this face referinta la elementul de DOM al butonului. \
// Folosind proprietatea innerText schimba mesajul
// Opreste Afisarea in Porneste Afisarea in functie de statusul evenimentelor.
// 2. Folosind metode deja cunoscute,
// adauga un paragraf in DOM care contine textul:
// “Alerta va fi afisata”, respective
// “Alerta nu va fi afisata” in functie de statusul evenimentelor.
// 3. Adauga un buton in document pe care cand apesi,
// sunt eliminate celelate butoane cu metoda .remove()
// 4. Folosind metoda confirm(), modifica
// codul de la punctul anterior astfel incat utilizatorul
// sa confirme eliminarea elementelor din DOM:
// “Esti sigur ca vrei sa stergi butoanele din DOM?”.

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    let showButton = document.querySelector('#showButton');
    let toggleEventButton = document.querySelector('#toggleEventButton');
    let removeButton = document.querySelector('#removeButtons');
    let paragraphMessage = document.querySelector('#message');
    let eventBound = true;

    let showAlert = () => {
      alert('Butonul a fost apasat');
    };

    showButton.addEventListener('click', showAlert);

    removeButton.addEventListener('click', () => {
      let approveRemoval = confirm(
        'Esti sigur ca vrei sa stergi butoanele din DOM?',
      );

      if (approveRemoval !== true) {
        return;
      }

      showButton.remove();
      toggleEventButton.remove();
    });

    toggleEventButton.addEventListener('click', (event) => {
      let textEnabled = 'Opreste Afisarea';
      let textDisabled = 'Porneste Afisarea';
      let messageEnabled = 'Alerta va fi afisata.';
      let messageDisabled = 'Alerta NU va fi afisata.';

      if (eventBound === true) {
        showButton.removeEventListener('click', showAlert);
        eventBound = false;

        event.target.innerText = textDisabled;
        paragraphMessage.innerText = messageDisabled;
      } else {
        showButton.addEventListener('click', showAlert);
        eventBound = true;

        event.target.innerText = textEnabled;
        paragraphMessage.innerText = messageEnabled;
      }
    });
  });
})();
