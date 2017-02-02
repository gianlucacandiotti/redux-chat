import React, { Component } from 'react';
import Panel from 'components/Panel/Panel';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Form from 'factories/Form';

class SignUp extends Component {
  state = {
    form: Form({
      email: {
        name: 'email',
        value: 'aaa',
        type: 'email',
        label: 'Email:',
      },
      username: {
        name: 'username',
        value: '',
        type: 'text',
        label: 'Username:',
      },
      password: {
        name: 'password',
        value: '',
        type: 'password',
        label: 'Password:',
      },
      passwordConfirm: {
        name: 'passwordConfirm',
        value: '',
        type: 'password',
        label: 'Confirm Password:',
      },
    }),
  };

  onInputChange = (newState) => {
    this.setState(newState);
  };

  isValid = () => (
    Object.keys(this.state).reduce((prev, next) => (
      prev && !!this.state[next]
    ), true)
  );

  render() {
    const {
      form,
    } = this.state;

    return (
      <div>
        <Panel title="Sign Up">
          <form onSubmit={this.onSubmit}>
            <Input
              data={form.email}
              setValue={form.setValue.bind(form)}
            />
            <Input
              data={form.username}
              setValue={form.setValue.bind(form)}
            />
            <Input
              data={form.password}
              setValue={form.setValue}
            />
            <Input
              data={form.passwordConfirm}
              setValue={form.setValue}
            />
            <Button className="button is-primary" disabled={!this.isValid()}>
              Sign Up!
            </Button>
          </form>
        </Panel>
      </div>
    )
  }
}

export default SignUp;
