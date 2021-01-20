import { Component } from '../lib/react.js';
import User from './user.js';
import Wrapper from './wrapper.js';

class App extends Component {
  render() {
    return `
      <div class="app">
        ${new Wrapper({
          children: `
            ${new User({
              avatar: './images/ash.jpg',
              name: 'Ash K.'
            }).render()}
          `
        }).render()}
      </div>
    `;
  }
}

export default App;