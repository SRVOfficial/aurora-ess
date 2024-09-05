import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#A28089]">Our Services</h1>
        <p className="text-lg text-gray-500 mt-2">
          Explore the tools and resources available at your fingertips.
        </p>
      </div>

      {/* Service Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-[#A28089] mb-4">Profile</h2>
          <p className="text-gray-600">
            Manage all your personal and professional information, from contact
            details to work history, education, and more.
          </p>
        </div>

        {/* Team */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-[#A28089] mb-4">Team</h2>
          <p className="text-gray-600">
            View a list of your team members and their roles. Collaborate easily
            by knowing your colleagues better.
          </p>
        </div>

        {/* Calendar */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-[#A28089] mb-4">Calendar</h2>
          <p className="text-gray-600">
            Track your attendance and stay organized with a clear view of your
            workdays, leaves, and holidays.
          </p>
        </div>

        {/* Leave Tracker */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-[#A28089] mb-4">Leave Tracker</h2>
          <p className="text-gray-600">
            Plan and manage your time off. View your available leave balances
            and submit leave requests easily.
          </p>
        </div>

        {/* Time Tracker */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-[#A28089] mb-4">Time Tracker</h2>
          <p className="text-gray-600">
            Log time on assigned projects and submit your timesheets for approval
            in one convenient place.
          </p>
        </div>

        {/* Files */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-[#A28089] mb-4">Files</h2>
          <p className="text-gray-600">
            Upload, access, and manage all your work-related documents in one
            centralized location.
          </p>
        </div>

        {/* Goals */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-[#A28089] mb-4">Goals</h2>
          <p className="text-gray-600">
            Set and track your professional goals. Keep your progress visible
            and stay on target.
          </p>
        </div>

        {/* Cases */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-[#A28089] mb-4">Cases</h2>
          <p className="text-gray-600">
            Submit service requests and track their progress. Manage all your
            support needs in one place.
          </p>
        </div>

        {/* Travel Expense */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-[#A28089] mb-4">Travel Expense</h2>
          <p className="text-gray-600">
            Submit your travel expenses for reimbursement quickly and track their
            approval status.
          </p>
        </div>

        {/* Travel Request */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-[#A28089] mb-4">Travel Request</h2>
          <p className="text-gray-600">
            Apply for business trips and manage your travel requests easily.
            Track approvals for hassle-free travel planning.
          </p>
        </div>
      </div>

      {/* Need Assistance */}
      <div className="text-center mt-8">
        <h3 className="text-xl font-semibold text-gray-800">
          Need Assistance?
        </h3>
        <p className="text-gray-500 mt-2">
          If you need help navigating our services, reach out to our Support
          Desk or visit the Help Center.
        </p>
      </div>
    </div>
  );
};

export default Services;
