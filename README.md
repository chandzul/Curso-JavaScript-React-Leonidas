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