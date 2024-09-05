// import React, { useState, useEffect } from 'react';
// import GoalsHeader from './GoalsHeader/GoalsHeader';
// import GoalsList from './GoalsList/GoalsList';
// import FilterModal from './FilterModal/FilterModal';
// import axios from 'axios';
// import './GoalSection.css';

// const GoalSection = () => {
//   const [showFilterModal, setShowFilterModal] = useState(false);
//   const [goals, setGoals] = useState([]);

//   useEffect(() => {
//     fetchGoals();
//   }, []);

//   const fetchGoals = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/goals');
//       setGoals(response.data);
//     } catch (error) {
//       console.error('Error fetching goals:', error);
//     }
//   };

//   const handleAddGoalClick = () => {
//     // Redirect to the to-do list page
//     window.location.href = '/todo-list';
//   };

//   const handleFilterClick = () => {
//     setShowFilterModal(true);
//   };

//   const handleCloseFilterModal = () => {
//     setShowFilterModal(false);
//   };

//   const handleFilterApply = (filters) => {
//     // Apply filters to the goals list
//     // For now, we will just close the modal
//     setShowFilterModal(false);
//   };

//   return (
//     <div className="goals-section">
//       <GoalsHeader onAddGoalClick={handleAddGoalClick} onFilterClick={handleFilterClick} />
//       <GoalsList goals={goals} />
//       {showFilterModal && <FilterModal onClose={handleCloseFilterModal} onApply={handleFilterApply} />}
//     </div>
//   );
// };

// export default GoalSection;





import React, { useState, useEffect } from 'react';
import GoalsHeader from './GoalsHeader/GoalsHeader';
import GoalsList from './GoalsList/GoalsList';
import FilterModal from './FilterModal/FilterModal';
import AddGoal from './addGoal/AddGoal';
import axios from 'axios';

import BASE_URL from '../../../config.js';

const GoalSection = ({employee}) => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showAddGoalModal, setShowAddGoalModal] = useState(false);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/goals/employee/${employee.empId}`);
      setGoals(response.data);
    } catch (error) {
      console.error('Error fetching goals:', error);
    }
  };

  const handleAddGoalClick = () => {
    setShowAddGoalModal(true); // Show the add goal modal
  };

  const handleGoalAdded = () => {
    fetchGoals(); // Refresh the goal list after a new goal is added
    setShowAddGoalModal(false);
  };

  const handleFilterClick = () => {
    setShowFilterModal(true);
  };

  const handleCloseFilterModal = () => {
    setShowFilterModal(false);
  };

  const handleCloseAddGoalModal = () => {
    setShowAddGoalModal(false);
  };

  const handleFilterApply = (filters) => {
    // Apply filters to the goals list
    // For now, we will just close the modal
    setShowFilterModal(false);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-6 mx-auto max-w-7xl">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <GoalsHeader onAddGoalClick={handleAddGoalClick} onFilterClick={handleFilterClick} />
        <GoalsList goals={goals} />
        {showFilterModal && <FilterModal onClose={handleCloseFilterModal} onApply={handleFilterApply} />}
        {showFilterModal && <FilterModal onClose={handleCloseFilterModal} onApply={handleFilterApply} />}
        {/* {showAddGoalModal && (
          <AddGoal 
            employee={employee} 
            onClose={handleCloseAddGoalModal} 
            onGoalAdded={handleGoalAdded} 
          />
        )} */}
        {showAddGoalModal && (
  <div className="fixed inset-0 z-50 overflow-y-auto">
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <AddGoal 
        employee={employee} 
        onClose={handleCloseAddGoalModal} 
        onGoalAdded={handleGoalAdded} 
      />
    </div>
  </div>
)}
      </div>
    </div>
  );
};

export default GoalSection;