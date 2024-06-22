import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import StatusBadge from './statusBadge';
import Stepper from '../components/stepper';

export default function ClickPopover({ assignee }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <StatusBadge status={assignee.name} width={80} onClick={handleClick} > {assignee.name}</StatusBadge>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Stepper assignee={assignee} />
            </Popover>
        </>
    );
}
