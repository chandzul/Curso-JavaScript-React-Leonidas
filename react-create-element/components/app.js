import { Component, createElement } from '../lib/react/index.js';
import User from './user.js';
import Wrapper from './wrapper.js';
// import UserStyled from './user-styled.js';


const element = createElement('h1', {
  class: 'title'
}, 'Hola mundo desde create element!');

console.log(element);

class App extends Component {
  render() {
    return createElement('div', {
      class: 'app',
      // children: [
      //   createElement('h1', {}, 'hola'),
      //   createElement('h1', {}, 'mundo')
      // ],
      children: new Wrapper({
        children: [
          new User({
            avatar: './images/ash.jpg',
            name: 'Ash K..'
          }),
        ]
      }),
    }, 'esta es la app');
  }
}

export default App;

// ${new Wrapper({
//   children: `
//     ${new User({
//       avatar: './images/ash.jpg',
//       name: 'Ash K..'
//     }).render()}
    
//     ${
//     new UserStyled({
//       avatar: './images/ash.jpg',
//       name: 'Ash K..'
//     }).render()}
//   `
// }).render()}