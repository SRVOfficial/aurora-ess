





import React, { useState } from 'react';
import { writeFile, utils as XLSXUtils } from 'xlsx';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const CaseHeader = ({ setFilter, requestData }) => {
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [showExportPopup, setShowExportPopup] = useState(false);
  const [exportFormat, setExportFormat] = useState('csv');

  const handleFilterClick = () => {
    setShowFilterPopup(!showFilterPopup);
  };

  const handleExportClick = () => {
    setShowExportPopup(!showExportPopup);
  };

  const handleExport = () => {
    if (exportFormat === 'csv') {
      exportToCSV(requestData);
    } else if (exportFormat === 'xlsx') {
      exportToXLSX(requestData);
    } else if (exportFormat === 'pdf') {
      exportToPDF(requestData);
    }
    setShowExportPopup(false);
  };

  const exportToCSV = (data) => {
    const csvData = XLSXUtils.sheet_to_csv(XLSXUtils.json_to_sheet(data));
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'request_list.csv';
    link.click();
  };

  const exportToXLSX = (data) => {
    const worksheet = XLSXUtils.json_to_sheet(data);
    const workbook = XLSXUtils.book_new();
    XLSXUtils.book_append_sheet(workbook, worksheet, 'Requests');
    writeFile(workbook, 'request_list.xlsx');
  };

  const exportToPDF = (data) => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['ID', 'Title', 'Description', 'Status', 'Reporting To', 'Department', 'Designation', 'Location', 'Additional Info']],
      body: data.map(item => [item.id, item.title, item.description, item.status, item.reportingTo, item.department, item.designation, item.location, item.additionalInfo]),
    });
    doc.save('request_list.pdf');
  };

  return (
    <div className="flex justify-between items-center mb-5">
      <h2 className="text-2xl font-semibold m-0 text-white">My Requests</h2>
      <div className="flex items-center">
        <button onClick={handleFilterClick} className='ml-2 px-4 py-2 text-sm font-semibold text-[#a37682] bg-[#F0E68C] rounded hover:bg-[#f0e266]'>Filter</button>
        <button onClick={handleExportClick} className='ml-2 px-4 py-2 text-sm font-semibold text-[#a37682] bg-[#F0E68C] rounded hover:bg-[#f0e266]'>Export</button>
      </div>

      {/* Filter Popup */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity ${showFilterPopup ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="bg-white p-5 rounded shadow-md flex flex-col items-center w-11/12 sm:w-1/2 lg:w-1/3">
          <h3 className="text-xl font-medium mb-4">Filter</h3>
          <select onChange={(e) => setFilter(e.target.value)} className="mb-4 p-2 text-sm border border-gray-300 rounded">
            <option value="">Select</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Pending">Pending</option>
            <option value="On Hold">On Hold</option>
            <option value="Closed">Closed</option>
          </select>
          <button className="px-4 py-2 text-sm font-medium text-white bg-[#A28089] rounded hover:bg-[#a37682]" onClick={() => setShowFilterPopup(false)}>Close</button>
        </div>
      </div>

      {/* Export Popup */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity ${showExportPopup ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="bg-white p-5 rounded shadow-md flex flex-col items-center w-11/12 sm:w-1/2 lg:w-1/3">
          <h3 className="text-xl font-medium mb-4">Export</h3>
          <div className="mb-4">
            <label className="block mb-2 text-sm">
              Select Format:
              <select value={exportFormat} onChange={(e) => setExportFormat(e.target.value)} className="ml-2 p-2 text-sm border border-gray-300 rounded">
                <option value="csv">CSV</option>
                <option value="xlsx">XLSX</option>
                <option value="pdf">PDF</option>
              </select>
            </label>
          </div>
          <div className="flex space-x-4">
            <button onClick={handleExport} className="px-4 py-2 text-sm font-medium text-white bg-[#A28089] rounded hover:bg-[#a37682]">Export</button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700" onClick={() => setShowExportPopup(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseHeader;

