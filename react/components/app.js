import { Component } from '../lib/react.js';
import User from './user.js';

class App extends Component {
  render() {
    return `
      <div class="app">
        ${new User({
          avatar: './images/ash.jpg',
          name: 'Ash K.'
        }).render()}
      </div>
    `;
  }
}

export default App;