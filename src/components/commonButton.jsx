import React, { useState } from 'react';

const CommonButton = ({ type, onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  let buttonColor;
  switch (type) {
    case 'primary':
      buttonColor = '#FC7E06'; 
      break;
    case 'default':
    default:
      buttonColor = '#ff4d4f'; 
      break;
  }

  const buttonStyle = {
    color: isHovered ? 'white' : buttonColor,
    backgroundColor: isHovered ? buttonColor : 'white',
    border: `1px solid ${buttonColor}`,
    borderRadius: '5px',
    padding: '4px 18px', 
    cursor: 'pointer',
    marginRight: '5px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <button 
      className="custom-button"
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CommonButton;
