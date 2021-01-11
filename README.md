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