import React, { Component } from 'react';
import Panel from 'components/Panel/Panel';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onInputChange = (newState) => {
    this.setState(newState);
  };

  render() {
    const {
      email,
      password,
    } = this.state;

    return (
      <div>
        <Panel title="Login">
          <Input
            name="email"
            label="Email:"
            type="email"
            value={email}
            onInputChange={this.onInputChange}
          />
          <Input
            name="password"
            label="Password:"
            type="password"
            value={password}
            onInputChange={this.onInputChange}
          />
          <Button className="button is-primary">
            Login!
          </Button>
        </Panel>
      </div>
    )
  }
}

export default Login;
