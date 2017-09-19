import Component from 'inferno-component';

class Logout extends Component {
  render() {
    window.email = '';
    window.localStorage.removeItem('email');
    window.browserHistory.push('/')

    return <div />
  }
}

export default Logout;
