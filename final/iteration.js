const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];
// Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];

const userStartsWithS = userNames
  .filter(userName => userName.charAt(0) === 'S')
  .map(userName => {
    return {
      name: userName
    }
  });
console.log(userStartsWithS);