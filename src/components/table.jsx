// CustomTable.js
import React from 'react';
import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow as MuiTableRow,
    TableRow,
    TableCell,
    TableBody
} from '@mui/material';
import styled from 'styled-components';
import HoverPopover from './hoverPopover';
import ClickPopover from './clickPopover';
import Status from './statusButtons';
import { useSelector } from 'react-redux';
import TableMenu from './tableMenu';
import Highlate from './highlate'
import { useNavigate } from 'react-router-dom';
const CustomTable = ({ columns, data }) => {
    // console.log("data", data)
    // console.log("columns", columns);
    const navigate = useNavigate()
    const selectedItem = useSelector((state) => state.sidebar.selectedParentIndex);
    // console.log(selectedItem, "tableindexCheck")
    // const orderTable = selectedItem === 3
    const statusData = useSelector((state) => state.status);
    // console.log(statusData, 'statusData')

    const StyledViewButton = styled.button`
    background-color: #ffffff;
    color: #000000; 
    border: 1px solid #FC7E06;
    border-radius: 5px; 
    padding: 4px 18px; 
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #ffdcba;
    }
`;

    const renderStatusCell = (row) => {
        return (
            <TableCell>
                <Status
                    id={row.id}
                    status={statusData[row.id]}
                    buttonStatus={row.status}
                />
            </TableCell>
        );
    };

    const handleViewClick = (row) => {
        console.log('View clicked for row:', row);
    };
    const HoverableTableRow = styled(MuiTableRow)`
    &:hover {
        background-color: #ffdcba; 
      cursor:pointer;
    }
`;
    return (

        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow >
                        {columns.map((column) => (
                            <TableCell key={column.id}>{column.label}</TableCell>
                        ))}

                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <HoverableTableRow key={row.id}>
                            {columns.map((column) => {
                                return (
                                    <React.Fragment key={column.id}>
                                        {column.label === "Products" ? (
                                            <TableCell>
                                                <StyledViewButton onClick={() => handleViewClick(row)}>View</StyledViewButton>
                                            </TableCell>
                                        ) : column.label === "Accept/Reject" ? (
                                            <>
                                                {renderStatusCell(row)}
                                            </>
                                        )

                                            : column.label === "Transfter" ? (
                                                <>
                                                    {renderStatusCell(row)}
                                                </>
                                            ) : column.label === "Acceptance" ? (

                                                <TableCell><Status status={row[column.id]} /></TableCell>

                                            ) 
                                            : column.label === "Action" ? (

                                                <TableCell> <TableMenu/></TableCell>

                                            )
                                            
                                            : column.label === "Partner" ? (
                                              
                                                <TableCell>< Highlate status={'Partner'}>{row[column.id]}</Highlate></TableCell>
                                           

                                            ): 
                                            column.label === "Success" ? (
                                              
                                                <TableCell>< Highlate status={'Success'}>{row[column.id]}</Highlate></TableCell>
                                           

                                            )
                                            : 
                                            column.label === "Failure" ? (
                                              
                                                <TableCell>< Highlate status={'Failure'}>{row[column.id]}</Highlate></TableCell>
                                           

                                            ):(
                                                column.id === "assigneeDetails" ? (
                                                    <TableCell> <ClickPopover assignee={row[column.id]} /></TableCell>
                                                ) : column.id === "orderTimings" ? (
                                                    <TableCell> <HoverPopover timings={row[column.id]} /></TableCell>

                                                ) : (
                                                    <TableCell onClick={() => navigate(`/Details/${row.id}`)}>{row[column.id]}</TableCell>
                                                )
                                            )}
                                    </React.Fragment>
                                );
                            })}
                     

                        </HoverableTableRow>
                    ))}
                </TableBody>


            </Table>
        </TableContainer>

    );
};

export default CustomTable;





