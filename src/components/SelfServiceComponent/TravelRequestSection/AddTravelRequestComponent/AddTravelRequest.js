



// import React, { useState } from 'react';
// import axios from 'axios';
// import RequestForm from './RequestForm.js';
// import FooterButtons from './FooterButtons.js';
// import './AddTravelRequest.css';

// const AddTravelRequest = ({ onBackClick, employee }) => {
//     const [formData, setFormData] = useState({
//         employeeId: employee.empId || '',
//         travelId: `TR${new Date().getFullYear()}${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
//         employeeDepartment: employee.department || '',
//         placeOfVisit: '',
//         expectedDateOfDeparture: '',
//         expectedDateOfArrival: '',
//         purposeOfVisit: '',
//         expectedDurationInDays: 0,
//         billableToCustomer: false,
//         customerName: '',
//         addedBy: `${employee.firstName || ''} ${employee.lastName || ''} - ${employee.empId || ''}`,
//         addedTime: new Date().toISOString(),
//         modifiedBy: `${employee.firstName || ''} ${employee.lastName || ''} - ${employee.empId || ''}`,
//         modifiedTime: new Date().toISOString()
//     });
    
//     const handleFormChange = (field, value) => {
//         setFormData(prevData => ({
//             ...prevData,
//             [field]: value,
//             modifiedTime: new Date().toISOString()
//         }));
//     };
    
//     const handleSubmit = async () => {
//         try {
//             const dataToSend = {
//                 ...formData,
//                 billableToCustomer: formData.billableToCustomer === 'true' || formData.billableToCustomer === true,
//                 expectedDurationInDays: parseInt(formData.expectedDurationInDays, 10),
//                 expectedDateOfDeparture: new Date(formData.expectedDateOfDeparture).toISOString(),
//                 expectedDateOfArrival: new Date(formData.expectedDateOfArrival).toISOString()
//             };
//             const response = await axios.post('http://localhost:8080/travelRequest', dataToSend);
//             console.log('Form Submitted', response.data);
//             onBackClick();
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             if (error.response) {
//                 console.error('Response data:', error.response.data);
//                 console.error('Response status:', error.response.status);
//                 console.error('Response headers:', error.response.headers);
//             }
//         }
//     };
    
//     const handleSubmitAndNew = async () => {
//         await handleSubmit();
//         setFormData({
//             employeeId: employee.empId || '',
//             travelId: `TR${new Date().getFullYear()}${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
//             employeeDepartment: employee.department || '',
//             placeOfVisit: '',
//             expectedDateOfDeparture: '',
//             expectedDateOfArrival: '',
//             purposeOfVisit: '',
//             expectedDurationInDays: 0,
//             billableToCustomer: false,
//             customerName: '',
//             addedBy: employee.name || '',
//             addedTime: new Date().toISOString(),
//             modifiedBy: employee.name || '',
//             modifiedTime: new Date().toISOString()
//         });
//     };
    
//     const handleSaveDraft = () => {
//         console.log('Draft Saved', formData);
//     };
    
//     const handleCancel = () => {
//         onBackClick();
//     };
    
//     return (
//         <div className="add-travel-request">
//             <div className="header">
//                 <button className="back-button" onClick={onBackClick}>
//                     ←
//                 </button>
//                 <span className="title">Add Travel Request</span>
//                 <button className="close-button" onClick={onBackClick}>
//                     ×
//                 </button>
//             </div>
//             <RequestForm formData={formData} onFormChange={handleFormChange} employee={employee}/>
//             <FooterButtons
//                 onSubmit={handleSubmit}
//                 onSubmitAndNew={handleSubmitAndNew}
//                 onSaveDraft={handleSaveDraft}
//                 onCancel={handleCancel}
//             />
//         </div>
//     );
// }

// export default AddTravelRequest;









import React, { useState } from 'react';
import axios from 'axios';
import RequestForm from './RequestForm.js';
import FooterButtons from './FooterButtons.js';

import BASE_URL from '../../../../config.js';

const AddTravelRequest = ({ onBackClick, employee }) => {
    const [formData, setFormData] = useState({
        employeeId: employee.empId || '',
        travelId: `TR${new Date().getFullYear()}${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
        employeeDepartment: employee.department || '',
        placeOfVisit: '',
        expectedDateOfDeparture: '',
        expectedDateOfArrival: '',
        purposeOfVisit: '',
        expectedDurationInDays: 0,
        billableToCustomer: false,
        customerName: '',
        addedBy: `${employee.firstName || ''} ${employee.lastName || ''} - ${employee.empId || ''}`,
        addedTime: new Date().toISOString(),
        modifiedBy: `${employee.firstName || ''} ${employee.lastName || ''} - ${employee.empId || ''}`,
        modifiedTime: new Date().toISOString()
    });
    
    const handleFormChange = (field, value) => {
        setFormData(prevData => ({
            ...prevData,
            [field]: value,
            modifiedTime: new Date().toISOString()
        }));
    };
    
    const handleSubmit = async () => {
        try {
            const dataToSend = {
                ...formData,
                billableToCustomer: formData.billableToCustomer === 'true' || formData.billableToCustomer === true,
                expectedDurationInDays: parseInt(formData.expectedDurationInDays, 10),
                expectedDateOfDeparture: new Date(formData.expectedDateOfDeparture).toISOString(),
                expectedDateOfArrival: new Date(formData.expectedDateOfArrival).toISOString()
            };
            const response = await axios.post(`${BASE_URL}/travelRequest`, dataToSend);
            console.log('Form Submitted', response.data);
            onBackClick();
        } catch (error) {
            console.error('Error submitting form:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            }
        }
    };
    
    const handleSubmitAndNew = async () => {
        await handleSubmit();
        setFormData({
            employeeId: employee.empId || '',
            travelId: `TR${new Date().getFullYear()}${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
            employeeDepartment: employee.department || '',
            placeOfVisit: '',
            expectedDateOfDeparture: '',
            expectedDateOfArrival: '',
            purposeOfVisit: '',
            expectedDurationInDays: 0,
            billableToCustomer: false,
            customerName: '',
            addedBy: employee.name || '',
            addedTime: new Date().toISOString(),
            modifiedBy: employee.name || '',
            modifiedTime: new Date().toISOString()
        });
    };
    
    const handleSaveDraft = () => {
        console.log('Draft Saved', formData);
    };
    
    const handleCancel = () => {
        onBackClick();
    };
    
    return (
        <div className="add-travel-request bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200">
                <button 
                    className="text-2xl font-bold text-gray-600 hover:text-gray-800 transition-colors duration-200" 
                    onClick={onBackClick}
                >
                    ←
                </button>
                <span className="text-xl sm:text-2xl font-semibold text-gray-800">Add Travel Request</span>
                <button 
                    className="text-2xl font-bold text-gray-600 hover:text-gray-800 transition-colors duration-200" 
                    onClick={onBackClick}
                >
                    ×
                </button>
            </div>
            <div className="p-4 sm:p-6">
                <RequestForm formData={formData} onFormChange={handleFormChange} employee={employee}/>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-200">
                <FooterButtons
                    onSubmit={handleSubmit}
                    onSubmitAndNew={handleSubmitAndNew}
                    onSaveDraft={handleSaveDraft}
                    onCancel={handleCancel}
                />
            </div>
        </div>
    );
}

export default AddTravelRequest;
