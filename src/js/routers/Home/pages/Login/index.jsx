import React, { Component } from 'react';
import Panel from 'components/Panel';
import Button from 'components/Button';

class Login extends Component {
  render() {
    return (
      <div>
        <Panel title="Login">
          <Button className="button is-primary">
            Login!
          </Button>
        </Panel>
      </div>
    )
  }
}

export default Login;
