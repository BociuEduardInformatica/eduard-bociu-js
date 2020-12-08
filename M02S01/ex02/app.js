class Vehicle {
  constructor(make, color, wheels, speed, topSpeed, topReverseSpeed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  displaySpeed() {
    console.log(`Viteza curenta este: ${this.speed}`);
  }

  getSpeed(format) {
    let speed = format === true ? `${this.speed} km/h` : this.speed;

    return speed;
  }

  accelerate() {
    let newSpeed = this.speed + 1;
    this.setSpeed(newSpeed);
  }

  decelerate() {
    let newSpeed = this.speed - 1;
    this.setSpeed(newSpeed);
  }

  stop() {
    this.setSpeed(0);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      this.displaySpeed();
      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      this.displaySpeed();
      return;
    }

    this.speed = speed;
    this.displaySpeed();
  }
}

class Car extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 4, speed, topSpeed, topReverseSpeed);
  }
}

class Bicycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 2, speed, topSpeed, 0);
  }

  decelerate() {
    // let speed = this.speed--;
    // if (speed < 0) {}
    if (--this.speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    }

    this.displaySpeed();
  }
}

// Instantiaza o bicicleta
// (marca Pegas, culoare red, viteza curenta 8, si viteza maxima 20).
// O poti stoca intr-o variabila numita bike.
// Seteaza viteza instantei bike la 2
// Foloseste metoda decelerate() de trei ori, ce observi?
// Seteaza viteza instantei bike la -10, ce observi?
let bike = new Bicycle('Pegas', 'red', 8, 20);
bike.setSpeed(2);
bike.decelerate();
bike.decelerate();
bike.decelerate();

// Creeaza o noua clasa care extinde Vehicle in mod similar
// cu Bicycle, numita Tricycle. Diferenta fiind ca o tricicleta are trei roti.
// Instantiaza o tricicleta (marca Tryke, culoare red, viteza curenta 2,
// viteza minima -2, viteza maxima 9). O poti stoca intr-o variabila numita trike.
// Seteaza viteza instantei trike la 0
// Foloseste metoda decelerate() de trei ori, ce observi?
// Seteaza viteza instantei trike la -10, ce observi?
class Tricycle extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 3, speed, topSpeed, topReverseSpeed);
  }
}

let trike = new Tricycle('Tryke', 'red', 2, 9, -2);
trike.setSpeed(0);
trike.decelerate();
trike.decelerate();
trike.decelerate();

// Creeaza o masina noua (marca Audi, culoare blue, viteza curenta 3,
// viteza maxima 140, viteza minima -50).
// Seteaza viteza noii instante la 140, apoi ruleaza metoda accelerate(), ce observi?
let audi = new Car('Audi', 'blue', 3, 140, -50);
audi.setSpeed(140);
audi.accelerate();
