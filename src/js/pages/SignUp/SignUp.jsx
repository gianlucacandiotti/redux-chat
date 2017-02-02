import React, { Component } from 'react';
import Panel from 'components/Panel/Panel';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

class SignUp extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
  };

  onInputChange = (newState) => {
    this.setState(newState);
  };

  render() {
    const {
      email,
      username,
      password,
      passwordConfirm,
    } = this.state;

    const valid = email && username && password && passwordConfirm;

    return (
      <div>
        <Panel title="Sign Up">
          <form onSubmit={this.onSubmit}>
            <Input
              name="email"
              label="Email:"
              type="email"
              value={email}
              onInputChange={this.onInputChange}
            />
            <Input
              name="username"
              label="Username:"
              type="text"
              value={username}
              onInputChange={this.onInputChange}
            />
            <Input
              name="password"
              label="Password:"
              type="password"
              value={password}
              onInputChange={this.onInputChange}
            />
            <Input
              name="passwordConfirm"
              label="Confirm Password:"
              type="password"
              value={passwordConfirm}
              onInputChange={this.onInputChange}
            />
            <Button className="button is-primary" disabled={!valid}>
              Sign Up!
            </Button>
          </form>
        </Panel>
      </div>
    )
  }
}

export default SignUp;
