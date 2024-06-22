// CardActions.js
import React from 'react';
import styled from 'styled-components';

const SharedButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;
  cursor: pointer;
  margin : 0px 2px
`;

const Edit = styled(SharedButton)``;
const SoftDelete = styled(SharedButton)`
  background-color: orange;
  width: 21px;
  height: 21px;
  margin: 1px;
`;
const Delete = styled(SharedButton)`
  background-color: red;
  width: 20px;
  height: 20px;
`;


const EnableSoftDelete = styled(SharedButton)`
  background-color: blue;
  width: 20px;
  height: 20px;
`;

const MainDelete = styled(SharedButton)`
  background-color: red;
  width: 21px;
  height: 21px;
  margin: 1px;
`;

const HiddenContainer = styled.div`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  position: absolute;
  top: -1px;
  right: -1px;
`;

const CardActions = ({ displayDelete, displaySoftDelete ,  isHidden , isShowSoftDelete}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        margin: '2px',

      }}
    >
      <Edit />
      <div style={{ position: 'relative' }}>
        {
            !isShowSoftDelete ? <Delete onClick={displayDelete} /> :  <EnableSoftDelete onClick={displayDelete} />
        }
       
        <HiddenContainer isVisible={!isHidden}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '50px',
              border: '1px solid #ddd6d6',
              backgroundColor: '#ddd6d6',
              borderRadius: '25px',
            }}
          >
            <SoftDelete onClick={displaySoftDelete} />
            <MainDelete onClick={displayDelete} />
          </div>
        </HiddenContainer>
      </div>
    </div>
  );
};

export default CardActions;
