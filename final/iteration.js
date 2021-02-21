// Using the map method on the authors array, create an array of full name strings, comprising the first name, then a space, then the last name.
// See the comments below for reference.
// Store the new array in the fullAuthorNames variable.

const authors = [
  { firstName: "Beatrix", lastName: "Potter" },
  { firstName: "Ann", lastName: "Martin" },
  { firstName: "Beverly", lastName: "Cleary" },
  { firstName: "Roald", lastName: "Dahl" },
  { firstName: "Lewis", lastName: "Carroll" }
];
let fullAuthorNames;

// fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]
// Write your code below
fullAuthorNames = authors.map(author => `${author.firstName} ${author.lastName}`);
console.log(authors);