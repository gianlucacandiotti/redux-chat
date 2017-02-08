import React from 'react';
import styles from './styles.scssm';

const Input = ({ input, meta, ...props }) => {
  const inputStyles = props.styles || styles;

  return (
    <div className={inputStyles.root}>
      <div className={inputStyles.inputWrapper}>
        <label htmlFor={input.name} className={inputStyles.label}>
          {props.label}
        </label>
        <input {...input} type={props.type} className={inputStyles.input} />
      </div>
      {
        meta.touched &&
        meta.error &&
        <span className={inputStyles.error}>
          {meta.error}
        </span>
      }
    </div>
  );
};

export default Input
