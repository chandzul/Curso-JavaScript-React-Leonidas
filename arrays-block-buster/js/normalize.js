import rawMoviesList from './movies.js';

// mapas de objetos iterables
const movieList = rawMoviesList.reduce((list, movie) => {
  list.set(movie.id, movie);
  return list;
}, new Map());

// estructura basica de un .reduce
// const popular = rawMoviesList.reduce((prevValue, actualValue, index) => {
  // prevValue -> es donde vamos a guardar el nuevo dato y lo retornamos
// }, []); // Tipo de dato a inicializar [ new Map() | [] | {} ]

const all = rawMoviesList.map(movie => movie.id);

const popular = rawMoviesList.reduce((list, movie, index) => {
  if (movie.vote_average > 7) {
    list.push(movie.id);
  }

  return list;
}, []);

const notPopular = rawMoviesList.reduce((list, movie, index) => {
  if (movie.vote_average <= 7) {
    list.push(movie.id);
  }

  return list;
}, []);

// console.log(movieList);

export {
  movieList,
  all,
  popular,
  notPopular
}