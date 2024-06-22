import React from 'react';
import styled from 'styled-components';
import ProductCard from './userScreenManagementComponents/productCard';
import Product from '../../jsonData/product.json';
import SearchNavbar from './userScreenManagementComponents/searchNavbar';

const ProductGridContainer = styled.div`
  display: grid;
  place-items:center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
`;


const SubWrapper = styled.div`
padding : 20px 10px;
background-color : white;
border-radius: 10px
`
const searchValues = ['Single', 'Multiple'];
const buttonName = 'Create products'

function createProducts() {
  return (
    <SubWrapper>
    <SearchNavbar selectValues={searchValues} buttonValue={buttonName}/>
    <ProductGridContainer>
      {Product.map((item) => (
             <ProductCard
             key={item.id}
             cardData={item}
           />
      ))}
    </ProductGridContainer>
  </SubWrapper>
  );
}

export default createProducts;
