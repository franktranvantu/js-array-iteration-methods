const products = [
  { name: 'hard drive', price: 59.99 },
  { name: 'lighbulbs', price: 2.59 },
  { name: 'paper towels', price: 6.99 },
  { name: 'flatscreen monitor', price: 159.99 },
  { name: 'cable ties', price: 19.99 },
  { name: 'ballpoint pens', price: 4.49 }
];
// Finds the highest price of all products under $10
// Result: { name: 'paper towels', price: 6.99 }

const paperTowels = products
  .filter(product => product.price < 10)
  .reduce((highest, product) => {
    if (highest.price < product.price) {
      return highest;
    }
    return product;
  }, {});
console.log(paperTowels);