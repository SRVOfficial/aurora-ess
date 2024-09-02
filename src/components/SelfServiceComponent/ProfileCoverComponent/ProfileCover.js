











import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import DefaultCover from '../../assets/cover.jpg';
import DefaultProfile from '../../assets/default1.jpg';

import BASE_URL from '../../../config';

const ProfileCover = ({ employee }) => {
  const [coverImage, setCoverImage] = useState(employee && employee.coverImage ? employee.coverImage : DefaultCover);
  const [profileImage, setProfileImage] = useState(DefaultProfile);
  const coverInputRef = useRef(null);
  const profileInputRef = useRef(null);

  useEffect(() => {
    console.log("Employee prop cover:", employee);
  }, [employee]);

  useEffect(() => {
    // Fetch profile image from backend
    axios.get('API endpoint')
      .then(response => {
        setProfileImage(response.data.profileImage);
      })
      .catch(error => {
        console.error('Error fetching profile image:', error);
      });

    // Fetch cover image from backend
    if (employee && employee.empId) {
      axios.get(`${BASE_URL}/personal-settings/employee/${employee.empId}`)
        .then(response => {
          const data = response.data;
          if (data.coverImage) {
            setCoverImage(data.coverImage);
            console.log(data.coverImage);
          }
        })
        .catch(error => {
          console.error('Error fetching cover image:', error);
        });
    }
  }, [employee]);

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCoverImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditCoverClick = () => {
    if (coverInputRef.current) {
      coverInputRef.current.click();
    }
  };

  const handleEditProfileClick = () => {
    if (profileInputRef.current) {
      profileInputRef.current.click();
    }
  };

  return (
    <div className="relative w-full text-center">
      <div className="relative">
        <img src={coverImage} alt="Cover" className="w-full h-64 object-cover" />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={coverInputRef}
          onChange={handleCoverChange}
        />
        {/* <button className="absolute top-2 right-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900" onClick={handleEditCoverClick}>Edit Cover</button> */}
      </div>
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-center">
        <img src={employee ? employee.image : DefaultProfile} alt="Profile" className="w-48 h-48 rounded-full border-4 border-white object-cover" />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={profileInputRef}
          onChange={handleProfileChange}
        />
        {/* <button className="absolute top-110 right-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900" onClick={handleEditProfileClick}>Edit Profile</button> */}
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center w-4/5 bg-white bg-opacity-20 backdrop-blur-md rounded px-4 py-2 hidden md:flex">
        <div className="flex-1 text-center mx-4">{employee ? employee.empId : 'N/A'}</div>
        <div className="flex-1 text-center mx-4">{employee ? `${employee.firstName} ${employee.lastName}` : 'John Doe'}</div>
        <div className="flex-1 text-center mx-4">{employee ? employee.department : 'Department'}</div>
        <div className="flex-1 text-center mx-4">{employee ? employee.designation : 'Designation'}</div>
        <div className="flex-1 text-center mx-4">{employee ? employee.workEmailId : 'email@example.com'}</div>
      </div>
    </div>
  );
};

export default ProfileCover;
