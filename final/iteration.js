// phoneNumbers is array of 10 digit phone numbers, where the first three digits, in parentheses, are area codes.
// Using reduce, return the total phone numbers with a 503 area code.
// Store the total in the variable numberOf503.

const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;

// numberOf503 should be: 3
// Write your code below
numberOf503 = phoneNumbers.reduce((count, phoneNumber) => {
  if (phoneNumber.substring(1, 4) === '503') {
    return count + 1;
  }
  return count;
}, 0);
console.log(numberOf503);