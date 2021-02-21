const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97

let total = prices.reduce((acc, cur) => acc + cur, 0);

console.log(total);