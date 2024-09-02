




import React, { useState } from "react";
import axios from "axios";
import "./ProfileEditForm.css";

import BASE_URL from "../../../config";

const ProfileEditForm = ({ employee }) => {
  const [formData, setFormData] = useState({
    empId: employee.empId,
    firstName: employee.firstName,
    lastName: employee.lastName,
    nickName: employee.nickName,
    workEmailId: employee.workEmailId,
    department: employee.department,
    settingLocation: employee.settingLocation,
    designation: employee.designation,
    texsmartlyRole: employee.texsmartlyRole,
    employmentType: employee.employmentType,
    employmentStatus: employee.employmentStatus,
    sourceOfHiring: employee.sourceOfHiring,
    dateOfJoining: employee.dateOfJoining ? employee.dateOfJoining.slice(0, 10) : "",
    reportToData: employee.reportToData ? employee.reportToData[0].name : "",
    dob: employee.dob ? employee.dob.slice(0, 10) : "",
    maritalStatus: employee.maritalStatus,
    aboutMe: employee.aboutMe,
    uanNo: employee.uanNo,
    workPhone: employee.workPhone,
    extension: employee.extension,
    presentAddress: employee.presentAddress,
    permanentAddress: employee.permanentAddress,
    personalMobileNo: employee.personalMobileNo,
    personalEmailId: employee.personalEmailId,
    workExperience: employee.workExperience || [{
      companyName: "",
      jobTitle: "",
      fromDate: "",
      toDate: "",
      jobDescription: ""
    }],
    educationDetails: employee.educationDetails || [{
      instituteName: "",
      degree: "",
      specialization: "",
      completionDate: ""
    }]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleArrayChange = (e, index, arrayName) => {
    const { name, value } = e.target;
    const updatedArray = formData[arrayName].map((item, i) => 
      i === index ? { ...item, [name]: value } : item
    );
    setFormData((prevFormData) => ({
      ...prevFormData,
      [arrayName]: updatedArray,
    }));
  };

  const addArrayItem = (arrayName, newItem) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [arrayName]: [...prevFormData[arrayName], newItem],
    }));
  };

  const removeArrayItem = (index, arrayName) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [arrayName]: prevFormData[arrayName].filter((item, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    axios.put(`${BASE_URL}/employees/${employee.empId}`, formData)
      .then((response) => {
        console.log("Employee updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error updating the employee!", error);
      });
  };

  return (
    <div className="profile-edit">
      <div className="profile-edit-container">
        <h1>Edit Employee</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          {/* Basic Information */}
          <h3>Basic Information</h3>
          <div className="profile-edit-row">
            <div className="profile-edit-column">
              <div className="profile-edit-form-group">
                <label htmlFor="empId">Employee ID</label>
                <input type="text" id="empId" name="empId" value={formData.empId} onChange={handleChange} required readOnly />
              </div>
              <div className="profile-edit-form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="profile-edit-form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
            </div>
            <div className="profile-edit-column">
              <div className="profile-edit-form-group">
                <label htmlFor="nickName">Nick Name</label>
                <input type="text" id="nickName" name="nickName" value={formData.nickName} onChange={handleChange} />
              </div>
              <div className="profile-edit-form-group">
                <label htmlFor="workEmailId">Email Address</label>
                <input type="email" id="workEmailId" name="workEmailId" value={formData.workEmailId} onChange={handleChange} required />
              </div>
            </div>
          </div>

          {/* Work Information */}
          <h3>Work Information</h3>
          <div className="profile-edit-row">
            <div className="profile-edit-column">
              <div className="profile-edit-form-group">
                <label htmlFor="department">Department</label>
                <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} />
              </div>
              <div className="profile-edit-form-group">
                <label htmlFor="settingLocation">Location</label>
                <input type="text" id="settingLocation" name="settingLocation" value={formData.settingLocation} onChange={handleChange} />
              </div>
              <div className="profile-edit-form-group">
                <label htmlFor="designation">Designation</label>
                <input type="text" id="designation" name="designation" value={formData.designation} onChange={handleChange} />
              </div>
            </div>
            <div className="profile-edit-column">
              <div className="profile-edit-form-group">
                <label htmlFor="texsmartlyRole">Aurora Role</label>
                <input type="text" id="texsmartlyRole" name="texsmartlyRole" value={formData.texsmartlyRole} onChange={handleChange} />
              </div>
              <div className="profile-edit-form-group">
                <label htmlFor="employmentType">Employment Type</label>
                <input type="text" id="employmentType" name="employmentType" value={formData.employmentType} onChange={handleChange} />
              </div>
              <div className="profile-edit-form-group">
                <label htmlFor="employmentStatus">Employment Status</label>
                <input type="text" id="employmentStatus" name="employmentStatus" value={formData.employmentStatus} onChange={handleChange} />
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <h3>Personal Information</h3>
          <div className="profile-edit-row">
            <div className="profile-edit-column">
              <div className="profile-edit-form-group">
                <label htmlFor="sourceOfHiring">Source of Hiring</label>
                <input type="text" id="sourceOfHiring" name="sourceOfHiring" value={formData.sourceOfHiring} onChange={handleChange} />
              </div>
              <div className="profile-edit-form-group">
                <label htmlFor="dateOfJoining">Date of Joining</label>
                <input type="date" id="dateOfJoining" name="dateOfJoining" value={formData.dateOfJoining} onChange={handleChange} />
              </div>
              <div className="profile-edit-form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
              </div>
            </div>
            <div className="profile-edit-column">
              <div className="profile-edit-form-group">
                <label htmlFor="maritalStatus">Marital Status</label>
                <input type="text" id="maritalStatus" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} />
              </div>
              <div className="profile-edit-form-group">
                <label htmlFor="aboutMe">About Me</label>
                <textarea id="aboutMe" name="aboutMe" value={formData.aboutMe} onChange={handleChange}></textarea>
              </div>
            </div>
          </div>

          {/* Identification Information */}
          <h3>Identification Information</h3>
          <div className="profile-edit-row">
            <div className="profile-edit-column">
              <div className="profile-edit-form-group">
                <label htmlFor="uanNo">UAN Number</label>
                <input type="text" id="uanNo" name="uanNo" value={formData.uanNo} onChange={handleChange} />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <h3>Contact Information</h3>
          <div className="profile-edit-row">
            <div className="profile-edit-column">
              <div className="profile-edit-form-group">
                <label htmlFor="workPhone">Work Phone</label>
                <input type="text" id="workPhone" name="workPhone" value={formData.workPhone} onChange={handleChange} />
              </div>
              <div className="profile-edit-form-group">
                <label htmlFor="extension">Extension</label>
                <input type="text" id="extension" name="extension" value={formData.extension} onChange={handleChange} />
              </div>
              <div className="profile-edit-form-group">
                <label htmlFor="presentAddress">Present Address</label>
                <input type="text" id="presentAddress" name="presentAddress" value={formData.presentAddress} onChange={handleChange} />
              </div>
              <div className="profile-edit-form-group">
                <label htmlFor="permanentAddress">Permanent Address</label>
                <input type="text" id="permanentAddress" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} />
              </div>
            </div>
            <div className="profile-edit-column">
              <div className="profile-edit-form-group">
                <label htmlFor="personalMobileNo">Mobile Number</label>
                <input type="text" id="personalMobileNo" name="personalMobileNo" value={formData.personalMobileNo} onChange={handleChange} />
              </div>
              <div className="profile-edit-form-group">
                <label htmlFor="personalEmailId">Personal Email ID</label>
                <input type="email" id="personalEmailId" name="personalEmailId" value={formData.personalEmailId} onChange={handleChange} />
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <h3>Work Experience</h3>
          {formData.workExperience.map((experience, index) => (
            <div key={index} className="experience-item">
              <div className="remove-btn-container">
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeArrayItem(index, "workExperience")}
                >
                  Remove
                </button>
              </div>
              <div className="profile-edit-row">
                <div className="profile-edit-column">
                  <div className="profile-edit-form-group">
                    <label htmlFor={`companyName-${index}`}>Company Name</label>
                    <input
                      type="text"
                      id={`companyName-${index}`}
                      name="companyName"
                      value={experience.companyName}
                      onChange={(e) => handleArrayChange(e, index, "workExperience")}
                    />
                  </div>
                  <div className="profile-edit-form-group">
                    <label htmlFor={`jobTitle-${index}`}>Job Title</label>
                    <input
                      type="text"
                      id={`jobTitle-${index}`}
                      name="jobTitle"
                      value={experience.jobTitle}
                      onChange={(e) => handleArrayChange(e, index, "workExperience")}
                    />
                  </div>
                  <div className="profile-edit-form-group">
                    <label htmlFor={`fromDate-${index}`}>From Date</label>
                    <input
                      type="date"
                      id={`fromDate-${index}`}
                      name="fromDate"
                      value={experience.fromDate}
                      onChange={(e) => handleArrayChange(e, index, "workExperience")}
                    />
                  </div>
                </div>
                <div className="profile-edit-column">
                  <div className="profile-edit-form-group">
                    <label htmlFor={`toDate-${index}`}>To Date</label>
                    <input
                      type="date"
                      id={`toDate-${index}`}
                      name="toDate"
                      value={experience.toDate}
                      onChange={(e) => handleArrayChange(e, index, "workExperience")}
                    />
                  </div>
                  <div className="profile-edit-form-group">
                    <label htmlFor={`jobDescription-${index}`}>Job Description</label>
                    <textarea
                      id={`jobDescription-${index}`}
                      name="jobDescription"
                      value={experience.jobDescription}
                      onChange={(e) => handleArrayChange(e, index, "workExperience")}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="add-details-btn"
            onClick={() =>
              addArrayItem("workExperience", {
                companyName: "",
                jobTitle: "",
                fromDate: "",
                toDate: "",
                jobDescription: "",
              })
            }
          >
            Add Work Experience
          </button>

          {/* Education Details */}
          <h3>Education Details</h3>
          {formData.educationDetails.map((education, index) => (
            <div key={index} className="education-item">
              <div className="remove-btn-container">
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeArrayItem(index, "educationDetails")}
                >
                  Remove
                </button>
              </div>
              <div className="profile-edit-row">
                <div className="profile-edit-column">
                  <div className="profile-edit-form-group">
                    <label htmlFor={`instituteName-${index}`}>Institute Name</label>
                    <input
                      type="text"
                      id={`instituteName-${index}`}
                      name="instituteName"
                      value={education.instituteName}
                      onChange={(e) => handleArrayChange(e, index, "educationDetails")}
                    />
                  </div>
                  <div className="profile-edit-form-group">
                    <label htmlFor={`degree-${index}`}>Degree</label>
                    <input
                      type="text"
                      id={`degree-${index}`}
                      name="degree"
                      value={education.degree}
                      onChange={(e) => handleArrayChange(e, index, "educationDetails")}
                    />
                  </div>
                </div>
                <div className="profile-edit-column">
                  <div className="profile-edit-form-group">
                    <label htmlFor={`specialization-${index}`}>Specialization</label>
                    <input
                      type="text"
                      id={`specialization-${index}`}
                      name="specialization"
                      value={education.specialization}
                      onChange={(e) => handleArrayChange(e, index, "educationDetails")}
                    />
                  </div>
                  <div className="profile-edit-form-group">
                    <label htmlFor={`completionDate-${index}`}>Completion Date</label>
                    <input
                      type="date"
                      id={`completionDate-${index}`}
                      name="completionDate"
                      value={education.completionDate}
                      onChange={(e) => handleArrayChange(e, index, "educationDetails")}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="add-details-btn"
            onClick={() =>
              addArrayItem("educationDetails", {
                instituteName: "",
                degree: "",
                specialization: "",
                completionDate: "",
              })
            }
          >
            Add Education Details
          </button>

          <button type="submit" className="save-changes-btn">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileEditForm;












// import React, { useState } from "react";
// import axios from "axios";

// const ProfileEditForm = ({ employee }) => {
//   const [formData, setFormData] = useState({
//     empId: employee.empId,
//     firstName: employee.firstName,
//     lastName: employee.lastName,
//     nickName: employee.nickName,
//     workEmailId: employee.workEmailId,
//     department: employee.department,
//     settingLocation: employee.settingLocation,
//     designation: employee.designation,
//     texsmartlyRole: employee.texsmartlyRole,
//     employmentType: employee.employmentType,
//     employmentStatus: employee.employmentStatus,
//     sourceOfHiring: employee.sourceOfHiring,
//     dateOfJoining: employee.dateOfJoining ? employee.dateOfJoining.slice(0, 10) : "",
//     reportToData: employee.reportToData ? employee.reportToData[0].name : "",
//     dob: employee.dob ? employee.dob.slice(0, 10) : "",
//     maritalStatus: employee.maritalStatus,
//     aboutMe: employee.aboutMe,
//     uanNo: employee.uanNo,
//     workPhone: employee.workPhone,
//     extension: employee.extension,
//     presentAddress: employee.presentAddress,
//     permanentAddress: employee.permanentAddress,
//     personalMobileNo: employee.personalMobileNo,
//     personalEmailId: employee.personalEmailId,
//     workExperience: employee.workExperience || [{
//       companyName: "",
//       jobTitle: "",
//       fromDate: "",
//       toDate: "",
//       jobDescription: ""
//     }],
//     educationDetails: employee.educationDetails || [{
//       instituteName: "",
//       degree: "",
//       specialization: "",
//       completionDate: ""
//     }]
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleArrayChange = (e, index, arrayName) => {
//     const { name, value } = e.target;
//     const updatedArray = formData[arrayName].map((item, i) => 
//       i === index ? { ...item, [name]: value } : item
//     );
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [arrayName]: updatedArray,
//     }));
//   };

//   const addArrayItem = (arrayName, newItem) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [arrayName]: [...prevFormData[arrayName], newItem],
//     }));
//   };

//   const removeArrayItem = (index, arrayName) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [arrayName]: prevFormData[arrayName].filter((item, i) => i !== index),
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData)
//     axios.put(`http://localhost:8080/employees/${employee.empId}`, formData)
//       .then((response) => {
//         console.log("Employee updated successfully:", response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error updating the employee!", error);
//       });
//   };

//   return (
//     <div className="profile-edit">
//       <div className="max-w-4xl mx-auto my-5 p-5 bg-gray-100 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold text-gray-800 mb-4">Edit Employee</h1>
//         <hr className="border-gray-300 my-4" />
//         <form onSubmit={handleSubmit}>
//           {/* Basic Information */}
//           <h3 className="text-xl font-semibold text-gray-600 mb-4 mt-6">Basic Information</h3>
//           <div className="flex flex-wrap -mx-2">
//             <div className="w-full md:w-1/2 px-2 mb-4">
//               <div className="mb-4">
//                 <label htmlFor="empId" className="block font-semibold text-gray-700 mb-2">Employee ID</label>
//                 <input type="text" id="empId" name="empId" value={formData.empId} onChange={handleChange} required readOnly className="w-full p-3 border border-gray-300 rounded-md" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="firstName" className="block font-semibold text-gray-700 mb-2">First Name</label>
//                 <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="lastName" className="block font-semibold text-gray-700 mb-2">Last Name</label>
//                 <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md" />
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 px-2 mb-4">
//               <div className="mb-4">
//                 <label htmlFor="nickName" className="block font-semibold text-gray-700 mb-2">Nick Name</label>
//                 <input type="text" id="nickName" name="nickName" value={formData.nickName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="workEmailId" className="block font-semibold text-gray-700 mb-2">Email Address</label>
//                 <input type="email" id="workEmailId" name="workEmailId" value={formData.workEmailId} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md" />
//               </div>
//             </div>
//           </div>

//           {/* Work Information */}
//           <h3 className="text-xl font-semibold text-gray-600 mb-4 mt-6">Work Information</h3>
//           <div className="flex flex-wrap -mx-2">
//             <div className="w-full md:w-1/2 px-2 mb-4">
//               <div className="mb-4">
//                 <label htmlFor="department" className="block font-semibold text-gray-700 mb-2">Department</label>
//                 <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="settingLocation" className="block font-semibold text-gray-700 mb-2">Location</label>
//                 <input type="text" id="settingLocation" name="settingLocation" value={formData.settingLocation} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="designation" className="block font-semibold text-gray-700 mb-2">Designation</label>
//                 <input type="text" id="designation" name="designation" value={formData.designation} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" />
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 px-2 mb-4">
//               <div className="mb-4">
//                 <label htmlFor="texsmartlyRole" className="block font-semibold text-gray-700 mb-2">Aurora Role</label>
//                 <input type="text" id="texsmartlyRole" name="texsmartlyRole" value={formData.texsmartlyRole} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="employmentType" className="block font-semibold text-gray-700 mb-2">Employment Type</label>
//                 <input type="text" id="employmentType" name="employmentType" value={formData.employmentType} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="employmentStatus" className="block font-semibold text-gray-700 mb-2">Employment Status</label>
//                 <input type="text" id="employmentStatus" name="employmentStatus" value={formData.employmentStatus} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" />
//               </div>
//             </div>
//           </div>

//           {/* Personal Information */}
//           <h3 className="text-xl font-semibold text-gray-600 mb-4 mt-6">Personal Information</h3>
//           <div className="flex flex-wrap -mx-2">
//             <div className="w-full md:w-1/2 px-2 mb-4">
//               <div className="mb-4">
//                 <label htmlFor="dob" className="block font-semibold text-gray-700 mb-2">Date of Birth</label>
//                 <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="maritalStatus" className="block font-semibold text-gray-700 mb-2">Marital Status</label>
//                 <input type="text" id="maritalStatus" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" />
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 px-2 mb-4">
//               <div className="mb-4">
//                 <label htmlFor="aboutMe" className="block font-semibold text-gray-700 mb-2">About Me</label>
//                 <textarea id="aboutMe" name="aboutMe" value={formData.aboutMe} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" />
//               </div>
//             </div>
//           </div>

//           {/* Contact Information */}
//           <h3 className="text-xl font-semibold text-gray-600 mb-4 mt-6">Contact Information</h3>
//           <div className="flex flex-wrap -mx-2">
//             <div className="w-full md:w-1/2 px-2 mb-4">
//               <div className="mb-4">
//                 <label htmlFor="personalMobileNo" className="block font-semibold text-gray-700 mb-2">Personal Mobile No.</label>
//                 <input type="text" id="personalMobileNo" name="personalMobileNo" value={formData.personalMobileNo} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="personalEmailId" className="block font-semibold text-gray-700 mb-2">Personal Email Id</label>
//                 <input type="text" id="personalEmailId" name="personalEmailId" value={formData.personalEmailId} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" />
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 px-2 mb-4">
//               <div className="mb-4">
//                 <label htmlFor="workPhone" className="block font-semibold text-gray-700 mb-2">Work Phone</label>
//                 <input type="text" id="workPhone" name="workPhone" value={formData.workPhone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="extension" className="block font-semibold text-gray-700 mb-2">Extension</label>
//                 <input type="text" id="extension" name="extension" value={formData.extension} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" />
//               </div>
//             </div>
//           </div>

//           {/* Work Experience */}
//           <h3 className="text-xl font-semibold text-gray-600 mb-4 mt-6">Work Experience</h3>
//           {formData.workExperience.map((exp, index) => (
//             <div key={index} className="flex flex-wrap -mx-2 mb-4">
//               <div className="w-full md:w-1/2 px-2">
//                 <div className="mb-4">
//                   <label htmlFor={`companyName-${index}`} className="block font-semibold text-gray-700 mb-2">Company Name</label>
//                   <input type="text" id={`companyName-${index}`} name="companyName" value={exp.companyName} onChange={(e) => handleArrayChange(e, index, 'workExperience')} className="w-full p-3 border border-gray-300 rounded-md" />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor={`jobTitle-${index}`} className="block font-semibold text-gray-700 mb-2">Job Title</label>
//                   <input type="text" id={`jobTitle-${index}`} name="jobTitle" value={exp.jobTitle} onChange={(e) => handleArrayChange(e, index, 'workExperience')} className="w-full p-3 border border-gray-300 rounded-md" />
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2 px-2">
//                 <div className="mb-4">
//                   <label htmlFor={`fromDate-${index}`} className="block font-semibold text-gray-700 mb-2">From Date</label>
//                   <input type="date" id={`fromDate-${index}`} name="fromDate" value={exp.fromDate} onChange={(e) => handleArrayChange(e, index, 'workExperience')} className="w-full p-3 border border-gray-300 rounded-md" />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor={`toDate-${index}`} className="block font-semibold text-gray-700 mb-2">To Date</label>
//                   <input type="date" id={`toDate-${index}`} name="toDate" value={exp.toDate} onChange={(e) => handleArrayChange(e, index, 'workExperience')} className="w-full p-3 border border-gray-300 rounded-md" />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor={`jobDescription-${index}`} className="block font-semibold text-gray-700 mb-2">Job Description</label>
//                   <textarea id={`jobDescription-${index}`} name="jobDescription" value={exp.jobDescription} onChange={(e) => handleArrayChange(e, index, 'workExperience')} className="w-full p-3 border border-gray-300 rounded-md" />
//                 </div>
//                 <button type="button" onClick={() => removeArrayItem(index, 'workExperience')} className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Remove</button>
//               </div>
//             </div>
//           ))}
//           <button type="button" onClick={() => addArrayItem('workExperience', { companyName: "", jobTitle: "", fromDate: "", toDate: "", jobDescription: "" })} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 mb-4">
//             Add Work Experience
//           </button>

//           {/* Education Details */}
//           <h3 className="text-xl font-semibold text-gray-600 mb-4 mt-6">Education Details</h3>
//           {formData.educationDetails.map((edu, index) => (
//             <div key={index} className="flex flex-wrap -mx-2 mb-4">
//               <div className="w-full md:w-1/2 px-2">
//                 <div className="mb-4">
//                   <label htmlFor={`instituteName-${index}`} className="block font-semibold text-gray-700 mb-2">Institute Name</label>
//                   <input type="text" id={`instituteName-${index}`} name="instituteName" value={edu.instituteName} onChange={(e) => handleArrayChange(e, index, 'educationDetails')} className="w-full p-3 border border-gray-300 rounded-md" />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor={`degree-${index}`} className="block font-semibold text-gray-700 mb-2">Degree</label>
//                   <input type="text" id={`degree-${index}`} name="degree" value={edu.degree} onChange={(e) => handleArrayChange(e, index, 'educationDetails')} className="w-full p-3 border border-gray-300 rounded-md" />
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2 px-2">
//                 <div className="mb-4">
//                   <label htmlFor={`specialization-${index}`} className="block font-semibold text-gray-700 mb-2">Specialization</label>
//                   <input type="text" id={`specialization-${index}`} name="specialization" value={edu.specialization} onChange={(e) => handleArrayChange(e, index, 'educationDetails')} className="w-full p-3 border border-gray-300 rounded-md" />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor={`completionDate-${index}`} className="block font-semibold text-gray-700 mb-2">Completion Date</label>
//                   <input type="date" id={`completionDate-${index}`} name="completionDate" value={edu.completionDate} onChange={(e) => handleArrayChange(e, index, 'educationDetails')} className="w-full p-3 border border-gray-300 rounded-md" />
//                 </div>
//                 <button type="button" onClick={() => removeArrayItem(index, 'educationDetails')} className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Remove</button>
//               </div>
//             </div>
//           ))}
//           <button type="button" onClick={() => addArrayItem('educationDetails', { instituteName: "", degree: "", specialization: "", completionDate: "" })} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 mb-4">
//             Add Education
//           </button>

//           <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Save</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProfileEditForm;
