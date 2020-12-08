const controls = document.querySelector('.controls');
const hero = document.querySelector('.hero');
const heroPosition = {
  left: 0,
  top: 0,
};

const moveHero = (axis = 'x', normalizedDirection = 'fw') => {
  let step = normalizedDirection === 'fw' ? 30 : -30;
  let cssProperty = axis === 'x' ? 'left' : 'top';

  heroPosition[cssProperty] += step;

  hero.style.left = `${heroPosition.left}px`;
  hero.style.top = `${heroPosition.top}px`;
};

controls.addEventListener('click', (event) => {
  let target = event.target;

  if (target.nodeName !== 'BUTTON') {
    return;
  }

  let direction = target.id.split('-')[1];
  let axis = 'x';
  let normalizedDirection = 'fw';

  switch (direction) {
    case 'right':
      axis = 'x';
      moveHero(axis, normalizedDirection);
      break;
    case 'left':
      axis = 'x';
      normalizedDirection = 'bk';
      moveHero(axis, normalizedDirection);
      break;
    case 'down':
      axis = 'y';
      moveHero(axis, normalizedDirection);
      break;
    case 'up':
      axis = 'y';
      normalizedDirection = 'bk';
      moveHero(axis, normalizedDirection);
      break;
    default:
      break;
  }
});
