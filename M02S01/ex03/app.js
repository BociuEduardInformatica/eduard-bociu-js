let Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 100,
  topReverseSpeed: -50,
  displaySpeed: function () {
    console.log(
      `Vehiculul ${this.make} se deplasa cu viteaza ${this.speed}km/h.`,
    );
  },
  accelerate: function () {
    this.setSpeed(this.speed + 1);
  },
  decelerate: function () {
    this.setSpeed(this.speed - 1);
  },
  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
    } else if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    } else {
      this.speed = speed;
    }

    this.displaySpeed();
  },
  flashLights: function () {
    this.turnLightsOn();
    setTimeout(this.turnLightsOff, 1000 * 3);
    // 10 * 24 * 60 * 60 * 1000
  },
};

let audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
audi.test = 'test';
audi.topSpeed = 140;

// Adauga metoda setSpeed(), proprietatile topSpeed si topReverseSpeed
// si implementeaza protectiile deja cunoscute.
// Seteaza topSpeed la 140 apoi ruleaza metoda setSpeed() pentru a face viteza curenta 140.
// Ruleaza metoda accelerate().
audi.setSpeed(140);
audi.accelerate();
