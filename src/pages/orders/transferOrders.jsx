import React, { useState } from 'react';
import CustomTable from '../../components/table';
import Filter from '../../components/filter';
import Search from '../../components/search';
import Sort from '../../components/sort';
import { columnsForTransferOrder, dummyDataForTransferOrder } from '../../jsonData/tableData';
import CustomTablePagination from '../../components/CustomTablePagination';

const TansferOrders = () => {
  const [filteredData, setFilteredData] = useState(dummyDataForTransferOrder);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const filteredcolumnsForTransferOrder = columnsForTransferOrder


  const handleFilterChange = ({ column, fromValue, toValue }) => {
    const formatDate = (date) => date ? new Date(date).toLocaleDateString() : null;

    const newFilteredData = filteredData.filter((item) => {
      const columnValue = formatDate(item[column]);
      const columnValuestring = item[column];

      if (['customerEmail', 'name', 'status'].includes(column.toLowerCase())) {
        return (
          (!fromValue || columnValuestring.toLowerCase().includes(fromValue.toLowerCase())) &&
          (!toValue || columnValuestring.toLowerCase().includes(toValue.toLowerCase()))
        );
      } else if (column === "duePayDate") {
        const fromDate = formatDate(fromValue);
        const toDate = formatDate(toValue);

        return !fromDate || !toDate || (columnValue >= fromDate && columnValue <= toDate);
      } else {
        return (!fromValue || Number(columnValuestring) >= Number(fromValue)) &&
          (!toValue || Number(columnValuestring) <= Number(toValue));
      }
    });
    setPage(0);
    setFilteredData(newFilteredData);
  };

  const handleSearchChange = (value) => {
    const newFilteredData = dummyDataForTransferOrder.filter((item) =>
      Object.values(item).some((val) => val.toString().toLowerCase().includes(value.toLowerCase()))
    );
    setPage(0);
    setFilteredData(newFilteredData);
  };

  const handleSortChange = (value) => {
    const columnToSort = value;

    const newSortedData = [...filteredData].sort((a, b) =>
      a[columnToSort] > b[columnToSort] ? 1 : -1
    );
    setPage(0);
    setFilteredData(newSortedData);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>

        <div style={{ display: "flex", justifyContent: "space-between", width: "51%" }}>
          <Search onSearchChange={handleSearchChange} />
          <Sort onSortChange={handleSortChange} />
          <Filter columns={columnsForTransferOrder} onFilterChange={handleFilterChange} />
        </div>
      </div>
      <div style={{ backgroundColor: 'white', borderRadius: '5px', margin: '20px 0px' }}>
        <div style={{ display: 'flex', justifyContent: "space-between" }}>

        </div>
        <CustomTable columns={filteredcolumnsForTransferOrder} data={filteredData.slice(page * rowsPerPage, (page + 1) * rowsPerPage)} />
        <CustomTablePagination
          count={filteredData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default TansferOrders;
