







import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import FooterButtons from './FooterButtons';
import axios from 'axios';

import BASE_URL from '../../../../config';

const AddTravelExpense = ({ onBackClick, travelExpenses, employee }) => {
  const [formData, setFormData] = useState({
    employeeId: '',
    travelId: '',
    placeOfVisit: '',
    purposeOfVisit: '',
    billAttachments: []
  });

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    const data = new FormData();

    const currentTime = new Date().toISOString();
  
    data.append('travelExpense', JSON.stringify({
      employeeId: formData.employeeId,
      travelId: formData.travelId,
      placeOfVisit: formData.placeOfVisit,
      purposeOfVisit: formData.purposeOfVisit,
      addedBy: formData.employeeId,
      addedTime: currentTime,
      modifiedBy: formData.employeeId,
      modifiedTime: currentTime
    }));
  
    formData.billAttachments.forEach((file) => {
      data.append(`file`, file);
    });
  
    try {
      const response = await axios.post(`${BASE_URL}/travelExpense`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log('Travel expense created:', response.data);
      onBackClick();
    } catch (error) {
      console.error('Error creating travel expense:', error);
    }
  };

  const handleSubmitAndNew = async () => {
    await handleSubmit();
    setFormData({
      employeeId: '',
      travelId: '',
      placeOfVisit: '',
      purposeOfVisit: '',
      billAttachments: []
    });
  };

  const handleSaveDraft = () => {
    console.log('Draft Saved', formData);
  };

  const handleCancel = () => {
    onBackClick();
  };

  return (
    <div className="add-travel-expense p-4">
      <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300">
        <button className="text-2xl" onClick={onBackClick}>
          ←
        </button>
        <span className="md:text-2xl font-semibold pl-1 md:pl-0">Add Travel Expense</span>
        <button className="text-2xl" onClick={onBackClick}>
          ×
        </button>
      </div>
      <ExpenseForm formData={formData} onFormChange={handleFormChange} travelExpenses={travelExpenses} employee={employee}/>
      <FooterButtons
        onSubmit={handleSubmit}
        onSubmitAndNew={handleSubmitAndNew}
        onSaveDraft={handleSaveDraft}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default AddTravelExpense;
