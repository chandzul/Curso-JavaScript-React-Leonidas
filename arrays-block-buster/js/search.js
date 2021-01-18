import movies from "./movies.js";
import { render } from "./render.js";

const search = window['search-form'];

search.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const query = formData.get('title');

  if(!query) {
    return alert('Buscar no puede ser vacio');
  }

  const movies = searchMovie(query);

  if(movies) {
    return render(movies);
  }

  return alert('no encontramos tu pelicula');
});

function filterByTitle(title) {
  return movies.filter((movie) => {
   return movie.title.toLowerCase().includes(title.toLowerCase());
  });
}

function findById(id) {
  return movies.find((movie) => {
    return movie.id === parseInt(id, 10);
  });
}

function searchMovie(query) {
  // parseInt('1', 10) //NaN
  
  if (isNaN(query)) {
    return filterByTitle(query);
  }

  return [findById(query)];
}