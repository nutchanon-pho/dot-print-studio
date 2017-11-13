import React from 'react';

export default (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '10%', zIndex: '2' }}
      onClick={onClick}
    ></div>
  );
};
