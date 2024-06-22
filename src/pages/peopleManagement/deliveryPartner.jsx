import React, { useState, useEffect, useMemo } from 'react';
import CustomTable from '../../components/table';
import CustomTabs from '../../components/tabs';
import Filter from '../../components/filter';
import Search from '../../components/search';
import Sort from '../../components/sort';
import AddButton from '../../components/addButton';
import { columnsForEmployeeTable, EmployeeDummyData } from '../../jsonData/tableData';
import CustomTablePagination from '../../components/CustomTablePagination';

const DeliveryPartner = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [filteredData, setFilteredData] = useState(EmployeeDummyData);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const filteredcolumnsForEmployeeTable = columnsForEmployeeTable;

  const handleFilterChange = ({ column, fromValue, toValue }) => {
    const formatDate = (date) => date ? new Date(date).toLocaleDateString() : null;

    const newFilteredData = EmployeeDummyData.filter((item) => {
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

  useEffect(() => {
    handleChangeTab(null, activeTab);
  }, [activeTab]);

  const handleChangeTab = (event, newValue) => {
    setActiveTab(newValue);
    setPage(0);
  };

  const handleSearchChange = (value) => {
    const newFilteredData = EmployeeDummyData.filter((item) =>
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

  const filteredDataMemo = useMemo(() => {
    const filterStatus = (status) => EmployeeDummyData.filter((val) => val.Type === status);
    switch (activeTab) {
      case 0:
        return filterStatus("Admin");
      case 1:
        return filterStatus("Vendor");
      case 2:
        return filterStatus("Global");
      default:
        return EmployeeDummyData;
    }
  }, [activeTab]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "end"}}>
        <div style={{width:'65%' , display:"flex" , justifyContent:'space-between'}}>
          <AddButton/>
          <Search onSearchChange={handleSearchChange} />
          <Sort onSortChange={handleSortChange} />
          <Filter columns={columnsForEmployeeTable} onFilterChange={handleFilterChange} />
        </div>
      </div>
      <div style={{ display: 'flex', marginTop:"15px" ,alignItems: "center" }}>
        <div style={{ marginTop: "5px" }}>
          <CustomTabs tabs={[{ label: 'Admin Partners' }, { label: 'Vendor Partners' },{ label: 'Global Partners' },]} handleChange={handleChangeTab} value={activeTab} />
        </div>
      </div>
      <div style={{ backgroundColor: 'white', borderRadius: '5px', margin: '20px 0px' }}>
        <div style={{ display: 'flex', justifyContent: "space-between" }}></div>
        <CustomTable columns={filteredcolumnsForEmployeeTable} data={filteredDataMemo.slice(page * rowsPerPage, (page + 1) * rowsPerPage)} />
        <CustomTablePagination
          count={filteredDataMemo.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default DeliveryPartner;
