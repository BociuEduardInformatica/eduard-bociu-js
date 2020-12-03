const p = document.getElementById('dimensions');

window.addEventListener('resize', () => {
  let width = window.innerWidth;
  let height = window.innerHeight;

  p.innerText = `Latimea este: ${width}. Inaltimea este: ${height}.`;
});
