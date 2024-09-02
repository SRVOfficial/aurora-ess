import React from 'react';
// import './Footer.css';

const Footer = ({ total, submitted, notSubmitted }) => {
  return (
    <div className="footer-section">
      <div>Total: {total}</div>
      <div>Submitted: {submitted}</div>
      <div>Not Submitted: {notSubmitted}</div>
    </div>
  );
};

export default Footer;












// import React from 'react';

// const Footer = ({ total, submitted, notSubmitted }) => {
//   return (
//     <div className="footer-section">
//       {/* <div>Total: {total}</div> */}
//       <div>Total: {6*8}&nbsp;Hrs</div>
//       <div>Submitted: {submitted}</div>
//       <div>Not Submitted: {notSubmitted}</div>
//     </div>
//   );
// };

// export default Footer;
