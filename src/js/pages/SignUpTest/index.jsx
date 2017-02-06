import React, { Component } from 'react';
import axios from 'axios';
import Panel from 'components/Panel/Panel';
import SignUpFormTest from 'components/SignUpFormTest';

class SignUpTest extends Component {
  handleSignUpSubmit = (values) => {
    axios.post('/sign-up-test', values)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log('error works');
      console.log(error);
    });
  };

  render() {
    return (
      <div>
        <Panel title="Sign Up">
          <SignUpFormTest onSubmit={this.handleSignUpSubmit} />
        </Panel>
      </div>
    );
  }
}

export default SignUpTest;
