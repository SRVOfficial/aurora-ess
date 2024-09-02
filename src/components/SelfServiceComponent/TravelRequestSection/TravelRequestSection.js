// import React, { useState } from 'react';

// import TravelRequestHeader from './TravelRequestHeaderComponent/TravelRequestHeader.js';
// import TravelRequestList from './TravelRequestListComponent/TravelRequestList.js';
// import AddTravelRequest from './AddTravelRequestComponent/AddTravelRequest.js';

// import './TravelRequestSection.css';

// const TravelRequestSection = ({employee}) => {
//   const [isAdding, setIsAdding] = useState(false);

//   const handleAddRecordClick = () => {
//     setIsAdding(true);
//   };

//   const handleBackClick = () => {
//     setIsAdding(false);
//   };

//   return (
//     <div className="travel-request-container">
//       {isAdding ? (
//         <AddTravelRequest onBackClick={handleBackClick} employee={employee}/>
//       ) : (
//         <>
//           <TravelRequestHeader onAddRecordClick={handleAddRecordClick} />
//           <TravelRequestList />
//         </>
//       )}
//     </div>
//   );
// }

// export default TravelRequestSection












import React, { useState } from 'react';
import TravelRequestHeader from './TravelRequestHeaderComponent/TravelRequestHeader.js';
import TravelRequestList from './TravelRequestListComponent/TravelRequestList.js';
import AddTravelRequest from './AddTravelRequestComponent/AddTravelRequest.js';

const TravelRequestSection = ({ employee }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAddRecordClick = () => {
    setIsAdding(true);
  };

  const handleBackClick = () => {
    setIsAdding(false);
  };

  return (
    <div className="travel-request-container p-4 sm:p-8 bg-white shadow-lg rounded-lg">
      {isAdding ? (
        <AddTravelRequest 
          onBackClick={handleBackClick} 
          employee={employee}
        />
      ) : (
        <>
          <TravelRequestHeader onAddRecordClick={handleAddRecordClick} />
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">Error loading travel requests</p>
          ) : (
            <TravelRequestList />
          )}
        </>
      )}
    </div>
  );
}

export default TravelRequestSection;