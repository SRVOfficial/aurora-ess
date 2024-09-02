


import React, { useState, useEffect } from 'react';
import './PersonalSettings.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DefaultImage from '../../assets/default1.jpg';
import { BiToggleLeft, BiSolidToggleRight } from "react-icons/bi";

import BASE_URL from '../../../config';

function PersonalSettings({ employee }) {
  const [languages, setLanguages] = useState([]);
  const [countries, setCountries] = useState([]);
  const [timeZones, setTimeZones] = useState([]);
  const [themeColors, setThemeColors] = useState([]);
  const [coverImages, setCoverImages] = useState([]);

  useEffect(() => {
    console.log("Employee prop:", employee);
  }, [employee]);

  const [personalSetting, setPersonalSetting] = useState({
    employeeId: employee?.empId || 'KAMxx',
    language: 'English',
    country: 'India',
    timeZone: 'Asia/Kolkata',
    showBirthday: false,
    showAnniversary: false,
    showMobile: false,
    themeColor: '',
    coverImage: ''
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/api/settings`)
      .then(response => {
        const data = response.data[0];
        setLanguages(data.languages || []);
        setCountries(data.countries || []);
        setTimeZones(data.timeZones || []);
        setThemeColors(data.themeColors || []);
        setCoverImages(data.coverImages || []);
      })
      .catch(error => {
        console.error("There was an error fetching the settings data!", error);
      });

    axios.get(`${BASE_URL}/personal-settings/employee/${personalSetting.employeeId}`)
      .then(response => {
        if (response.data) {
          setPersonalSetting(response.data);
        }
      })
      .catch(error => {
        console.error("Error fetching personal settings:", error);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersonalSetting(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleToggleChange = (name) => {
    setPersonalSetting(prevState => ({
      ...prevState,
      [name]: !prevState[name]
    }));
  };

  const handleThemeColorChange = (color) => {
    setPersonalSetting(prevState => ({
      ...prevState,
      themeColor: color
    }));
  };

  const handleCoverImageChange = (image) => {
    setPersonalSetting(prevState => ({
      ...prevState,
      coverImage: image
    }));
  };

  const saveSettings = () => {
    if (personalSetting.employeeId) {
      axios.put(`${BASE_URL}/personal-settings/${personalSetting.employeeId}`, personalSetting)
        .then(response => {
          toast.success("Settings updated successfully");
        })
        .catch(error => {
          toast.error("Error updating settings");
          console.error("Error updating settings:", error);
        });
    } else {
      axios.post('${BASE_URL}/personal-settings', personalSetting)
        .then(response => {
          toast.success("Settings created successfully");
          setPersonalSetting(response.data);
        })
        .catch(error => {
          toast.error("Error creating settings");
          console.error("Error creating settings:", error);
        });
    }
  };

  const defaultEmployee = {
    image: DefaultImage,
    firstName: 'xxx',
    lastName: 'xxx',
    _id: 'KAMxx',
    designation: 'xxx',
    department: 'xxx',
    workEmailId: 'xxx@kamjritztex.com'
  };

  const currentEmployee = employee || defaultEmployee;

  return (
    <div className="personal-setting-container">
      <ToastContainer />
      <div className="personal-settings">
        <h2>Personal Settings</h2>
        <div className="user-info">
          <img src={currentEmployee.image} alt="User Profile" />
          <div>
            <h3>{currentEmployee.firstName} {currentEmployee.lastName} - {currentEmployee._id}</h3>
            <p>{currentEmployee.designation} - {currentEmployee.department}</p>
            <p>{currentEmployee.workEmailId}</p>
          </div>
        </div>
        <div className="locale-settings">
          <h3>Locale Settings</h3>
          <div>
            <label htmlFor="language">Language:</label>
            <select id="language" name="language" value={personalSetting.language} onChange={handleChange}>
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <select id="country" name="country" value={personalSetting.country} onChange={handleChange}>
              {countries.map(ctry => (
                <option key={ctry} value={ctry}>{ctry}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="timeZone">Time Zone:</label>
            <select id="timeZone" name="timeZone" value={personalSetting.timeZone} onChange={handleChange}>
              {timeZones.map(tz => (
                <option key={tz} value={tz}>{tz}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="permissions">
          <h3>Permissions</h3>
          <h5>Define if you would like to share or hide certain personal information in the dashboard with others in your organization</h5>
          <div>
            <label htmlFor="showBirthday">Hide my birthday</label>
            {personalSetting.showBirthday ? (
              <BiSolidToggleRight onClick={() => handleToggleChange('showBirthday')} />
            ) : (
              <BiToggleLeft onClick={() => handleToggleChange('showBirthday')} />
            )}
          </div>
          <div>
            <label htmlFor="showAnniversary">Hide my work anniversary</label>
            {personalSetting.showAnniversary ? (
              <BiSolidToggleRight onClick={() => handleToggleChange('showAnniversary')} />
            ) : (
              <BiToggleLeft onClick={() => handleToggleChange('showAnniversary')} />
            )}
          </div>
          <div>
            <label htmlFor="showMobile">Hide mobile number</label>
            {personalSetting.showMobile ? (
              <BiSolidToggleRight onClick={() => handleToggleChange('showMobile')} />
            ) : (
              <BiToggleLeft onClick={() => handleToggleChange('showMobile')} />
            )}
          </div>
        </div>
        <div className="theme-settings">
          <h3>Theme Settings</h3>
          <p>Select your preferred theme and colour settings</p>
          <div className="theme-color-options">
            <label>Theme Color</label>
            <div className="color-options">
              {themeColors.map((color, index) => (
                <div
                  key={index}
                  className={`color-option ${color === personalSetting.themeColor ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleThemeColorChange(color)}
                />
              ))}
            </div>
          </div>
          <div className="cover-image-options">
            <label>Cover Image</label>
            <div className="image-options">
              {coverImages.map((image, index) => (
                <div
                  key={index}
                  className={`image-option ${image === personalSetting.coverImage ? 'selected' : ''}`}
                  style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  onClick={() => handleCoverImageChange(image)}
                />
              ))}
            </div>
          </div>
        </div>
        <button onClick={saveSettings}>Save Settings</button>
      </div>
    </div>
  );
}

export default PersonalSettings;
