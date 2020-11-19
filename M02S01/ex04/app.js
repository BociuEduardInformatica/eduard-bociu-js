class Car {
  constructor(left = 210, top = 8, color = 'black') {
    this.left = left;
    this.top = top;
    this.color = color;
    // this.frame =
  }

  frame = document.createElement('div');
  car = document.createElement('div');
  carTop = document.createElement('div');
  carBody = document.createElement('div');
  lightFront = document.createElement('div');
  lightBack = document.createElement('div');
  wheelFront = document.createElement('div');
  wheelBack = document.createElement('div');
  hubCapFront = document.createElement('div');
  hubCapBack = document.createElement('div');

  render() {
    this.frame.classList.add('frame');
    this.frame.style.cssText = `left: ${this.left}px; top: ${this.top}px;`;

    // car block (BEM)
    this.car.classList.add('car');
    this.frame.append(this.car);

    // car top
    this.carTop.classList.add('car__top');
    this.car.append(this.carTop);

    // car body
    this.carBody.classList.add('car__body');
    this.car.append(this.carBody);

    // car lights
    this.lightFront.classList.add('light', 'light--front');
    this.lightBack.classList.add('light', 'light--back');
    this.carBody.append(this.lightBack);
    this.carBody.append(this.lightFront);

    // car wheels
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.carBody.append(this.wheelFront);
    this.carBody.append(this.wheelBack);

    // car hubcaps
    this.hubCapFront.classList.add('wheel__cap');
    this.hubCapBack.classList.add('wheel__cap');
    this.wheelFront.append(this.hubCapFront);
    this.wheelBack.append(this.hubCapBack);

    document.body.append(this.frame);
  }
}

let car = new Car();

car.render();

// car2 = new Car(150, 250, 'red')
