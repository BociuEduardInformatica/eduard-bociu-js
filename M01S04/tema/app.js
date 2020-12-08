let person = {
  name: 'Ionut',
  surname: 'Manole',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 29,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

let friendsLength = person.friends.length;
for (let i = 0; i < friendsLength; i++) {
  for (let j = 0; j < friendsLength; j++) {
    if (i === j) {
      continue;
    }

    let outerFriend = person.friends[i];
    let innerFriend = person.friends[j];
    let ageDiff = Math.abs(outerFriend.age - innerFriend.age);

    console.log(
      `Intre ${outerFriend.name} si ${innerFriend.name} este o diferenta de ${ageDiff} ani.`,
    );
  }
}
