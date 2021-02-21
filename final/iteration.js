const fruits = ['apple', 'pear', 'cherry'];
const capitalizedFruits = [];

fruits.forEach(fruit => {
  const capitalizedFruit = fruit.toUpperCase();
  capitalizedFruits.push(capitalizedFruit);
})

console.log(capitalizedFruits);