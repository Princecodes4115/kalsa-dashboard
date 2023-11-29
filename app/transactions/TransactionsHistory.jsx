"use client";
import React from "react";
import DataTable from "react-data-table-component";
import { tableData, columns } from "@/utils/constants";

const TransactionHistory = () => {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <div className="flex items-center space-x-4">
          <label>Search:</label>
          <input type="text" placeholder="Type to search" />
        </div>
        <div className="flex justify-end mt-4">
          <button className="border-2 border-solid border-black rounded-md text-white px-6 py-2 ">
            Filter
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded ml-2">
            Export
          </button>
        </div>
      </div>
      <DataTable
        title="Transaction History"
        columns={columns}
        data={tableData}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 20, 30]}
      />
    </div>
  );
};

export default TransactionHistory;
