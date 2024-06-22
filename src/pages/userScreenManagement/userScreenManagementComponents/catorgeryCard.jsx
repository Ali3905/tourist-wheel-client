import React, { useState } from 'react';
import CardActions from './cardActions';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 90px;
  height: 130px;
  border-radius: 8px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

const CardImage = styled.img`
  width: 80px;
  height: 70px;
  object-fit: cover;
  margin-top: 5px;
  border-radius: 8px;
`;

const CardText = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  padding: 3px 5px;
`;

const Card = ({ data }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [isShowSoftDelete, setisShowSoftDelete] = useState(false);
  const displayDelete = () => {
    setIsHidden(!isHidden);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleCardClick = () => {
    if (location.pathname === '/manage/Createcatogery') {
      navigate('/AddSubCatogery');
    } else if (location.pathname === '/AddSubCatogery') {
      navigate('/ProductsofCatogries');
    }
  };

  const displaySoftDelete = () => {
    setIsHidden(!isHidden);
    setisShowSoftDelete(true);
  };

  return (
    <CardContainer >
      <CardImage src={data?.image} alt={data?.name} onClick={handleCardClick}/>
      <CardText>{data?.name}</CardText>
      <CardActions
        displayDelete={displayDelete}
        displaySoftDelete={displaySoftDelete}
        isHidden={isHidden}
        isShowSoftDelete={isShowSoftDelete}
      />
    </CardContainer>
  );
};

export default Card;
