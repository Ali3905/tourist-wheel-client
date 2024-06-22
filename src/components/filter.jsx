import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

const FilterButton = styled.button`
  width: 150px;
  height: 43px;
  border: 1px solid #fc7e06;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: transparent;
  color: #fc7e06;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fc7e06;
    color: white;
  }
`;

const StyledFilterButton = styled.button`
  width: 100px;
  height: 35px;
  background-color: #ffdcba;
  color: #000;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffaa7f;
  }
`;

const PopoverContainer = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  top: 70px;
  width:220px;
  right: 10px;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${({ open }) => (open ? slideIn : slideOut)} 0.3s forwards;
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
`;

const TextField = styled.input`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 12px;
  outline: none;
`;

const Filter = ({ columns, onFilterChange }) => {
  const [open, setOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState('');
  const [filterFromValue, setFilterFromValue] = useState('');
  const [filterToValue, setFilterToValue] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const popoverRef = useRef(null);

  const filteredColumns = columns.filter(
    (column) =>
      column.id.toLowerCase() !== 'name' && column.id.toLowerCase() !== 'customeremail'
  );

  const handleColumnChange = (event) => {
    setOpen(true);
    const selectedColumn = event.target.value;
    setSelectedColumn(selectedColumn);
    setFilterFromValue('');
    setFilterToValue('');
  };

  const handleFilterFromValueChange = (event) => {
    setFilterFromValue(event.target.value);
  };

  const handleFilterToValueChange = (event) => {
    setFilterToValue(event.target.value);
  };

  const handleFilter = () => {
    onFilterChange({
      column: selectedColumn,
      fromValue: filterFromValue,
      toValue: filterToValue,
    });
    setOpen(false);
  };

  const getTextFieldProperties = (fromOrTo) => {
    const isDateColumn =
      selectedColumn === 'duePayDate' || selectedColumn === 'Quotation' || selectedColumn === 'dueDate';

    return {
      placeholder: isDateColumn ? '' : `Enter ${fromOrTo} ${placeholder}`,
      type: isDateColumn ? 'date' : 'text',
    };
  };

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const selectedColumnObject = filteredColumns.find((column) => column.id === selectedColumn);
    setPlaceholder(selectedColumnObject ? `Enter ${selectedColumnObject.label}` : '');
  }, [selectedColumn, filteredColumns]);

  return (
    <div>
      <FilterButton onClick={handleColumnChange}>Filter by</FilterButton>
      <PopoverContainer open={open} ref={popoverRef}>
        <StyledSelect
          value={selectedColumn}
          onChange={handleColumnChange}
        >
          {filteredColumns.map((column) => (
            <option key={column.id} value={column.id}>
              {column.label}
            </option>
          ))}
        </StyledSelect>
        <TextField
          {...getTextFieldProperties('From')}
          onChange={handleFilterFromValueChange}
          value={filterFromValue}
        />
        {(selectedColumn.toLowerCase() === 'customeremail' ||
          selectedColumn.toLowerCase() === 'name' ||
          selectedColumn.toLowerCase() === 'status') ? null :
          <TextField
            {...getTextFieldProperties('To')}
            onChange={handleFilterToValueChange}
            value={filterToValue}
          />
        }
    <StyledFilterButton onClick={handleFilter}>Filter</StyledFilterButton>
      </PopoverContainer>
    </div>
  );
};

export default Filter;
