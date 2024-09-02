


import React, { useEffect, useState } from 'react';
import axios from 'axios';

import BASE_URL from '../../../../config';

const ExpenseForm = ({ formData, onFormChange, travelExpenses, employee }) => {
  const [travelIds, setTravelIds] = useState([]);

  useEffect(() => {
    const fetchTravelIds = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/travelRequest/employee/${employee.empId}`);
        const ids = response.data.map(travelRequest => travelRequest.travelId);
        setTravelIds(ids);
      } catch (error) {
        console.error('Error fetching travel IDs:', error);
      }
    };
    fetchTravelIds();
  }, [employee.empId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormChange(name, value);
  };

  const handleFileChange = (e) => {
    onFormChange('billAttachments', Array.from(e.target.files));
  };

  return (
    <div className="bg-blue-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
      <div className="space-y-4 sm:space-y-6">
        <div className="form-group">
          <label className="block mb-1 font-medium text-gray-700" htmlFor="employeeId">Employee ID</label>
          <select
            id="employeeId"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select</option>
            {[...new Set(travelExpenses.map(expense => expense.employeeId))].map(id => (
              <option value={id} key={id}>{id}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="block mb-1 font-medium text-gray-700" htmlFor="travelId">Travel ID</label>
          <select
            id="travelId"
            name="travelId"
            value={formData.travelId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select</option>
            {travelIds.map(id => (
              <option value={id} key={id}>{id}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="block mb-1 font-medium text-gray-700" htmlFor="placeOfVisit">Place of Visit</label>
          <input
            type="text"
            id="placeOfVisit"
            name="placeOfVisit"
            value={formData.placeOfVisit}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="form-group">
          <label className="block mb-1 font-medium text-gray-700" htmlFor="purposeOfVisit">Purpose of Visit</label>
          <input
            type="text"
            id="purposeOfVisit"
            name="purposeOfVisit"
            value={formData.purposeOfVisit}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="form-group">
          <label className="block mb-1 font-medium text-gray-700" htmlFor="billAttachments">Bill Attachment</label>
          <input
            type="file"
            id="billAttachments"
            name="billAttachments"
            multiple
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;