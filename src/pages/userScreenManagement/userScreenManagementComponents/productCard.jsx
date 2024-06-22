import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProducts } from '../../../redux/productSlice';
import CardActions from './cardActions';
import CartButton from '../../../components/cartbutton';
const CardContainer = styled.div`
  width: 260px;
  height: 105px;
  border-radius: 8px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;

  /* Apply selected style */
  ${(props) =>
    props.isSelected &&
    `
    border: 2px solid green;
  `}

  &:hover {
    .menu-options {
      display: flex;
    }
  }
`;

const CardImage = styled.img`
  width: 80px;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const CardText = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

const ProductCard = ({ cardData }) => {

  const dispatch = useDispatch();
  const previousSelectedValue = useSelector((state) => state.Products.selectedProducts);
  const selectedItem = useSelector((state) => state.sidebar.selectedParentIndex);
  const sectionIndex = useSelector(state => state.popup.sectionIndex);
  console.log(selectedItem, "selectedItem")
  const [isHidden, setIsHidden] = useState(true);
  const [isSelected, setIsSelected] = useState(false);
  const [isShowSoftDelete, setisShowSoftDelete] = useState(false);

  const displayDelete = () => {
    setIsHidden(!isHidden);
  };

  const displaySoftDelete = () => {
    setIsHidden(!isHidden);
    setisShowSoftDelete(true);
  };
  // const handleClick = () => {
  //   if (selectedItem === 11) {
  //     setIsSelected(!isSelected);
  //     if (!isSelected) {
  //       dispatch(setSelectedProducts([cardData]));
  //     } else {
  //       const updatedSelectedProducts = previousSelectedValue.filter(item => item.product_id !== cardData.product_id);
  //       dispatch(setSelectedProducts(updatedSelectedProducts));
  //     }
  //   }
  // };

  const handleClick = () => {
    if (selectedItem === 11) {
      setIsSelected(!isSelected);
      if (!isSelected) {
        // Dispatching selected product along with section index
        dispatch(setSelectedProducts({ product: cardData, sectionIndex: sectionIndex }));
      } else {
        // Removing selected product
        const updatedSelectedProducts = previousSelectedValue.filter(item => item.product_id !== cardData.product_id);
        dispatch(setSelectedProducts(updatedSelectedProducts));
      }
    }
  };




  return (
    <CardContainer isSelected={isSelected} onClick={handleClick}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 9px' }}>
        <div>
          <div style={{ width: '120px' }}>
            <CardText>{cardData?.name}</CardText>
          </div>
          <h6> Sold By: {cardData?.seller}</h6>
          <h6> Stock: {cardData?.stock} </h6>
          <h6> ProductId: {cardData?.productId} </h6>
          <div style={{display:'flex' , alignItems:'center' , marginTop:'7px'}}>
          {
            selectedItem === 9 && <CartButton data={cardData}/>
          }
          {
            selectedItem === 9 && <div style={{ display: 'flex' }}>
              <CardActions displayDelete={displayDelete} displaySoftDelete={displaySoftDelete} isHidden={isHidden} isShowSoftDelete={isShowSoftDelete} />
            </div>
          }
       
          </div>
        

        </div>
        <div style={{ height: '91.2px' }}>
          <CardImage src={cardData?.image} alt={cardData.name} />
        </div>
      </div>
    </CardContainer>
  );
};

export default ProductCard;
