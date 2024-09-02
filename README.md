# Employee_Self_service_ui_texsmartly_Employee_Self_service_ui



# Employee Self Service

### Module (IN): ONBOARDING, TIME TRACKER, LEAVE, PERFORMANCE
### Module (OUT): 


## Table of Contents
- [Introduction](#introduction)
- [Installation](#Installation)
- [Usage](#Usage)
- [Features](#Features)
- [Dependencies](#Dependencies)
- [Available-Scripts](#Available Scripts)
- [API-Endpoints](#API Endpoints)


## Introduction
Welcome to the Self Service project. This project is a comprehensive employee self-service application built using React for the frontend and Spring Boot for the backend. It includes a variety of features such as profile management, attendance tracking, leave management, goal setting, and more.


# Installation

1. Clone the repository:

- `git clone https://github.com/Kamjritztex-It-Solutions/texsmartly_Employee_Self_service_ui.git`
- `cd self-service-ui`



2. Install the dependencies:
-`npm install`


3. Start the development server:
- `npm start`


## Usage

1. Navigate to `http://localhost:3000` in your web browser.
2. Use the navigation bar to access different sections of the application.

## Features

- **Profile Management**: View and edit employee profiles.
- **Team Management**: View team details.
- **Calendar**: Access personal calendars.
- **Leave Tracker**: Manage leave requests and approvals.
- **Time Tracker**: Track time spent on different activities.
- **Files**: Manage and view files related to the employee.
- **Goals**: Set and track goals.
- **Cases**: Manage cases and track their status.
- **Travel Expense**: Manage travel expenses.
- **Travel Request**: Manage travel requests.
- **Personal Settings**: Edit personal settings and preferences.

## Dependencies

- @fortawesome/fontawesome-svg-core
- @fortawesome/free-solid-svg-icons
- @fortawesome/react-fontawesome
- @fullcalendar/react
- axios
- date-fns
- html2canvas
- jspdf
- jspdf-autotable
- moment
- moment-timezone
- react
- react-calendar
- react-csv
- react-datepicker
- react-dom
- react-icons
- react-modal
- react-moment
- react-pdf
- react-router-dom
- react-scripts
- react-toastify
- xlsx

## Available Scripts

- `npm start`: Starts the development server.
- `npm build`: Builds the app for production.

## API Endpoints

- `GET /employees/:employeeId`: Fetch employee details.
- `GET /travelExpense/employee/:employeeId`: Fetch travel expenses for an employee.