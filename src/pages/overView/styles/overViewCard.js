import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 3px 16px;
  margin:0px 20px 16px 0px;
  width: 225px;
  height : 90px;
  display: flex;
    flex-direction: column;
    justify-content: space-around;
  &:last-child {
    margin:0px 0px 16px 0px;
  }
`;

export const SubCardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 3px 16px;
  margin:0px 20px 16px 0px;
  height: 50px;
  width: 225px;
  display: flex;
    flex-direction: column;
    justify-content: space-around;
  &:last-child {
    margin:0px 0px 16px 0px;
  }
`;


export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h4`
  margin-bottom: 8px;
`;

export const SubTitle = styled.h4`
  margin-bottom: 0px;
`;

export const Value = styled.p`
font-size: 15px;
`;
