// StatusBadge.js

import styled from 'styled-components';

const StatusBadge = styled.div`
  padding: 2px;
  border-radius: 4px;
  text-align: center;
  width: ${(props) => props.width || '159px'};
  color: ${(props) => props.textColor || 'black'};
  border: ${(props) => props.borderColor || '1px solid black'};
  background-color: white;

  ${(props) => {
    switch (props.status) {
      case 'updated':
        return 'color: #3498db; border-color: #3498db;'; 
      case 'initial':
        return 'color: #2ecc71; border-color: #2ecc71;'; // Green
      case 'paid':
        return 'color: #27ae60; border-color: #27ae60;'; // Dark Green
      case 'pending':
        return 'color: #f39c12; border-color: #f39c12;'; // Orange
      case 'accepted':
        return 'color: #28a745; border-color: #28a745;'; // Dark Gray
      case 'rejected':
        return 'color: #e74c3c; border-color: #e74c3c;'; // Red
      case 'Dispatched':
        return 'color: #FFC300; border-color: #FFC300;'; // Yellow
      case 'Transferred':
        return 'color: #58508d; border-color: #58508d;'; // Dark Purple
      case 'Delivered':
        return 'color: #138D75; border-color: #138D75;'; // Greenish-Blue
      case 'admin':
        return 'color: #f39c12; border-color: #f39c12;'; // Orange
      case 'vendor':
        return 'color: #3498db; border-color: #3498db;'; // Blue
      case 'partner':
        return 'color: #27ae60; border-color: #27ae60;'; // Dark Green
      default:
        return 'color: #95a5a6; border-color: #95a5a6;'; // Gray
    }
  }}
`;

export default StatusBadge;
