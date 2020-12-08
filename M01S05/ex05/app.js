let person = {
  getName: () => {
    return 'Dragos Iordache';
  },
  getAge: () => {
    return 32;
  },
};

console.warn(`
  Afiseaza primul nume al persoanei folosind metoda getName()
`);
let firstName = person.getName();
console.log(firstName.split(' ')[0]);
// console.log(`${person.getName().split(' ')[0]}`);

console.warn(`
  Afiseaza diferenta de varsta dintre
  persoana si varsta ta folosind metoda getAge().
`);
console.log(Math.abs(33 - person.getAge()));

console.warn(`
  Afiseaza ultimele doua cifre al anului
  de nastere al persoanei, folosind anul
  curent si metoda getAge(). (Exemplu: ‘87).
`);
let year = new Date().getFullYear();
let age = person.getAge();
console.log(`‘${(year - age).toString().slice(-2)}`);

console.warn(`
  Afiseaza propozita: “Ma numesc xxx si am yy ani!”
`);
console.log(
  `
  Ma numesc ${person.getName()} si am ${person.getAge()} ani!
`.trim(),
);
