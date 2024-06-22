import React, { useMemo, useRef } from 'react';
import styled from 'styled-components';
import { Card, Space } from 'antd';
import MainPaddingWrapper from "../../../styledComponents/commonStyles";
import * as Styled from '../../../components/formButton';
import { openPopup } from '../../../redux/popupSlice';
import { useDispatch, useSelector } from 'react-redux';

const StyledCard = styled(Card)`
  border-radius: 10px;
  background-color: white;
  padding-bottom: 0px !important;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 250px;
  overflow: hidden;
  position: relative;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    display: none; /* WebKit */
  }
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;
`;

const LeftScrollButton = styled(ScrollButton)`
  width: 20px;
  height: 20px;
  top: 205px;
  left: 5px;
  background-color: ${({ show }) => show ? 'orange' : 'transparent'};
  color: ${({ show }) => show ? 'white' : 'transparent'};
  border-radius: 50%;
  display: ${({ show }) => show ? 'block' : 'none'};
`;

const RightScrollButton = styled(ScrollButton)`
  width: 20px;
  height: 20px;
  right: 5px;
  top: 205px;
  background-color: ${({ show }) => show ? 'orange' : 'transparent'};
  color: ${({ show }) => show ? 'white' : 'transparent'};
  border-radius: 50%;
  display: ${({ show }) => show ? 'block' : 'none'};
`;

const ContentContainerEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  height: 250px;
  overflow: hidden;
  overflow-y: auto;
`;

const LineBreak = styled.div`
  margin-top: 10px; 
  border-top: 1px solid gray;
`;

const ProductItem = styled.div`
  padding: 10px;
  margin: 0px 5px;
  border-radius: 10px;
  background-color: antiquewhite;
`;

const ProductImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
`;

function ProductSectionCard({ productTitle, sectionIndex }) {
  const selectedProducts = useSelector((state) => state.Products.selectedProducts);
  const dispatch = useDispatch();
  const contentContainerRef = useRef(null);

  const handleOpenPopup = () => {
    dispatch(openPopup(sectionIndex));
  };

  const filteredProducts = useMemo(() => {
    return selectedProducts.filter(product => product.sectionIndex === sectionIndex);
  }, [selectedProducts, sectionIndex]);

  const handleScroll = (direction) => {
    const scrollAmount = direction === 'left' ? -200 : 200;
    if (contentContainerRef.current) {
      contentContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <MainPaddingWrapper>
      <StyledCard>
        <Space direction="vertical" style={{ width: '100%' }}>
          <TitleContainer>
            <h2>{`${productTitle} - Section ${sectionIndex}`}</h2>
            <Space>
              <Styled.SubmitButton type="primary">Edit Title</Styled.SubmitButton>
              <Styled.SubmitButton type="primary" onClick={handleOpenPopup}>Add Product</Styled.SubmitButton>
              <Styled.SubmitButton type="primary">Make it Live</Styled.SubmitButton>
            </Space>
          </TitleContainer>
          <LineBreak />
          {
            filteredProducts.length > 0 ? (
              <>
            <LeftScrollButton
  show={
    filteredProducts.length > 0 &&
    contentContainerRef.current &&
    contentContainerRef.current.scrollWidth >
      contentContainerRef.current.clientWidth
  }
  onClick={() => handleScroll('left')}
>
  {'<'}
</LeftScrollButton>
                <ContentContainerWrapper>
                  <ContentContainer ref={contentContainerRef}>
                    {filteredProducts.map((val) =>
                      <ProductItem key={val.product.id}>
                        <ProductImage src={val.product.image} alt={val.product.name} />
                        <div>
                          <div>{val.product.name}</div>
                          <div>Stock Count: {val.product.stock_count}</div>
                          <div>Seller: {val.product.seller}</div>
                        </div>
                      </ProductItem>)}
                  </ContentContainer>
                </ContentContainerWrapper>
                <RightScrollButton
  show={
    filteredProducts.length > 0 &&
    contentContainerRef.current &&
    contentContainerRef.current.scrollWidth >
      contentContainerRef.current.clientWidth
  }
  onClick={() => handleScroll('right')}
>
  {'>'}
</RightScrollButton>
              </>
            ) : (
              <ContentContainerEmpty>
                No Product card available. Add product card.
              </ContentContainerEmpty>
            )
          }
        </Space>
      </StyledCard>
    </MainPaddingWrapper>
  );
}

export default ProductSectionCard;
