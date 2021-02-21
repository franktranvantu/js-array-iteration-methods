const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
const sNames = [];

names.forEach(name => {
  if (name.charAt(0) === 'S') {
    sNames.push(name);
  }
});

console.log(sNames);