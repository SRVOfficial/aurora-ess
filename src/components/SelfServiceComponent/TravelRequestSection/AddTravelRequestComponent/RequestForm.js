



import React from 'react';
import { differenceInDays } from 'date-fns';

const RequestForm = ({ formData, onFormChange, employee }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onFormChange(name, value);
    };

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        onFormChange(name, value);

        const updatedFormData = {
            ...formData,
            [name]: value,
        };

        if (updatedFormData.expectedDateOfDeparture && updatedFormData.expectedDateOfArrival) {
            const duration = differenceInDays(
                new Date(updatedFormData.expectedDateOfArrival),
                new Date(updatedFormData.expectedDateOfDeparture)
            ) + 1;
            onFormChange('expectedDurationInDays', duration);
        }
    };

    return (
        <div className="bg-blue-50 p-4 md:p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
                    <select 
                        name="employeeId" 
                        value={formData.employeeId} 
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select</option>
                        <option value={employee.empId}>{employee.empId}</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Employee Department</label>
                    <select 
                        name="employeeDepartment" 
                        value={formData.employeeDepartment} 
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select</option>
                        <option value={employee.department}>{employee.department}</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Place of Visit</label>
                    <input 
                        type="text" 
                        name="placeOfVisit" 
                        value={formData.placeOfVisit} 
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expected Date of Departure</label>
                    <input
                        type="date"
                        name="expectedDateOfDeparture"
                        value={formData.expectedDateOfDeparture}
                        onChange={handleDateChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expected Date of Arrival</label>
                    <input
                        type="date"
                        name="expectedDateOfArrival"
                        value={formData.expectedDateOfArrival}
                        onChange={handleDateChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Purpose of Visit</label>
                    <input 
                        type="text" 
                        name="purposeOfVisit" 
                        value={formData.purposeOfVisit} 
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expected Duration in Days</label>
                    <input
                        type="number"
                        name="expectedDurationInDays"
                        value={formData.expectedDurationInDays}
                        readOnly
                        className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Is billable to customer</label>
                    <select 
                        name="billableToCustomer" 
                        value={formData.billableToCustomer.toString()} 
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                {formData.billableToCustomer && (
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
                        <input 
                            type="text" 
                            name="customerName" 
                            value={formData.customerName} 
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default RequestForm;