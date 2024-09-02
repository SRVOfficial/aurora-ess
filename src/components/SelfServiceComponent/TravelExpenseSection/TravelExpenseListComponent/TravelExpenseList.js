









import React from 'react';

const TravelExpenseList = ({ travelExpenses }) => {


  return (
    <div className="mt-5 bg-white shadow-md rounded-lg overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Employee ID</th>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Travel ID</th>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Place of Visit</th>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Purpose of Visit</th>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Added By</th>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Added Time</th>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Modified By</th>
            <th className="bg-gray-100 px-4 py-2 border-b border-gray-300 text-left">Modified Time</th>
          </tr>
        </thead>
        <tbody>
          {travelExpenses.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-300">{item.employeeId}</td>
              <td className="px-4 py-2 border-b border-gray-300">{item.travelId}</td>
              <td className="px-4 py-2 border-b border-gray-300">{item.placeOfVisit}</td>
              <td className="px-4 py-2 border-b border-gray-300">{item.purposeOfVisit}</td>
              <td className="px-4 py-2 border-b border-gray-300">{item.addedBy}</td>
              <td className="px-4 py-2 border-b border-gray-300">{item.addedTime}</td>
              <td className="px-4 py-2 border-b border-gray-300">{item.modifiedBy}</td>
              <td className="px-4 py-2 border-b border-gray-300">{item.modifiedTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TravelExpenseList;

