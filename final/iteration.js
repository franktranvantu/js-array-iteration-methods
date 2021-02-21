// Using reduce method, flatten the customerNames array of arrays.
// In other words, take all the names from each array inside customerNames and place them in one big array.
// Store the flattened array in the flattenedCustomerNames variable.
// You can use the array in the comments below for reference.

const customerNames = [
  [ "John", "Sandy", "Tyrone", "Elizabeth", "Penny" ],
  [ "Barry", "Wanda", "Jamal", "Hayden" ],
  [ "Portia", "Pam", "Philip" ]
];
let flattenedCustomerNames;

// flattenedCustomerNames should be: ["John", "Sandy", "Tyrone", "Elizabeth", "Penny", "Barry", "Wanda", "Jamal", "Hayden", "Portia", "Pam", "Philip"]
// Write your code below
flattenedCustomerNames = customerNames.reduce((acc, customerName) => [...acc, ...customerName], []);
console.log(flattenedCustomerNames);