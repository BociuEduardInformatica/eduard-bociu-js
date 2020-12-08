class Car {
  constructor(
    left = 210,
    top = 8,
    color = 'black',
    wheelColor = 'black',
    capColor = 'white',
  ) {
    this.left = left;
    this.top = top;
    this.color = color;
    this.wheelColor = wheelColor;
    this.capColor = capColor;
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
  hazardInterval = 500;

  move(left = 0, top = 0) {
    left = parseInt(left);
    top = parseInt(top);

    if (isNaN(left) || isNaN(top)) {
      left = 0;
      top = 0;
    }

    this.frame.style.left = `${left}px`;
    this.frame.style.top = `${top}px`;
  }

  changeColor(object, color = '#000') {
    if (!this.hasOwnProperty(object) || this[object].nodeName === undefined) {
      console.warn(`Nu am gasit obiectul ${object} pe aceasta instanta.`);

      return;
    }

    // object bracket notation
    this[object].style.backgroundColor = color;
  }

  toggleHazards() {
    if (this.intervalId === undefined) {
      this.intervalId = setInterval(() => {
        this.toggleLights();
      }, this.hazardInterval);
    } else {
      clearInterval(this.intervalId);
      this.lightFront.classList.remove('light--on');
      this.lightBack.classList.remove('light--on');
      delete this.intervalId;
    }
  }

  toggleLights() {
    this.lightFront.classList.toggle('light--on');
    this.lightBack.classList.toggle('light--on');
  }

  render() {
    this.frame.classList.add('frame');
    this.frame.style.cssText = `left: ${this.left}px; top: ${this.top}px;`;

    // car block (BEM)
    this.car.classList.add('car');
    this.frame.append(this.car);

    // car top
    this.carTop.classList.add('car__top');
    this.carTop.style.backgroundColor = this.color;
    this.car.append(this.carTop);

    // car body
    this.carBody.classList.add('car__body');
    this.carBody.style.backgroundColor = this.color;
    this.car.append(this.carBody);

    // car lights
    this.lightFront.classList.add('light', 'light--front');
    this.lightBack.classList.add('light', 'light--back');
    this.carBody.append(this.lightBack);
    this.carBody.append(this.lightFront);

    // car wheels
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.wheelFront.style.backgroundColor = this.wheelColor;
    this.wheelBack.style.backgroundColor = this.wheelColor;
    this.carBody.append(this.wheelFront);
    this.carBody.append(this.wheelBack);

    // car hubcaps
    this.hubCapFront.classList.add('wheel__cap');
    this.hubCapBack.classList.add('wheel__cap');
    this.hubCapFront.style.backgroundColor = this.capColor;
    this.hubCapBack.style.backgroundColor = this.capColor;
    this.wheelFront.append(this.hubCapFront);
    this.wheelBack.append(this.hubCapBack);

    document.body.append(this.frame);
  }
}

let car = new Car();
car.render();

let car2 = new Car(500, 500, 'red');
car2.render();

let car3 = new Car(5, 500, 'cyan', 'blue', 'gray');
car3.render();
