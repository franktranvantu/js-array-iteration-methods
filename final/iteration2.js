const products = [
  { name: 'hard drive', price: 59.99 },
  { name: 'lighbulbs', price: 2.59 },
  { name: 'paper towels', price: 6.99 },
  { name: 'flatscreen monitor', price: 159.99 },
  { name: 'cable ties', price: 19.99 },
  { name: 'ballpoint pens', price: 4.49 }
];
// Calculate total of all products over $10
// Result: 239.97

const total = products
  .filter(product => product.price > 10)
  .reduce((total, product) => total + product.price, 0)
  .toFixed(2);
console.log(total);