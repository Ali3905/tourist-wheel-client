// Sort.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSort } from 'react-icons/fa'; // Importing a small sort icon

const SortButton = styled.button`
display: flex;
align-items: center;
height: 43px;
width: 100px; 
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
justify-content: center;
border: 1px solid #FC7E06;
border-radius: 5px;
cursor: pointer;
background: none;
color: #FC7E06;
  &:focus {
    border-color: #FC7E06;
    outline: none; /* Remove default focus outline */
  }
`;

const SortText = styled.span`
  margin-right: 5px;
`;

const Sort = ({ onSortChange }) => {
  const [sortOrder, setSortOrder] = useState('asc');

  const handleToggleSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    onSortChange(newSortOrder);
  };

  return (
    <SortButton onClick={handleToggleSort}>
      <SortText>Sort</SortText>
      <FaSort /> {/* Small sort icon */}
    </SortButton>
  );
};

export default Sort;
