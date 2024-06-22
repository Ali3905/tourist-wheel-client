import React, { useState } from 'react';
import { Select } from 'antd';

const MultiSelectWithTyping = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (values) => {
    setSelectedValues(values);
  };

  return (
    <Select
      mode="tags"
      style={{ width: '100%' }}
      placeholder="Type and select values"
      value={selectedValues}
      onChange={handleChange}
      notFoundContent={null} 
    />
  );
};

export default MultiSelectWithTyping;
