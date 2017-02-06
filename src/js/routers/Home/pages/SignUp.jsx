import React, { Component } from 'react';
import Panel from 'components/Panel';
import SignUpForm from 'components/SignUpForm';

class SignUp extends Component {
  render() {
    return (
      <div>
        <Panel title="Sign Up">
          <SignUpForm />
        </Panel>
      </div>
    )
  }
}

export default SignUp;
