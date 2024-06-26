import React, { useEffect, useState } from 'react';
import CustomTable from '../../components/table';
import Search from '../../components/search';
import Sort from '../../components/sort';
import { columnsForDrivers, dataForDrivers } from '../../jsonData/tableData';
import CustomTablePagination from '../../components/CustomTablePagination';
import AddButton from '../../components/addButton';
import { useDispatch, useSelector } from 'react-redux';
import { getDriversAsync } from '../../redux/driversSlice';

const AvailableDrivers = () => {
  const data = useSelector(state => state.drivers.data)
  const [filteredData, setFilteredData] = useState(dataForDrivers);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const filteredcolumnsForDrivers = columnsForDrivers


  const dispatch = useDispatch()

  const handleSearchChange = (value) => {
    const newFilteredData = dataForDrivers.filter((item) =>
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

  useEffect(() => {
    dispatch(getDriversAsync())
  }, [])
  
  useEffect(() => {
    setFilteredData(data)
  }, [data])

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>

        <div style={{ display: "flex", justifyContent: "space-between", width: "50%" }}>

          {/* <AddButton /> */}
          <Search onSearchChange={handleSearchChange} />
          <Sort onSortChange={handleSortChange} />
          {/* <Filter columns={columnsForDrivers} onFilterChange={handleFilterChange} /> */}
        </div>
      </div>
      <div style={{ backgroundColor: 'white', borderRadius: '5px', margin: '20px 0px' }}>
        <div style={{ display: 'flex', justifyContent: "space-between" }}>

        </div>
        <CustomTable columns={filteredcolumnsForDrivers} data={filteredData.slice(page * rowsPerPage, (page + 1) * rowsPerPage)} />
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

export default AvailableDrivers;
