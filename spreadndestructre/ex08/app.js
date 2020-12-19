let person1 = {
  name: 'Steven',
  surname: 'Stevenson',
};

let person2 = {
  name: 'Rolf',
  surname: 'Rolfson',
};

let person3 = {
  name: 'Andra',
  surname: 'Andrason',
};

let age1 = {
  age: 20,
};

let age2 = {
  age: 25,
};

let fullPerson1 = {
  ...person1,
  ...age1,
};

let fullPerson2 = {
  ...person2,
  ...{ age: 40 },
};

let fullPerson1 = {
  ...person1,
  ...{ age: 23 },
};

let fullPerson4 = {
  ...{ name: 'Anita' },
  ...person2.surname,
  ...{ age: 36 },
};
