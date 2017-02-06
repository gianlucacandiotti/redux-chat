import React, { Component } from 'react';
import Panel from 'components/Panel/Panel';
import Button from 'components/Button/Button';

class SignUp extends Component {
  render() {
    return (
      <div>
        <Panel title="Sign Up">
          <Button className="button is-primary" disabled={!this.isValid()}>
            Sign Up!
          </Button>
        </Panel>
      </div>
    )
  }
}

export default SignUp;
