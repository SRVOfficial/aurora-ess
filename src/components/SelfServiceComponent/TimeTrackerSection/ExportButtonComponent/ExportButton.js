import React from 'react';
import { CSVLink } from 'react-csv';

const ExportButton = ({ data }) => {
  const headers = [
    { label: "Client", key: "client" },
    { label: "Project", key: "project" },
    { label: "Total Time", key: "totalTime" },
    { label: "Recorded Time", key: "recordedTime" },
    { label: "Billable", key: "billable" }
  ];

  const csvReport = {
    data: data,
    headers: headers,
    filename: 'TimeSheet_Report.csv'
  };

  return (
    <CSVLink {...csvReport}>
      <button>Export</button>
    </CSVLink>
  );
};

export default ExportButton;






// import React from 'react';
// import { CSVLink } from 'react-csv';

// const ExportButton = ({ data }) => {
//   const headers = [
//     { label: "Client", key: "client" },
//     { label: "Project", key: "project" },
//     { label: "Total Time", key: "totalTime" },
//     { label: "Recorded Time", key: "recordedTime" },
//     { label: "Billable", key: "billable" }
//   ];

//   const csvReport = {
//     data: data,
//     headers: headers,
//     filename: 'TimeSheet_Report.csv'
//   };

//   return (
//     <CSVLink {...csvReport}>
//       <button>Export</button>
//     </CSVLink>
//   );
// };

// export default ExportButton;
