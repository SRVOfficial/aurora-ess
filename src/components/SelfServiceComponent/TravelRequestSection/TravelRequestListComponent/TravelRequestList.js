


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './TravelRequestList.css';

// const TravelRequestList = () => {
//   const [travelRequests, setTravelRequests] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/travelRequest')
//       .then((response) => {
//         setTravelRequests(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching travel requests:', error);
//       });
//   }, []);

//   return (
//     <div className="travel-request-list">
//       <table>
//         <thead>
//           <tr>
//             <th>Employee ID</th>
//             <th>Travel ID</th>
//             <th>Employee Department</th>
//             <th>Place of visit</th>
//             <th>Expected date of departure</th>
//             <th>Expected date of arrival</th>
//             <th>Purpose of visit</th>
//             <th>Expected duration in days</th>
//             <th>Is billable to customer</th>
//             <th>Customer name</th>
//             <th>Added By</th>
//             <th>Added Time</th>
//             <th>Modified By</th>
//             <th>Modified Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {travelRequests.map((item, index) => (
//             <tr key={index}>
//               <td>{item.employeeId}</td>
//               <td>{item.travelId}</td>
//               <td>{item.employeeDepartment}</td>
//               <td>{item.placeOfVisit}</td>
//               <td>{new Date(item.expectedDateOfDeparture).toLocaleString()}</td>
//               <td>{new Date(item.expectedDateOfArrival).toLocaleString()}</td>
//               <td>{item.purposeOfVisit}</td>
//               <td>{item.expectedDurationInDays}</td>
//               <td>{item.billableToCustomer ? 'Yes' : 'No'}</td>
//               <td>{item.customerName}</td>
//               <td>{item.addedBy}</td>
//               <td>{new Date(item.addedTime).toLocaleString()}</td>
//               <td>{item.modifiedBy}</td>
//               <td>{new Date(item.modifiedTime).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TravelRequestList;












import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BASE_URL from '../../../../config';

const TravelRequestList = () => {
  const [travelRequests, setTravelRequests] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/travelRequest`)
      .then((response) => {
        setTravelRequests(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching travel requests:', error);
      });
  }, []);

  return (
    <div className="mt-5 bg-white shadow-md rounded-lg overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Employee ID</th>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Travel ID</th>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Employee Department</th>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Place of Visit</th>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Expected Departure</th>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Expected Arrival</th>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Purpose of Visit</th>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Duration (days)</th>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Billable</th>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Customer Name</th>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Added By</th>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Added Time</th>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Modified By</th>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Modified Time</th>
          </tr>
        </thead>
        <tbody>
          {travelRequests.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-300">{item.employeeId}</td>
              <td className="px-4 py-2 border-b border-gray-300">{item.travelId}</td>
              <td className="px-4 py-2 border-b border-gray-300">{item.employeeDepartment}</td>
              <td className="px-4 py-2 border-b border-gray-300">{item.placeOfVisit}</td>
              <td className="px-4 py-2 border-b border-gray-300">{new Date(item.expectedDateOfDeparture).toLocaleString()}</td>
              <td className="px-4 py-2 border-b border-gray-300">{new Date(item.expectedDateOfArrival).toLocaleString()}</td>
              <td className="px-4 py-2 border-b border-gray-300">{item.purposeOfVisit}</td>
              <td className="px-4 py-2 border-b border-gray-300">{item.expectedDurationInDays}</td>
              <td className="px-4 py-2 border-b border-gray-300">{item.billableToCustomer ? 'Yes' : 'No'}</td>
              <td className="px-4 py-2 border-b border-gray-300">{item.customerName}</td>
              <td className="px-4 py-2 border-b border-gray-300">{item.addedBy}</td>
              <td className="px-4 py-2 border-b border-gray-300">{new Date(item.addedTime).toLocaleString()}</td>
              <td className="px-4 py-2 border-b border-gray-300">{item.modifiedBy}</td>
              <td className="px-4 py-2 border-b border-gray-300">{new Date(item.modifiedTime).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TravelRequestList;
 