import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {  Select } from 'antd';
import * as Styled from '../../../components/formButton';
import { useDispatch, useSelector } from 'react-redux';
import { openPopup } from '../../../redux/popupSlice';
const { Option } = Select;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 5px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const SearchNavbar = ({ selectValues, buttonValue }) => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    console.log('Searching for:', e.target.value);
  };
  const indexx = useSelector((state) => state.sidebar.selectedParentIndex);
  const handleCategoryChange = (value) => {
    console.log('Selected category:', value);
  };
  const handleOpenPopup = () => {
    dispatch(openPopup());
  };
  console.log(indexx, "setSelectedParentIndex")
  const navigate = useNavigate();

  const location = useLocation()
  console.log(location.pathname, "location.path")
  const shouldNavigate = indexx === 9;
  const shouldPopupOpen = indexx === 10

  const handleButtonClick = () => {
    if (shouldNavigate) {
      navigate('/AddProduct');
    }

    else if (shouldPopupOpen) {
      handleOpenPopup()
    }
    else if (location.pathname === "/AddSubCatogery"){
        handleOpenPopup()
    }

  };

  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Search..." onChange={handleSearch} />
      <Select defaultValue={selectValues[0]} onChange={handleCategoryChange} style={{ marginRight: '10px' }}>
        {selectValues?.map((value) => (
          <Option key={value} value={value}>
            {value}
          </Option>
        ))}
      </Select>
      <Styled.SubmitButton type="primary"  htmlType="submit" style={{ maxWidth: '150px' }} onClick={handleButtonClick}>
        {buttonValue}
        </Styled.SubmitButton>
    </SearchContainer>
  );
};

export default SearchNavbar;
