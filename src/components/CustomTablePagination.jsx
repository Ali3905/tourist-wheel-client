import React from 'react';
import TablePagination from '@mui/material/TablePagination';

const CustomTablePagination = ({ count, page, onPageChange, rowsPerPage, onRowsPerPageChange }) => {
  const rowsPerPageOptions = [5, 7];

  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      onPageChange={onPageChange}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={onRowsPerPageChange}
      rowsPerPageOptions={rowsPerPageOptions}
    />
  );
};

export default CustomTablePagination;
