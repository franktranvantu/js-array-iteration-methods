const movies = [
  ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
  ['Finding Dory'],
  ['Jaws', 'On the Waterfront']
]

// Result: ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters', 'Finding Dory', 'Jaws', 'On the Waterfront']

const flatMovies = movies.reduce((acc, movie) => [...acc, ...movie], []);
console.log(flatMovies)