import React, { useEffect, useState } from "react";
import { admin } from "../../utils/EndPoint";
import { AgGridReact } from "ag-grid-react";

import 'ag-grid-enterprise'
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import axiosInstance from "../../utils/Axios";

const Table = () => {
  const [rowData, setRowData] = useState([]);

  const [colDefs] = useState([
    { field: "id", filter: true },
    { field: "name", filter: true },
    { field: "amount_paid", filter: true },
    { field: "totalCount", filter: true },
    { field: "transaction_date", filter: true },
    { field: "transaction_id", filter: true },
    { field: "checkin", filter: true },
    { field: "categoryName", filter: true },
    { field: "KMAMemberNumber", filter: true },
    { field: "email", filter: true },
    { field: "phoneNumber", filter: true },
    { field: "organisation", filter: true },
    { field: "role", filter: true },
  ]);

  useEffect(() => {
    axiosInstance
      .get(admin)
      .then((res) => {
        setRowData(res?.data?.admin_result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ag-theme-quartz w-full h-screen ">
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};

export default Table;
