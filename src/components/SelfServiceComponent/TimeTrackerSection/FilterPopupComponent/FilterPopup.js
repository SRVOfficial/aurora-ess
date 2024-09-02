import React from 'react';
import './FilterPopup.css';

const FilterPopup = ({ filters, onFilterChange, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="filter-popup-inner">
          {Object.keys(filters).map((filterKey) => (
            <div className="filter-option" key={filterKey}>
              <label>{filterKey}</label>
              <select name={filterKey} value={filters[filterKey]} onChange={onFilterChange}>
                {filterKey === 'period' && (
                  <>
                    <option value="This Week">This Week</option>
                    <option value="Last Week">Last Week</option>
                    <option value="This Month">This Month</option>
                  </>
                )}
                {filterKey === 'clients' && (
                  <>
                    <option value="All Clients">All Clients</option>
                    <option value="Client A">Client A</option>
                    <option value="Client B">Client B</option>
                  </>
                )}
                {filterKey === 'projects' && (
                  <>
                    <option value="All Projects">All Projects</option>
                    <option value="Project A">Project A</option>
                    <option value="Project B">Project B</option>
                  </>
                )}
                {filterKey === 'jobs' && (
                  <>
                    <option value="All Jobs">All Jobs</option>
                    <option value="Job A">Job A</option>
                    <option value="Job B">Job B</option>
                  </>
                )}
                {filterKey === 'billableStatus' && (
                  <>
                    <option value="All">All</option>
                    <option value="Billable">Billable</option>
                    <option value="Non-billable">Non-billable</option>
                  </>
                )}
                {filterKey === 'approvalStatus' && (
                  <>
                    <option value="All">All</option>
                    <option value="Approved">Approved</option>
                    <option value="Pending">Pending</option>
                    <option value="Rejected">Rejected</option>
                  </>
                )}
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;





