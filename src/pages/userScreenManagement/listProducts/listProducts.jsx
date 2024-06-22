import React, { useState } from 'react';
import { Input , message } from 'antd';
import styled from 'styled-components';
import ProductSectionCard from './productSectionCard'; 
import * as Styled from '../../../components/formButton';

const SectionWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const SectionContent = styled.div`
  display: flex;
  justify-content: end;
`;

export default function ListProducts() {
  const [productTitle, setProductTitle] = useState('');
  const [productSectionCards, setProductSectionCards] = useState([]);

  const handleProductTitleChange = (value) => {
    setProductTitle(value);
  };

  const handleAddProductCard = () => {
    if (productTitle.trim() === '') {
      message.error('Section Title cannot be empty');
      return;
    }

    const newCard = (
      <ProductSectionCard
        productTitle={productTitle}
        key={productSectionCards.length}
        sectionIndex={productSectionCards.length}
      />
    );

    setProductSectionCards([...productSectionCards, newCard]);
    setProductTitle('');
  };

  return (
    <>
      <SectionWrapper id="section-wrapper">
        <div style={{width:"100%" , marginBottom:'40px'}}>
          <SectionContent>
            <Input
              style={{width:"200px", margin:"0px 20px 0px 0px"}}
              placeholder="Enter Section Title"
              value={productTitle}
              onChange={(e) => handleProductTitleChange(e.target.value)}
            />
            <Styled.SubmitButton type="primary" onClick={handleAddProductCard} style={{width:"200px" }} >
              Add Section
            </Styled.SubmitButton>
          </SectionContent>
        </div>
      </SectionWrapper>
      {productSectionCards.map((card , index) => card)}
    </>
  );
}
