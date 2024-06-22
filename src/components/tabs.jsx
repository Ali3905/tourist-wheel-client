// Tabs.js
import React from 'react';
import { Tabs, Tab } from '@mui/material';
import styled from 'styled-components';

const StyledTabs = styled(Tabs)`
  .MuiTabs-indicator {
    background-color: #FC7E06;
  }
`;

const StyledTab = styled(Tab)`
  && {
    color: #000; 
    &.Mui-selected {
      color: #FC7E06; 
    }
  }
`;

const CustomTabs = ({ tabs, handleChange, value }) => {
  return (
    <StyledTabs value={value} onChange={handleChange}>
      {tabs.map((tab, index) => (
        <StyledTab key={index} label={tab.label} />
      ))}
    </StyledTabs>
  );
};

export default CustomTabs;
