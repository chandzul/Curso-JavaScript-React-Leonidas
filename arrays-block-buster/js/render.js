function renderElement(movie) {
  const element = buildElement(movie)
  window.container.append(element);
}

function buildElement({ title, poster_path, vote_count, id }) {
  const template = `
  <article class="movie recommended">
    <img class="movie-poster" src="//image.tmdb.org/t/p/w220_and_h330_face/${poster_path}" alt="${title}">
    <p class="movie-title">${title}</p>
    <p class="movie-id">${id}</p>
    <span class="movie-rate">${vote_count}</span>
  </article>
  `;

  const movie = document.createElement('div'); // se crea un div para meter el template
  movie.innerHTML = template; // se asigna el template al html y ya se covierte, trucaso para pasar un template literal a html
  return movie.firstElementChild; // retorn el primer hijo de un bloque html

  // document.createElement('h1');
  // element.textContent = movie.title;
}

function cleanMovieList() {
  window.container.innerHTML = '';
}

function render(list) {

  cleanMovieList();

  // console.table(list, ['title', 'poster_path', 'vote_count', 'id']);
  list.forEach(renderElement);
}

export {
  render
}