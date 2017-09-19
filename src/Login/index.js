import Component from 'inferno-component';

class Login extends Component {
  state = {
    email: ''
  }
  onChange = e => {
    this.setState({ email: e.target.value })
  }
  onSubmit = e => {
    e.preventDefault();
    const { email } = this.state;
    window.email = email;
    window.localStorage.setItem('email', email);
    window.browserHistory.push('/')
  }
  render() {
    const { email } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <label>Email</label>
            <input type="email" value={email} onChange={this.onChange} name="eforms-email" />
          </fieldset>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Login;
