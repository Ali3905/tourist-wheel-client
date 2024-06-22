import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setQuantity } from '../redux/quantitySlice';
import { addToCart } from '../redux/cartSlice';

const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
`;

const Button = styled.button`
  padding: 0px 7px;
  border: 1px solid #ccc;
  background-color: #f0f0f0
  &:focus {
    outline: none;
  }
`;

const QuantityInput = styled.input`
  width: 40px;
  text-align: center;
  border: 1px solid #ccc;
`;

const LeftRoundedButton = styled(Button)`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  cursor:pointer;
`;

const RightRoundedButton = styled(Button)`
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  cursor: pointer;
`;

const CartButton = ({ data }) => {
    const dispatch = useDispatch();
    const quantity = useSelector((state) => state.quantity[data.id] || 0);

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10) || 0;
        dispatch(setQuantity({ productId: data.id, quantity: newQuantity }));
        dispatch(addToCart({ data, quantity: newQuantity - quantity }));
    };
    
    const incrementQuantity = () => {
        const newQuantity = (quantity || 0) + 1;
        dispatch(setQuantity({ productId: data.id, quantity: newQuantity }));
        dispatch(addToCart({ data, quantity: 1 }));
    };

    const decrementQuantity = () => {
        const newQuantity = (quantity || 0) - 1;
        if (newQuantity >= 0) {
            dispatch(setQuantity({ productId: data.id, quantity: newQuantity }));
            dispatch(addToCart({ data, quantity: -1 }));
        }
    };
    
    return (
        <>
            <Container>
            <LeftRoundedButton onClick={decrementQuantity}>-</LeftRoundedButton>
                <QuantityInput
                    type="text"
                    value={quantity === 0 ? '0' : quantity}
                    onChange={handleQuantityChange}
                />
                  <RightRoundedButton onClick={incrementQuantity}>+</RightRoundedButton>
            </Container>
        </>
    );
};

export default CartButton;
