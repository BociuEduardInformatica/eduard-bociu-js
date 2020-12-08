let calculateRectangleArea = (L, l) => {
  return L * l;
};

console.warn(`
  Calculeaza suprafata de tapet necesara pentru
  o camera de 6 pe 4 m cu tavan inalt de 2.5m,
  stiind ca exista o usa de 2.2 pe 1.5 si o
  suprafata de ferestre de 2 pe 1.5.
`);
let longWallSurface = calculateRectangleArea(6, 2.5);
let shortWallSurface = calculateRectangleArea(4, 2.5);
let totalWallSurface = 2 * (longWallSurface + shortWallSurface);
let doorSurface = calculateRectangleArea(2.2, 1.5);
let windowSurface = calculateRectangleArea(2, 1.5);
console.log(`
  Suprafata de tapet este:
  ${totalWallSurface - doorSurface - windowSurface}.
`);

console.warn(`
  Creaza o functie wrapper numita
  calculateSquareArea()
  pentru calculateRectangleArea()
  care sa primeasca ca parametru latura
  unui patrat si sa calculeze suprafata acestuia.
`);
let calculateSquareArea = (l) => {
  let squareArea = calculateRectangleArea(l, l);

  return squareArea;
};
console.log(`Patratul are ${calculateSquareArea(2)}mp.`);

console.warn(`
  Folosind aceasta noua functie calculeaza suprafata totala a doua dreptunghiuri de 48 pe 92 si 51 pe 102.
`);
let calculateAggregateSurface = (L1, l1, L2, l2) => {
  let surface1 = calculateRectangleArea(L1, l1);
  let surface2 = calculateRectangleArea(L2, l2);

  return surface1 + surface2;
};

console.log(calculateAggregateSurface(48, 92, 51, 102));
