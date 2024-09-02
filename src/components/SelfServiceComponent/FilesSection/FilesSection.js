





import React, { useState, useEffect } from 'react';
import NoFileFound from '../../assets/NoFileFound.png';

import BASE_URL from '../../../config';

const FilesSection = ({ employee }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/files/employee/${employee.empId}`);
        if (response.ok) {
          const data = await response.json();
          setFiles(data);
        } else {
          console.error('Failed to fetch files');
        }
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };
    fetchFiles();
  }, [employee.empId]);

  const downloadFile = async (fileId, fileName) => {
    try {
      const response = await fetch(`${BASE_URL}/api/files/${fileId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        console.error('Failed to download file');
      }
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-[#A28089] border-b border-gray-200 px-6 py-4">
        <h2 className="text-2xl font-semibold text-white">Files</h2>
      </div>
      <div className="p-6 text-center">
        {files.length === 0 ? (
          <div className="flex flex-col items-center">
            <img src={NoFileFound} alt="No Files Found" className="w-16 h-16 mt-6 mb-2" />
            <p className="text-lg text-gray-600">No Files Found</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {files.map((file, index) => (
              <li key={index} className="py-3 hover:bg-gray-50 transition duration-150 ease-in-out">
                <button 
                  onClick={() => downloadFile(file.id, file.name)}
                  className="text-blue-600 hover:text-blue-800 hover:underline text-lg focus:outline-none"
                >
                  {file.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FilesSection;