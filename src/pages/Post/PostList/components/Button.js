import React from 'react';

function Button({ text, className, fucntion }) {
  return (
    <button className={className} onClick={fucntion}>
      {text}
    </button>
  );
}

export default Button;
