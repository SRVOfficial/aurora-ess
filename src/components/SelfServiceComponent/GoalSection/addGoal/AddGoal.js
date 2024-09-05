// import React, { useState } from 'react';
// import axios from 'axios';
// import BASE_URL from '../../../../config.js';

// const AddGoal = ({ employee, onClose, onGoalAdded }) => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [status, setStatus] = useState('Not Started');
//   const [startDate, setStartDate] = useState('');
//   const [completedDate, setCompletedDate] = useState('');

//   const handleAddGoal = async () => {
//     try {
//       const goalData = {
//         empId: employee.empId, // Assuming employee object is passed as a prop
//         name,
//         description,
//         status,
//         startDate: startDate || null, // optional
//         completedDate: completedDate || null, // optional
//         createdDate: new Date() // current date for createdDate
//       };

//       await axios.post(`${BASE_URL}/api/goals`, goalData);
//       onGoalAdded(); // Callback to refresh the goal list or any other action
//       onClose(); // Close the add goal form
//     } catch (error) {
//       console.error('Error adding goal:', error);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md">
//         <h3 className="text-xl font-semibold mb-4 text-center">Add New Goal</h3>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">Goal Name:</label>
//           <input 
//             type="text" 
//             value={name} 
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">Description:</label>
//           <textarea 
//             value={description} 
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">Status:</label>
//           <select 
//             value={status} 
//             onChange={(e) => setStatus(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//           >
//             <option value="Not Started">Not Started</option>
//             <option value="In Progress">In Progress</option>
//             <option value="Completed">Completed</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">Start Date:</label>
//           <input 
//             type="date" 
//             value={startDate} 
//             onChange={(e) => setStartDate(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">Completed Date:</label>
//           <input 
//             type="date" 
//             value={completedDate} 
//             onChange={(e) => setCompletedDate(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div className="flex justify-end space-x-2">
//           <button 
//             onClick={handleAddGoal} 
//             className="px-4 py-2 bg-[#A28089] text-white rounded-md hover:bg-[#a55f71] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Add Goal
//           </button>
//           <button 
//             onClick={onClose} 
//             className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddGoal;














import React, { useState } from 'react';
import axios from 'axios';
import { X } from 'lucide-react';
import BASE_URL from '../../../../config.js';

const AddGoal = ({ employee, onClose, onGoalAdded }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Not Started');
  const [startDate, setStartDate] = useState('');
  const [completedDate, setCompletedDate] = useState('');

  const handleAddGoal = async () => {
    try {
      const goalData = {
        empId: employee.empId,
        name,
        description,
        status,
        startDate: startDate || null,
        completedDate: completedDate || null,
        createdDate: new Date()
      };

      await axios.post(`${BASE_URL}/api/goals`, goalData);
      onGoalAdded();
      onClose();
    } catch (error) {
      console.error('Error adding goal:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">Add New Goal</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Goal Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Enter goal name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              rows="3"
              placeholder="Describe the goal"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select 
              value={status} 
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input 
                type="date" 
                value={startDate} 
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Completed Date</label>
              <input 
                type="date" 
                value={completedDate} 
                onChange={(e) => setCompletedDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-2 mt-6">
          <button 
            onClick={onClose} 
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all"
          >
            Cancel
          </button>
          <button 
            onClick={handleAddGoal} 
            className="px-4 py-2 bg-[#A28089] text-white rounded-md hover:bg-[#9e5c6e] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
          >
            Add Goal
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddGoal;