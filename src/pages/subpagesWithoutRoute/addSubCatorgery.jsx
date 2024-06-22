import React from 'react'
import Catogerydata from '../../jsonData/catogery.json';
import styled from 'styled-components';
import SearchNavbar from '../userScreenManagement/userScreenManagementComponents/searchNavbar';
import DragCards from '../../components/dragCards';



const SubWrapper = styled.div`
  padding: 20px 10px;
  background-color: white;
  border-radius: 10px;
`;


const searchValues = ['Category', 'New Category'];
const buttonName = 'Add Sub Category';

function AddSubCatorgery() {


  return (
    <SubWrapper>
      <SearchNavbar selectValues={searchValues} buttonValue={buttonName} />
      <DragCards initialItems={Catogerydata} />
    </SubWrapper>
  )
}

export default AddSubCatorgery