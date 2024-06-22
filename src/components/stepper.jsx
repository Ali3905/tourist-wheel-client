



import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));

function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

QontoStepIcon.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 136deg, #FF5722 0%, #FF9800 50%, #FF9800 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 136deg, #FF5722 0%, #FF9800 50%, #FF9800 100%)',
        },
    },

    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient( 136deg, #FF5722 0%, #FF9800 50%, #FF9800 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient( 136deg, #FF5722 0%, #FF9800 50%, #FF9800 100%)',
    }),
}));


// Styled components for customizing the disable button
const DisableButton = styled(Button)(({ theme }) => ({
    border: '2px solid red',
    color: 'red',
    padding:'3px',
    fontSize:'10px',
    marginBottom:'4px'
}));

// Styled components for customizing the transfer button
const TransferButton = styled(Button)(({ theme }) => ({
    border: '2px solid green',
    color: 'green',
    padding:'3px',
    fontSize:'10px'
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <PersonIcon />,
        2: <TransferWithinAStationIcon />,
        3: <StoreIcon />,
        4: <LocalShippingIcon />,
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    completed: PropTypes.bool,
    icon: PropTypes.node,
};

export default function CustomizedSteppers({ assignee }) {
    const [transfered, setTransfered] = React.useState(false);
    const [currentTime, setCurrentTime] = React.useState(getCurrentTime());

    React.useEffect(() => {
        const intervalId = setInterval(() => setCurrentTime(getCurrentTime()), 1000);
        return () => clearInterval(intervalId);
    }, []);

    const handleTransferedButtonClick = () => {
        console.log("clickedddd")
        setTransfered(true);
    };

    const handleDisableButtonClick =()=> {
        alert("disabled")
    }


    const convertEpochToTime = (epoch) => {
        const date = new Date(epoch * 1000);
        const hours = date.getHours() % 12 || 12;
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const amOrPm = date.getHours() >= 12 ? 'PM' : 'AM';
        return `${hours}:${minutes} ${amOrPm}`;
    };

    function getCurrentTime() {
        const date = new Date();
        let hours = date.getHours() % 12 || 12;
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const amOrPm = date.getHours() >= 12 ? 'PM' : 'AM';
        return `${hours}:${minutes} ${amOrPm}`;
    }
    

    console.log(assignee, "assignee?.assignee")
    let orderTime = convertEpochToTime(assignee?.details?.OrderTiming?.OrderPlacedTime)

   
    
    const steps = [
        {
            label: 'Admin',
            details: {
                name: assignee.details?.adminDetails.Name,
                contactDetails: assignee.details?.adminDetails.contactDetails,
                activeStatus: assignee.details?.adminDetails.activeStatus
            }
        },
        {
            label: 'Vendor',
            details: {
                name: assignee.details?.VendorDeatils.Name,
                contactDetails: assignee.details?.VendorDeatils.contactDetails,
                activeStatus: assignee.details?.VendorDeatils.activeStatus
            }
        },
        {
            label: 'Partner',
            details: {
                name: assignee.details?.PartnerDeatils.Name,
                contactDetails: assignee.details?.PartnerDeatils.contactDetails,
                activeStatus: assignee.details?.PartnerDeatils.activeStatus
            }
        }
    ];

    let stepCases = [
        steps,
        [
            {
                label: 'Admin',
                details: {
                    name: assignee.details?.adminDetails.Name,
                    contactDetails: assignee.details?.adminDetails.contactDetails,
                    activeStatus: assignee.details?.adminDetails.activeStatus
                }
            },
            {
                label: 'Admin Vendor',
                details: {
                    name: assignee.details?.VendorDeatils.Name,
                    contactDetails: assignee.details?.VendorDeatils.contactDetails,
                    activeStatus: assignee.details?.VendorDeatils.activeStatus
                }
            },
            {
                label: 'Partner',
                details: {
                    name: assignee.details?.PartnerDeatils.Name,
                    contactDetails: assignee.details?.PartnerDeatils.contactDetails,
                    activeStatus: assignee.details?.PartnerDeatils.activeStatus
                }
            }
        ],
        [
            {
                label: 'Admin',
                details: {
                    name: assignee.details?.adminDetails.Name,
                    contactDetails: assignee.details?.adminDetails.contactDetails,
                    activeStatus: assignee.details?.adminDetails.activeStatus
                }
            },
            {
                label: 'Transfer',
                details: {
                    name: "disable",
                    contactDetails: 'Transfer',
                }
            },
            {
                label: 'Partner',
                details: {
                    name: assignee.details?.PartnerDeatils.Name,
                    contactDetails: assignee.details?.PartnerDeatils.contactDetails,
                    activeStatus: assignee.details?.PartnerDeatils.activeStatus
                }
            }
        ],
        [
            {
                label: 'Admin',
                details: {
                    name: assignee.details?.adminDetails.Name,
                    contactDetails: assignee.details?.adminDetails.contactDetails,
                    activeStatus: assignee.details?.adminDetails.activeStatus
                }
            },
            {
                label: 'Transfered',
                details: {
                    name: assignee.details?.VendorDeatils.Name,
                    contactDetails: assignee.details?.VendorDeatils.contactDetails,
                    activeStatus: assignee.details?.VendorDeatils.activeStatus
                }
            },
            {
                label: 'ReAssigned',
                details: {
                    name: assignee.details?.VendorDeatils.NearByVendorDetails[0].Name,
                    contactDetails: assignee.details?.VendorDeatils.NearByVendorDetails[0].contactDetails,
                    activeStatus: assignee.details?.VendorDeatils.NearByVendorDetails[0].activeStatus
                }
            },
            {
                label: 'Partner',
                details: {
                    name: assignee.details?.PartnerDeatils.Name,
                    contactDetails: assignee.details?.PartnerDeatils.contactDetails,
                    activeStatus: assignee.details?.PartnerDeatils.activeStatus
                }
            }
        ]
    ];

    let currentSteps = steps;

    console.log(currentTime , "currentTime");
    console.log(orderTime, "orderTime")
    // Calculate the difference in minutes
    const parseTimeToMinutes = (timeString) => {
        const [time, modifier] = timeString.split(' ');
        let [hours, minutes] = time.split(':');
        hours = parseInt(hours, 10);
        minutes = parseInt(minutes, 10);
        if (modifier === 'PM' && hours !== 12) {
            hours += 12;
        }
        return hours * 60 + minutes;
    };
    
    const orderTimeInMinutes = parseTimeToMinutes(orderTime);
    const currentTimeInMinutes = parseTimeToMinutes(currentTime);
    const timeDifference = currentTimeInMinutes - orderTimeInMinutes;
    console.log(timeDifference , "timeDifference");
    

    

    // Decide which steps to show based on time difference
    if (transfered) {
        currentSteps = stepCases[3];
    } else if (timeDifference > 10) {
        currentSteps = stepCases[2];
    } else if (timeDifference > 5) {
        currentSteps = stepCases[1];
    }
    

    return (
<Stack sx={{ width: '100%' }} spacing={8}>
    <Stepper alternativeLabel activeStep={2} style={{padding:"20px"}} connector={<ColorlibConnector />}>
        {currentSteps.map((step, index) => (
            <Step key={index}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {step.label === 'Transfer' ? (
                        <div>
                            <DisableButton onClick={handleDisableButtonClick}>Disable</DisableButton>
                            <TransferButton onClick={handleTransferedButtonClick}>Transfer</TransferButton>
                        </div>
                    ) : (
                        <>
                            <div>{step.label}</div>
                            <div style={{display:"flex" , justifyContent:'center'}}>
                            <div>{step.details.name}</div>
                            {step.details.activeStatus && (
                    <div style={{
                        marginTop:"5px",
                    marginLeft:"5px",
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: 'green'
                    }}></div>
                )}
                {!step.details.activeStatus && (
                    <div style={{
                    
                        marginTop:"5px",
                        marginLeft:"5px",
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: 'red'
                    }}></div>
                )}
                            </div>
                          
                            <div>{step.details.contactDetails}</div>
             
                        </>
                    )}
                </StepLabel>
            </Step>
        ))}
    </Stepper>
</Stack>

    );
}
