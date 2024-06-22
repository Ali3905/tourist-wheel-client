import React, { useState } from 'react';
import { Select } from 'antd';
import '../App.css'; // Import your CSS file for styling

const { Option } = Select;

const App = ({ value, onChange,placeholder, mode, options , width }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleChange = value => {
    console.log(`selected ${value}`);
    onChange(value);
  };

  return (
    <Select
      mode={mode}
      style={{
        width: width || '100%',
        borderColor: isFocused || isHovered ? '#FC7E06' : '',
      }}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {options.map(option => (
        <Option key={option.option} value={option.option}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default App;





