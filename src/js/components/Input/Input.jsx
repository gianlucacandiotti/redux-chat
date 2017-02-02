import React, { Component, PropTypes } from 'react';
import styles from './Input.scssm';

class Input extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onInputChange: PropTypes.func,
  };

  state = {
    value: '',
  };

  componentWillMount() {
    const {
      value,
    } = this.props;

    if (!value) {
      return false;
    } else {
      this.setState({ value });
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      value,
    } = this.props;

    if (value !== nextProps.value) {
      this.setState({ value: nextProps.value });
    }
  }

  onChange = (e) => {
    const {
      onInputChange,
    } = this.props;

    if (!onInputChange) {
      this.setState({
        value: e.target.value,
      });
    } else {
      const newState = {};
      newState[this.props.name] = e.target.value;
      onInputChange(newState)
    }
  };

  render() {
    const {
      name,
      label,
      type,
    } = this.props;

    const {
      value,
    } = this.state;

    return (
      <div className={styles.root}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
        <input
          type={type || 'text'}
          id={name}
          className={styles.input}
          name={name}
          value={value}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default Input
