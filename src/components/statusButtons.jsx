import React from 'react';
import { useDispatch } from 'react-redux';
import {
  acceptStatus,
  rejectStatus,
  invoiceSend,
  // transferStatus,
  acceptEmployeeStatus,
  rejectEmployeeStatus
} from '../redux/statusSlice';
import StatusBadge from './statusBadge';
import CustomButton from './CustomButton';
import { useSelector } from 'react-redux';
import { openPopup } from '../redux/popupSlice';
const Status = ({ id, status, buttonStatus }) => {
console.log(status , "statuscascas")
  const TableCheck = useSelector((state) => state.sidebar.selectedParentIndex);
  const accepted = buttonStatus === 'accepted';
  const rejected = buttonStatus === 'rejected';
  const acceptedone = buttonStatus === 'EmpAccepted';
  const rejectedtwo = buttonStatus === 'EmpRejected';

  const fullypaid = buttonStatus === 'fullypaid';
  const Nothingpaid = buttonStatus === 'Nothingpaid';
  const COD = buttonStatus === 'COD';
  const dispatch = useDispatch();
  const isAccepted = status === 'accepted';
  const isRejected = status === 'rejected';
  const isEmpAccepted = status === 'EmpAccepted';
  const isEmpRejected = status === 'EmpRejected';
  const invoicesent = status === 'invoicesent';
  const isPending = status === 'pending'

  const handleReject = () => {
    console.log(id)
    dispatch(rejectStatus({ id }));
  };

  const handleAccept = () => {
    console.log(id)
    dispatch(acceptStatus({ id }));
  };

  const handleEmployeeAccept = () => {
    console.log(id)
    dispatch(acceptEmployeeStatus({ id }));
  };

  const handleEmployeeReject = () => {
    console.log(id)
    dispatch(rejectEmployeeStatus({ id }));
  };

  const handleSendInvoice = () => {
    dispatch(invoiceSend({ id }));
  };

  const handleRequestpayment = () => {
    console.log('clicked');
  };

  const handleOpenPopup = () => {
    dispatch(openPopup({ id }));
  };

  // const handleTransfer = () => {
  //   dispatch(transferStatus({ id }));
  // };

  const renderButtons = () => (
    <>
      <CustomButton type="primary" style={{ marginRight: '10px' }} onClick={() => handleAccept(id)}>
        Accept
      </CustomButton>
      <CustomButton type="default" onClick={() => handleReject(id)}>
        Reject
      </CustomButton>
    </>
  );

  const renderButtonsone = () => (
    <>
      <CustomButton type="primary" style={{ marginRight: '10px' }} onClick={() => handleEmployeeAccept(id)}>
        Accept
      </CustomButton>
      <CustomButton type="default" onClick={() => handleEmployeeReject(id)}>
        Reject
      </CustomButton>
    </>
  );

  return (
    <>
      {(TableCheck === 7 || TableCheck === 25 ||  TableCheck === 26 || TableCheck === 27) && (
        <div>
          {isAccepted || isRejected ? (
            <StatusBadge status={isAccepted ? 'accepted' : 'rejected'}>
              {isAccepted ? 'Accepted' : 'Rejected'}
            </StatusBadge>
          ) : (
            <div>
              {accepted && <CustomButton type="default" onClick={() => handleReject(id)}>Reject</CustomButton>}
              {rejected && <CustomButton type="primary" onClick={() => handleAccept(id)}>Accept</CustomButton>}
              {!accepted && !rejected && renderButtons()}
            </div>
          )}
        </div>
      )}


      {(TableCheck === 4) && (
        <div>
          {isEmpAccepted || isEmpRejected? (
            <StatusBadge status={isEmpAccepted ? 'accepted' : 'rejected'}>
              {isEmpAccepted ? 'Accepted' : 'Rejected'}
            </StatusBadge>
          ) : (
            <div>
              {acceptedone && <CustomButton type="default" onClick={() => handleEmployeeReject(id)}>Reject</CustomButton>}
              {rejectedtwo && <CustomButton type="primary" onClick={() => handleEmployeeAccept(id)}>Accept</CustomButton>}
              {!acceptedone && !rejectedtwo && renderButtonsone()}
            </div>
          )}
        </div>
      )}

      {TableCheck === 5 &&  (
        <>
          <CustomButton type="default" style={{ marginLeft: '10px' }} onClick={handleOpenPopup}>
            Transfer
          </CustomButton>
        </>
      )}

      {TableCheck === 6 && (

      <StatusBadge status={isPending}>Pending</StatusBadge>
      )}

      {fullypaid && (
        <div>
          {invoicesent ? (
            <StatusBadge status="invoicesent">Invoice Sent</StatusBadge>
          ) : (
            TableCheck === 1 && (
              <CustomButton type="default" onClick={() => handleSendInvoice(id)}>
                Send Invoice
              </CustomButton>
            )
          )}
        </div>
      )}
      {TableCheck === 7 && Nothingpaid && (
        <>
          <input type="text" />
          <CustomButton type="default" onClick={() => handleRequestpayment(id)}>
            Request payment
          </CustomButton>
        </>

      )}

      {COD && (
        <div>
          {invoicesent ? (
            <StatusBadge status="invoicesent">Invoice Sent</StatusBadge>
          ) : (
            TableCheck === 1 && (
              <CustomButton type="default" onClick={() => handleSendInvoice(id)}>
                Payment Received
              </CustomButton>
            )
          )}
        </div>
      )}
    </>
  );
};

export default Status;
