import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { rowData, colDefs } from "../src/constants/Data";

const GridExample = () => {
  const [gridApi, setGridApi] = useState([]);
  const defaultColDef = {
    sortable: true,
    editable: true,
    filter: true,
    floatingFilter: true,
  };





  return (
    <div className="bg-black h-[100vh] flex flex-col justify-center items-center gap-5">
      <div className="ag-theme-quartz h-[50vh] w-[80vw]">
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          onGridReady={({ api }) => setGridApi(api)}
        />
      </div>
      <button
        className="bg-white px-5 py-2 rounded-lg font-bold text-lg"
        onClick={() => gridApi.exportDataAsCsv()}
      >
        Export
      </button>
    </div>
  );
};

export default GridExample;