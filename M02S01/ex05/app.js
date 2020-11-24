class Shape {
  constructor(posX, posY, width, height, color, borderColor) {
    this.posX = posX;
    this.posY = posY;
    this.height = height;
    this.width = width;
    this.color = color;
    this.borderColor = borderColor;
  }

  htmlContainer = document.createElement('div');

  setPosX(x) {
    this.posX = x;
    this.htmlContainer.style.left = `${x}px`;
  }

  setPosY(y) {
    this.posY = y;
  }

  setWidth(w) {
    this.width = w;
  }

  setHeight(h) {
    this.height = h;
  }

  setColor(c) {
    this.color = c;
  }

  setBorderColor(bc) {
    this.borderColor = bc;
  }

  render() {
    const cssText = `
      left: ${this.posX}px;
      top: ${this.posY}px;
      width: ${this.width}px;
      height: ${this.height}px;
      background-color: ${this.color};
      border: 1px solid ${this.borderColor};
    `;

    this.htmlContainer.style.cssText = cssText;
    this.htmlContainer.classList.add('shape');

    document.body.append(this.htmlContainer);
  }
}

class Rectangle extends Shape {
  constructor(posX, posY, width, height, color, borderColor) {
    super(posX, posY, width, height, color, borderColor);

    this.htmlContainer.classList.add('shape--rectangle');
  }
}

class Circle extends Shape {
  constructor(posX, posY, radius, color, borderColor) {
    super(posX, posY, radius * 2, radius * 2, color, borderColor);

    this.borderRadius = this.setBorderRadius('50%');
    this.htmlContainer.classList.add('shape--circle');
  }

  setBorderRadius(br) {
    return br;
  }
}
