





import React from 'react';

const ButtonWrapper = ({ children, onClick, color }) => (
  <div className="w-full sm:w-1/2 p-2">
    <button 
      onClick={onClick}
      className={`w-full px-6 py-3 ${color} text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color.split('-')[1]}-400`}
    >
      {children}
    </button>
  </div>
);

const FooterButtons = ({ onSubmit, onSubmitAndNew, onSaveDraft, onCancel }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
      <div className="flex flex-wrap -mx-2">
        <ButtonWrapper onClick={onSubmit} color="bg-green-500">
          Submit
        </ButtonWrapper>
        <ButtonWrapper onClick={onSubmitAndNew} color="bg-blue-500">
          Submit and New
        </ButtonWrapper>
        <ButtonWrapper onClick={onSaveDraft} color="bg-yellow-500">
          Save Draft
        </ButtonWrapper>
        <ButtonWrapper onClick={onCancel} color="bg-red-500">
          Cancel
        </ButtonWrapper>
      </div>
    </div>
  );
};

export default FooterButtons;
