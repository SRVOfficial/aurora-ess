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
import axios from 'axios';

import BASE_URL from '../../../config';

const GoalSection = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/goals`);
      setGoals(response.data);
    } catch (error) {
      console.error('Error fetching goals:', error);
    }
  };

  const handleAddGoalClick = () => {
    // Redirect to the to-do list page
    window.location.href = '/todo-list';
  };

  const handleFilterClick = () => {
    setShowFilterModal(true);
  };

  const handleCloseFilterModal = () => {
    setShowFilterModal(false);
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
      </div>
    </div>
  );
};

export default GoalSection;