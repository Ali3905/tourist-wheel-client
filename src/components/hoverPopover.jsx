import React, { createContext, useContext, useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { FaCheckCircle, FaRegClock } from 'react-icons/fa';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import StatusBadge from './statusBadge';
// Define a context to manage the theme
const ThemeContext = createContext();

const pendingTheme = {
    iconColor: 'gray',
    lineColor: 'gray',
    completedLineColor: 'green'
};

// Styled components using the provided theme
const ProgressContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProgressItemContainer = styled.div`
    display: flex;
    align-items: start;

`;

const ProgressText = styled(Typography)`
    margin-left: 8px;
    font-weight: bold;
    color: ${props => props.completed ? 'green' : '#FC7E06'};
`;

const Icon = styled.div`
    color: gray;
    background-color: ${props => props.completed ? '#bbffbb' : '#ffdcba'};
    width: 23px;
    height: 23px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProgressBar = styled.div`
    height: 40px;
    background-color: ${props => props.completed ? 'green' : 'orange'};
    width: 15%;
    display: ${props => props.isLast ? 'none' : 'block'};
`;

const ProgressItem = ({ text, completed, isLast, rating }) => {
    const theme = useContext(ThemeContext);
    const IconComponent = completed ? FaCheckCircle : FaRegClock;

    return (
        <ProgressContainer>
            <ProgressItemContainer>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginRight: "4px" }}>
                    <Icon theme={theme} completed={completed}><IconComponent /></Icon>
                    <ProgressBar completed={completed} isLast={isLast} />
                </div>
                {rating ?
                    <Rating value={0} /> : <ProgressText style={{ marginTop: "1.5px" }} variant="body2" completed={completed}>{text}</ProgressText>
                }

            </ProgressItemContainer>
        </ProgressContainer>
    );
};

export default function HoverPopover({ timings }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const convertEpochToTime = (epoch) => {
        const date = new Date(epoch * 1000);
        const hours = date.getHours() % 12 || 12;
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const amOrPm = date.getHours() >= 12 ? 'PM' : 'AM';
        return `${hours}:${minutes} ${amOrPm}`;
    };

    const progressItems = [
        { key: 'OrderPlacedTime', label: 'Order placed', time: timings.timings.OrderPlacedTime },
        { key: 'OrderTansferedTime', label: 'Order Transferred', time: timings.timings.OrderTansferedTime },
        { key: 'OrderAccpetedTime', label: 'Order Accepted', time: timings.timings.OrderAccpetedTime },
        { key: 'OrderDispatchedTime', label: 'Order Dispatched', time: timings.timings.OrderDispatchedTime },
        { key: 'DeliveredTime', label: 'Order Delivered', time: timings.timings.DeliveredTime },
        { key: 'Rating', label: 'Rating', rating: true }
    ].map(item => {
        let text = `${item.label} at `;
        if (!item.time) {
            switch (item.key) {
                case 'OrderAccpetedTime':
                    text = 'Order yet to Accept';
                    break;
                case 'OrderDispatchedTime':
                    text = 'Order yet to dispatch';
                    break;
                case 'DeliveredTime':
                    text = 'Order yet to Deliver';
                    break;
                default:
                    text = 'Not available';
            }
        } else {
            text += convertEpochToTime(item.time);
        }
        return { ...item, text };
    }).filter(item => item.key !== 'OrderTansferedTime' || item.time !== null);

    return (
        <ThemeContext.Provider value={pendingTheme}>
            <div>
                <StatusBadge status={timings.progress} width={80} aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}>{timings.progress} </StatusBadge>
                <Popover
                    id="mouse-over-popover"
                    sx={{
                        pointerEvents: 'none',
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Typography sx={{ p: 2 }}>
                        {progressItems.map((item, index) => (
                            <ProgressItem
                                key={item.key}
                                text={item.text}
                                completed={!!item.time}
                                rating={item.rating}
                                isLast={index === progressItems.length - 1}
                            />
                        ))}

                    </Typography>
                </Popover>
            </div>
        </ThemeContext.Provider>
    );
}
