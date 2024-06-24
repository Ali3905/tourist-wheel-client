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
  const navigate = useNavigate()
  let buttonText = '';
  let isCondition11 = false;

  switch (selectedIndex) {
    case 3:
      buttonText = "Add Employee";
      break;
    case 4:
      buttonText = "Add Driver";
      break;
    case 5:
      buttonText = "Add Cleaner"
      break;
    case 8:
      buttonText = "Add Vehicle"
      break;
    case 21:
      buttonText = "Add Daily Route"
      break;
    case 22:
      buttonText = "Add Package Booking"
      break;
    case 32:
      buttonText = "Add Technician"
      break;
    default:
      buttonText = 'Add';
      break;
  }

  const handleClosePopup = () => {
    dispatch(closePopup());
  };

  const handleEvents = () => {
    if (selectedIndex === 3) {
      navigate("/addEmployee")
    } else if (selectedIndex === 4) {
      navigate('/addDriver')
    } else if (selectedIndex === 5) {
      navigate('/addCleaner')
    } else if (selectedIndex === 8) {
      navigate('/addVehicle')
    }  else if (selectedIndex === 21) {
      navigate('/addDailyRoute')
    } else if (selectedIndex === 22) {
      navigate('/addPackageBooking')
    } else if (selectedIndex === 32) {
      navigate('/addTechnician')
    } else {
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
