import React from "react";
import DataTable from "react-data-table-component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TransactionHistory = () => {
  const data = [
    {
      id: 1,
      transactionId: "TRX123",
      source: "Web",
      customerName: "John Doe",
      customerEmail: "john@example.com",
      amount: "$100",
      requestDate: "2023-01-15",
      status: "Completed",
    },
    // Add more dummy data as needed
  ];

  const columns = [
    {
      name: "Transaction ID",
      selector: "transactionId",
      sortable: true,
    },
    {
      name: "Source",
      selector: "source",
      sortable: true,
    },
    {
      name: "Customer Name",
      selector: "customerName",
      sortable: true,
    },
    {
      name: "Customer Email",
      selector: "customerEmail",
      sortable: true,
    },
    {
      name: "Amount",
      selector: "amount",
      sortable: true,
    },
    {
      name: "Request Date",
      selector: "requestDate",
      sortable: true,
    },
    {
      name: "Status",
      selector: "status",
      sortable: true,
    },
  ];

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div className="flex items-center space-x-4">
          <label>Search:</label>
          <input type="text" placeholder="Type to search" />
        </div>
        <div className="flex items-center space-x-4">
          <label>Date Range:</label>
          <DatePicker />
          <DatePicker />
        </div>
      </div>
      <DataTable
        title="Transaction History"
        columns={columns}
        data={data}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 20, 30]}
      />
      <div className="flex justify-end mt-4">
        {/* Add filter and export UI elements here */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Filter
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded ml-2">
          Export
        </button>
      </div>
    </div>
  );
};

export default TransactionHistory;
