import styled from 'styled-components';

export const SubmitButton = styled.button`
  width: ${props => props.primary ? '100%' : '150px'};
  background-color: #FC7E06;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #E36600;
    cursor: pointer;
  }
`;
