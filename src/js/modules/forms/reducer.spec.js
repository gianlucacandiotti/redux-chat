import { fromJS } from 'immutable';
import reducer from './reducer';
import * as actions from './actions';

describe('Forms reducer', () => {
  it('can set the value of an input', () => {
    const state = fromJS({
      inputs: {
        byId: {
          email: {
            id: 'email',
            name: 'email',
            type: 'email',
            value: '',
            required: true,
          },
        },
        allIds: [
          'email',
        ],
      },
    });

    const action = actions.setValue('email', 'value');

    const nextState = fromJS({
      inputs: {
        byId: {
          email: {
            id: 'email',
            name: 'email',
            type: 'email',
            value: 'value',
            required: true,
          },
        },
        allIds: [
          'email',
        ],
      },
    });

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('can validate a wrong email input by its type', () => {
    const state = fromJS({
      inputs: {
        byId: {
          email: {
            id: 'email',
            name: 'email',
            type: 'email',
            value: '',
            required: true,
          },
        },
        allIds: [
          'email',
        ],
      },
    });

    const action = actions.validateValue('email');

    const nextState = fromJS({
      inputs: {
        byId: {
          email: {
            id: 'email',
            name: 'email',
            type: 'email',
            value: '',
            required: true,
            errorType: 'emailInvalid',
          },
        },
        allIds: [
          'email',
        ],
      },
    });

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('can validate a right email input by its type', () => {
    const state = fromJS({
      inputs: {
        byId: {
          email: {
            id: 'email',
            name: 'email',
            type: 'email',
            value: 'email@gmail.com',
            required: true,
          },
        },
        allIds: [
          'email',
        ],
      },
    });

    const action = actions.validateValue('email');

    const nextState = fromJS({
      inputs: {
        byId: {
          email: {
            id: 'email',
            name: 'email',
            type: 'email',
            value: 'email@gmail.com',
            required: true,
          },
        },
        allIds: [
          'email',
        ],
      },
    });

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('can validate a password that is too short', () => {
    const state = fromJS({
      inputs: {
        byId: {
          password: {
            id: 'password',
            name: 'password',
            type: 'password',
            value: 'aaa',
            required: true,
          },
        },
        allIds: [
          'password',
        ],
      },
    });

    const action = actions.validateValue('password');

    const nextState = fromJS({
      inputs: {
        byId: {
          password: {
            id: 'password',
            name: 'password',
            type: 'password',
            value: 'aaa',
            required: true,
            errorType: 'passwordTooShort',
          },
        },
        allIds: [
          'password',
        ],
      },
    });

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('can validate a password that is too long', () => {
    const state = fromJS({
      inputs: {
        byId: {
          password: {
            id: 'password',
            name: 'password',
            type: 'password',
            value: 'aaaaaaaaaaaaaaaaa',
            required: true,
          },
        },
        allIds: [
          'password',
        ],
      },
    });

    const action = actions.validateValue('password');

    const nextState = fromJS({
      inputs: {
        byId: {
          password: {
            id: 'password',
            name: 'password',
            type: 'password',
            value: 'aaaaaaaaaaaaaaaaa',
            required: true,
            errorType: 'passwordTooLong',
          },
        },
        allIds: [
          'password',
        ],
      },
    });

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('can validate a password with weak level security', () => {
    const state = fromJS({
      inputs: {
        byId: {
          password: {
            id: 'password',
            name: 'password',
            type: 'password',
            value: 'aaaaaa',
            required: true,
          },
        },
        allIds: [
          'password',
        ],
      },
    });

    const action = actions.validateValue('password');

    const nextState = fromJS({
      inputs: {
        byId: {
          password: {
            id: 'password',
            name: 'password',
            type: 'password',
            value: 'aaaaaa',
            required: true,
            errorType: 'passwordSecurityWeak',
          },
        },
        allIds: [
          'password',
        ],
      },
    });

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('can validate a password with medium level security', () => {
    const state = fromJS({
      inputs: {
        byId: {
          password: {
            id: 'password',
            name: 'password',
            type: 'password',
            value: 'Aaaaaa',
            required: true,
          },
        },
        allIds: [
          'password',
        ],
      },
    });

    const action = actions.validateValue('password');

    const nextState = fromJS({
      inputs: {
        byId: {
          password: {
            id: 'password',
            name: 'password',
            type: 'password',
            value: 'Aaaaaa',
            required: true,
            errorType: 'passwordSecurityMedium',
          },
        },
        allIds: [
          'password',
        ],
      },
    });

    expect(reducer(state, action)).toEqual(nextState);
  });
});
