# Hoisting

variables de elevamiento

```js
name();

function name() {
  return 'leo';
}
```
podemos llamar una funcion antes de declararla

# this

la funciones normales generan su propio `this`. 

```js
function time() {
  this.seg = 0;
  setInterval(function() {
    this.seg++;
    console.log(this.seg);
  });
}

new time();

// NaN
```

las arrow function no generan su `this` si no que lo heredan de su
contexto o de `window`.

```js
function time() {
  this.seg = 0;
  setInterval(() => {
    this.seg++;
    console.log(this.seg);
  });
}

new time();
// 1
// 2
// 3
// ...
```

# Rest / Spread operators

Sirven para agrupar el conjunto de un array o de un objeto en uno solo:

1. en el caso de `spread` va a crear un nuevo objeto o un nuevo array por jemplo: `{avatar, name} = params`
2. con `rest` obtendo el resto de elementos o descompongo los elementos `{...otherProps} = params`

# Alias Imports

1.- `import * as myModule from './module'`, importamos todos los exports de un modulo en uno solo llamado **myModule** aplica cuando no te sabes cuel es el `export default`.
2.- `import module, * as myModule from './module'`, aplica cuando sabes cual es el `export default` y los demas que no sabes le pones **myModule** para englobarlo.
3.- `import module as myModule from './module'` para renombrar una funcion/clase en especifico con un nombre personalizado por si algun paquete o funcion/clase propia tiene el mismo nombre.

# Dynamic Imports

cargar funcionalidades de un script-modulo solo en las paginas donde se ocupen

# .map

es parecido a un .forEach, .forOf pero no es igual. un .map si si te retorna algo. si tengo 5 elementos retorno 5 elemento sirve para modificar este array.

```js
function setRecommendedMovies( movies ) {
  return movies.map((movie, index) => {
    return {
      ...movie,
      recommended: movie.vote_average > 7
    }
  });
  // console.table(newMovies, ['title', 'vote_average', 'recommended']);
}
```

# .filter

El metodo filter nos ayuda a buscar y retornar solo los datos especificos de un array

```js
function filterByTitle(title) {
  return movies.filter((movie) => {
   return movie.title.toLowerCase().includes(title.toLowerCase());
  });
}
```

# .find

Funciona como `.filter` con la exepcion que `.find` solo te retorna un elemento y es con el primero con el que se encuentre cuando `.filter` te trae todas las coincidencias que se encuentren.

```js
function findById(id) {
  return movies.find((movie) => {
    return movie.id === parseInt(id, 10);
  });
}
```

# .reduce

Su funcion es devolver un nuevo estado del valor que se esta iterando.

```js
const popular = rawMoviesList.reduce((prevValue, actualValue, index) => {
// 
}, []); // inicializamos con un array vacio
```

# POO

4 pilares que hay que tener en cuanta cuando se hace POO:

```js
class myClass {
  // 
}
```

1. Herencia
  `constructor() {}`
2. Encapsulamiento
3. Abstracción
4. Polimorfismo 
