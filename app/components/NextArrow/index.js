import React from 'react';

export default (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '10%' }}
      onClick={onClick}
    ></div>
  );
};
