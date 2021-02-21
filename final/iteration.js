// Use the map method on the daysOfWeek array, creating a new array of abbreviated week days.
// Each abbreviated string should be the first three letters of the long version in daysOfWeek.
// Store the new array in the variable abbreviatedDays.

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let abbreviatedDays;

// abbreviatedDays should be: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// Write your code below
abbreviatedDays = daysOfWeek.map(day => day.substring(0, 3));