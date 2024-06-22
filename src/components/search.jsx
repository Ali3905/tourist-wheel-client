// Search.js
import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa'; 

const CustomSearchWrapper = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width : '300px')};
`;

const CustomSearchInput = styled.input`
  width: 100%;
  padding: 11px 35px 11px 15px; 
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  outline: none;
  background-color:#F6F7FC;
  &::placeholder {
    color: #FC7E06;
  }
  &:focus {
    border-color: #fc7e06;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 56%;
  right: 10px;
  transform: translateY(-50%);
  color: #999;
`;

const Search = ({ onSearchChange , width}) => {
  const handleSearchChange = (event) => {
    onSearchChange(event?.target?.value);
  };

  return (
    <CustomSearchWrapper width={width}>
      <CustomSearchInput
        type="text"
        placeholder="Search"
        onChange={handleSearchChange}
      />
      <SearchIcon>
        <FaSearch />
      </SearchIcon>
    </CustomSearchWrapper>
  );
};

export default Search;
