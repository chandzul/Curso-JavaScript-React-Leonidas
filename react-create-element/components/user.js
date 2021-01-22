import { Component } from '../lib/react/src/React.js';

class User extends Component {
  render(){
    const {avatar, name} = this.props;
    return `
      <div class="user">
        <div className="avatar">
          <img src="${avatar}" alt="" />
        </div>
        <h2>${name}</h2>
      </div>
    `;
  }
}

export default User;