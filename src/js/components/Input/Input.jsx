import React, { Component, PropTypes } from 'react';
import styles from './Input.scssm';

class Input extends Component {
  static propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string,
      type: PropTypes.string,
      value: PropTypes.string,
    }).isRequired,
    setValue: PropTypes.func,
  };

  state = {
    value: '',
  };

  componentWillMount() {
    const {
      value,
    } = this.props.data;

    if (!value) {
      return null;
    } else {
      this.setState({ value });
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      value,
    } = this.props.data;

    const nextValue = nextProps.data.value;

    if (value !== nextValue) {
      this.setState({ value: nextValue });
    }
  }

  onChange = (e) => {
    const {
      data,
      setValue,
    } = this.props;

    if (!setValue) {
      this.setState({
        value: e.target.value,
      });
    } else {
      setValue(data.name, e.target.value);
    }
  };

  render() {
    const {
      name,
      type,
      label,
    } = this.props.data;

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
