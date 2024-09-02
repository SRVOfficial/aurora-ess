// import React from 'react';
// import GoalItem from '../GoalItem/GoalItem';
// import './GoalsList.css';

// const GoalsList = ({ goals }) => {
//   return (
//     <div className="goals-list">
//       {goals.length === 0 ? (
//         <div className="no-goals">
//           <p>No Goals Found</p>
//         </div>
//       ) : (
//         goals.map(goal => <GoalItem key={goal.id} goal={goal} />)
//       )}
//     </div>
//   );
// };

// export default GoalsList;









import React from 'react';
import GoalItem from '../GoalItem/GoalItem';

const GoalsList = ({ goals }) => {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      {goals.length === 0 ? (
        <div className="text-center mt-6">
          <svg 
            className="mx-auto w-16 h-16 text-gray-400"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
            />
          </svg>
          <p className="mt-2 text-lg text-gray-600">No Goals Found</p>
        </div>
      ) : (
        <ul className="space-y-4">
          {goals.map(goal => (
            <li key={goal.id}>
              <GoalItem goal={goal} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GoalsList;
