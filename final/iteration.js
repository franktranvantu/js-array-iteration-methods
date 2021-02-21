// Using the filter and map methods on the todos array, create an array of unfinished task strings.
// See the comments below to see the correct result.
// Store the new array in the variable unfinishedTasks.

const todos = [
  {
    todo: 'Buy apples',
    done: false
  },
  {
    todo: 'Wash car',
    done: true
  },
  {
    todo: 'Write web app',
    done: false
  },
  {
    todo: 'Read MDN page on JavaScript arrays',
    done: true
  },
  {
    todo: 'Call mom',
    done: false
  }
];
let unfinishedTasks;

// unfinishedTasks should be: ["Buy apples", "Write web app", "Call mom"]
// Write your code below
unfinishedTasks = todos
  .filter(todo => !todo.done)
  .map(todo => todo.todo);
console.log(unfinishedTasks);