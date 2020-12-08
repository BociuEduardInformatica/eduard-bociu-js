const seatHand = document.querySelector('.seat .hand');
const stayButton = document.querySelector('.js-stay');
const hitButton = document.querySelector('.js-hit');

const game = {
  cards: [],
  state: 'play',
  // getter
  get card() {
    let cardsLength = this.cards.length;
    let randomIndex = Math.floor(Math.random() * cardsLength);
    let cardObject = this.cards[randomIndex];

    // splice mutates
    this.cards.splice(randomIndex, 1);

    return cardObject;
  },
  generateCards: function () {
    let upperLimit = 10;
    let suites = ['heart', 'club', 'spade', 'diamond'];
    let nonNumericCards = ['J', 'Q', 'K'];

    // this.cards = [];
    this.cards.length = 0;

    suites.forEach((suite) => {
      for (let i = 2; i <= upperLimit; i++) {
        let cardObject = {
          suite,
          // suite: suite
          value: i,
          displayValue: i,
        };

        this.cards.push(cardObject);
      }

      nonNumericCards.forEach((letter) => {
        let cardObject = {
          suite,
          value: 10,
          displayValue: letter,
        };

        this.cards.push(cardObject);
      });

      this.cards.push({
        suite,
        value: 11,
        displayValue: 'A',
      });
    });
  },
  deal: function (player) {
    player.hand = [this.card, this.card];
    player.renderHand();
  },
  check: function (player) {
    if (player.points > 21) {
      this.state = 'lost';
    }

    this.renderState();
  },
  checkRound: function (player) {
    if (player.points > 21) {
      this.state = 'lost';
    } else {
      this.state = 'won';
    }

    this.renderState();
  },
  renderState: function () {
    const documentFragment = document.createElement('section');
    documentFragment.classList.add('mt-4');
    if (this.state !== 'play') {
      const resetButton = document.createElement('button');
      resetButton.classList.add('button');
      resetButton.classList.add('button--shake');
      resetButton.innerText = 'Reset Game';
      resetButton.addEventListener('click', (event) => {
        this.reset();
        event.target.remove();
      });

      documentFragment.append(resetButton);

      seatHand.parentElement.parentElement.append(documentFragment);
    }
  },
  reset: function () {
    this.generateCards();
    this.deal(player);
    this.state = 'play';
  },
};

const player = {
  points: 0,
  hand: [],
  renderHand: function () {
    const documentFragment = new DocumentFragment();
    documentFragment.innerHTML = '';
    /*eslint-disable*/
    this.hand.forEach((card) => {
      const template = `
        <div class="card${
          ['diamond', 'heart'].includes(card.suite) === true ? ' card--red' : ''
        }">
          <div class="card__number card__number--primary">
            <div class="card__digit">${card.displayValue}</div>

            <div class="card__suite">
              <svg
                class="card__suite-icon"
                viewBox="0 0 40 40"
              >
                <use xlink:href="#${card.suite}"></use>
              </svg>
            </div>
          </div>
          <!-- .card__number  -->

          <div class="card__number card__number--secondary">
            <div class="card__digit">${card.displayValue}</div>

            <div class="card__suite">
              <svg
                class="card__suite-icon"
                viewBox="0 0 40 40"
              >
                <use xlink:href="#${card.suite}"></use>
              </svg>
            </div>
          </div>
          <!-- .card__number  -->
        </div>
        <!-- .card  -->
      `;

      documentFragment.innerHTML += template;
    });
    /*eslint-enable*/

    seatHand.innerHTML = documentFragment.innerHTML;
  },
  hit: function () {
    this.hand.push(game.card);

    this.calculatePoints();

    return this;
  },
  calculatePoints: function () {
    this.points = 0;

    this.hand.forEach((card) => {
      this.points += card.value;
      // this.points = this.points + card.value;
    });

    return this.points;
  },
};

hitButton.addEventListener('click', () => {
  if (game.state !== 'play') {
    return;
  }
  player.hit().renderHand();
  game.check(player);
});

stayButton.addEventListener('click', () => {
  if (game.state !== 'play') {
    return;
  }
  game.checkRound(player);
});

game.generateCards();
game.deal(player);
player.calculatePoints();
