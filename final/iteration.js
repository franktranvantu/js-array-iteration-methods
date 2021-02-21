const users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42}
];

// const newUsers = users.filter(user => user.name !== 'Samir');
const newUsers = users.map(user => `${user.name} is ${user.age} years old.`);
console.log(newUsers);

const user = users.reduce((acc, user) => {
  acc[user.name] = user.age
  return acc;
}, {});
console.log(user);