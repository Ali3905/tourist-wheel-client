import styled from 'styled-components';

// Styled component for the circular highlights
const CircularHighlight = styled.div`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:13px;
  color:white;
  ${(props) => {
    switch (props.status) {
      case 'Success':
        return 'background-color: #2ecc71;'; 
      case 'Failure':
        return 'background-color: #e74c3c;'; 
        case 'Partner':
            return 'background-color: #FC7E06;'; 
      default:
        
        return 'background-color: gray;'; 
    }
  }}
`;

export default CircularHighlight;