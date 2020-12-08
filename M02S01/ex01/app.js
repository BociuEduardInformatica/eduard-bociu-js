class Car {
  topReverseSpeed = -50;

  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;

    this.topSpeed = 160;
  }

  accelerate() {
    this.speed++;
    // this.speed = this.speed + 1;
    // this.speed += 1;
  }

  decelerate() {
    this.speed--;
    // this.speed = this.speed -1;
    // this.speed -= 1;
  }

  stop() {
    this.speed = 0;

    console.log(this.speed);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  }
}

// new Date()
let audi = new Car('Audi', 'black', 4, 50);

console.warn(`
  Instantiaza o alta masina (Opel, red, cu 4 roti si viteza 3).
  O poti salva intr-o variabila numita opel.
`);
let opel = new Car('Opel', 'red', 4, 3);

console.warn(`
  Adauga o metoda numita stop() care sa faca proprietatea
  speed 0, apoi afiseaza viteza.
`);

const cars = [audi, opel];
