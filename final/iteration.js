const arr = [1,2,3];

const incrementedArr = arr
  .filter(number => number !== 2)
  .map(number => number + 1);

console.log(incrementedArr); // => [2,4]