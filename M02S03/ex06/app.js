const message = 'Butonul a fost apasat in aceasta rezolutie.';

const clickHandler = (event) => {
  const width = window.innerWidth;
  let targetArticle = null;

  if (width < 650) {
    targetArticle = document.querySelector('.lo-res');
  } else if (width >= 650 && width < 1000) {
    targetArticle = document.querySelector('.mid-res');
  } else {
    targetArticle = document.querySelector('.high-res');
  }

  const span = document.createElement('span');
  span.innerText = message;
  span.style.display = 'block';

  targetArticle.append(span);
};

document.querySelector('.btn').addEventListener('click', clickHandler);
