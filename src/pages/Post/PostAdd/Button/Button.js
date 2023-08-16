import React from 'react';
import './Button.scss';

const Button = ({ type, text }) => {
  return <button className={`${type}`}>{text}</button>;
};

export default Button;
