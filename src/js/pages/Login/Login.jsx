import React, { Component } from 'react';
import Panel from 'components/Panel/Panel';
import Button from 'components/Button/Button';

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
