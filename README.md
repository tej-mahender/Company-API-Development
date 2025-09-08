# Company API Development

## Objective

Build a full-stack application to manage multiple companies with RESTful APIs and an optional frontend dashboard to view and filter company data.

## Features

### Backend

* RESTful CRUD APIs for `Company` resource.
* MongoDB integration.
* Filtering capabilities:

  * Name (partial, case-insensitive)
  * Industry
  * Location
  * Type (Private, Public, Non-profit, Government)
  * Employee count range
  * Revenue range
* Validation and error handling.

### Frontend

* React-based UI.
* Displays companies in card or table view.
* Filters for:

  * Name, Industry, Location, Type
  * Min/Max Employees
  * Min/Max Revenue
* Dynamic fetching of filtered results.
* Responsive design with Bootstrap and enhanced CSS.

---

## Folder Structure

```
backend/
├── controllers/
│   └── companyController.js   # Handles CRUD and filtering logic
├── models/
│   └── Company.js             # Mongoose schema for company
├── routes/
│   └── companyRoutes.js       # Express routes for company APIs
├── scripts/
│   └── seed.js                # Seeds database with sample companies
├── .env                       # Environment variables (MongoDB URI, port)
├── .gitignore
├── package.json
└── server.js                  # Entry point, connects DB and mounts routes

frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Filters.js        # Filter controls component
│   │   ├── CompanyCard.js    # Card layout for company
│   │   └── CompanyTable.js   # Table layout for companies
│   ├── pages/
│   │   └── Companies.js      # Main page with filters and display
│   ├── services/
│   │   └── api.js            # Axios API calls
│   ├── App.js
│   ├── index.js
│   └── index.css             # Custom and Bootstrap CSS
├── package.json
└── .env                      # Frontend environment variables (API URL)
```

---


## Usage

### API Endpoints

| Method | Endpoint            | Description                                |
| ------ | ------------------- | ------------------------------------------ |
| POST   | /api/companies      | Create a new company                       |
| GET    | /api/companies      | Get all companies (supports query filters) |
| GET    | /api/companies/\:id | Get a single company by ID                 |
| PUT    | /api/companies/\:id | Update a company by ID                     |
| DELETE | /api/companies/\:id | Delete a company by ID                     |

### Query Filters for GET /api/companies

* `name` (partial match, case-insensitive)
* `industry`
* `location`
* `type` (Private, Public, Non-profit, Government)
* `minEmployees`
* `maxEmployees`
* `minRevenue`
* `maxRevenue`

---


## Technologies Used

* **Backend:** Node.js, Express, MongoDB, Mongoose
* **Frontend:** React, Axios, Bootstrap 5
