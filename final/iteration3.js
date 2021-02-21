const prices = [5, 4.23, 6.4, 8.09, 3.20]; // Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]
const priceToDollars = price => `$${price.toFixed(2)}`;
const displayPrices = prices.map(priceToDollars);
console.log(displayPrices);