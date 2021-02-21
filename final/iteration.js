const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
const startsWithS = name => name.charAt(0) === 'S';
const sNames = names.filter(startsWithS);

console.log(sNames);