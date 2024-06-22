// DataPointsToggle.js
import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


function DataPointsToggle() {

  return (
    <ToggleButtonGroup
    >
      <ToggleButton value={4} aria-label="4 Data Points">
        4
      </ToggleButton>
      <ToggleButton value={8} aria-label="8 Data Points">
        8
      </ToggleButton>
      <ToggleButton value={12} aria-label="All Data Points">
        All
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default DataPointsToggle;
