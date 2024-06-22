import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { closePopup } from '../redux/popupSlice';
import { useNavigate } from 'react-router-dom';
const StyledButton = styled.button`
  width: 150px;
  height: 43px;
  border: 1px solid #fc7e06;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: ${({ isCondition11 }) => isCondition11 ? "#ff8c00" : "transparent"};
  color: ${({ isCondition11 }) => isCondition11 ? "#f0f0f0" : "#fc7e06"};
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ isCondition11 }) => isCondition11 ? "#ffdcba" : "#fc7e06"};
    color: ${({ isCondition11 }) => isCondition11 ? "black" : "white"};
  }
`;

function AddButton() {
  const dispatch = useDispatch();
  const selectedIndex = useSelector((state) => state.sidebar.selectedParentIndex);
const naviagte = useNavigate()
  let buttonText = '';
  let isCondition11 = false;

  switch (selectedIndex) {
    case 4: 
     buttonText = "Add Driver";
     break;
    case 15:
      buttonText = 'Add Employee';
      break;
    case 16:
      buttonText = 'Add Driver';
      break;
    case 17:
      buttonText = 'Add Cleaner';
      break;
    case 18:
      buttonText = 'Add Car';
      break;
    case 19:
      buttonText = 'Add Car';
      break;
    case 20:
      buttonText = 'Add Car';
      break;
    case 21:
      buttonText = 'Add Car';
      break;
    case 22:
      buttonText = 'Add Car';
      break;
    case 23:
      buttonText = 'Add Car';
      break;
    case 24:
      buttonText = 'Add Car';
      break;
    case 11:
      buttonText = 'Add Product';
      isCondition11 = true;
      break;
    default:
      buttonText = 'Add';
      break;
  }

  const handleClosePopup = () => {
    dispatch(closePopup());
  };

  const handleEvents = () => {
    if (selectedIndex === 16) {
      window.location.href = '/addVendor'; 
    } else if(selectedIndex === 15){
      window.location.href = '/addAdmin'; 
            
    }  else if(selectedIndex === 17){
      naviagte('/AddSeller')
      
    }  else if(selectedIndex === 18){
      naviagte('/AddDeliveryPartner')
    } else if(selectedIndex === 4){
      naviagte('/addVendor')
    }else {
      handleClosePopup();
    }
  };

  return (
    <div>
      <StyledButton isCondition11={isCondition11} onClick={handleEvents}>{buttonText}</StyledButton>
    </div>
  );
}

export default AddButton;
