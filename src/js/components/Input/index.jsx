import React, { Component, PropTypes } from 'react';
import styles from './styles.scssm';

class Input extends Component {
  static propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string,
      type: PropTypes.string,
      value: PropTypes.string,
    }).isRequired,
    onChangeHandler: PropTypes.func,
  };

  state = {
    value: '',
  };

  componentWillMount() {
    const {
      data,
    } = this.props;

    const value = data.value;

    if (!value) {
      return null;
    } else {
      this.setState({ value });
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      value,
    } = this.state;

    const nextValue = nextProps.data.value;

    if (value !== nextValue) {
      this.setState({ value: nextValue });
    }
  }

  onChange = (e) => {
    const {
      data,
      onChangeHandler,
    } = this.props;

    if (!onChangeHandler) {
      this.setState({
        value: e.target.value,
      });
    } else {
      onChangeHandler(data.name, e.target.value);
    }
  };

  render() {
    const {
      data
    } = this.props;

    const {
      value,
    } = this.state;

    return (
      <div className={styles.root}>
        <label htmlFor={data.name} className={styles.label}>
          {data.label}
        </label>
        <input
          type={data.type || 'text'}
          id={data.name}
          className={styles.input}
          name={data.name}
          value={value}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default Input
