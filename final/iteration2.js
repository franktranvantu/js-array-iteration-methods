const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];
const gNameCount = names.reduce((count, name) => {
  if (name.charAt(0) === 'G') {
    return count + 1;
  }
}, 0);
console.log(gNameCount);