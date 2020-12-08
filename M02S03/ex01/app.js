class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;

    this.domId = `${this.make.toLowerCase()}${this.color}${Date.now()}`;

    this.displayDomSpeed();
  }

  accelerate() {
    this.speed++;

    return this;
  }

  decelerate() {
    this.speed--;

    return this;
  }

  displayDomSpeed() {
    let speedDial = document.getElementById(this.domId);

    if (speedDial === null) {
      speedDial = document.createElement('div');
    }

    speedDial.id = this.domId;
    speedDial.innerText = `${this.speed}km/h`;

    document.body.append(speedDial);
  }
}

let audi = new Car('Audi', 'black', 4, 50);
