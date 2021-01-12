import { createStore } from './redux/index.js';
import { reducer } from './reducers/index.js';

const store = createStore(reducer, 0);

// store.getState(); // devuelve el estado
// store.subscribe(); // se lanza cuando se actualiza el estado
// store.dispatch(); // mandar acciones

export {
  store
}