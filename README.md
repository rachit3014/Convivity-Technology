# Convivity Technology

Develop a RESTful API using Node.js that allows users to manage tasks. The system should support creating, retrieving, updating, and deleting tasks.

## Table of Contents

1. [Introduction](#introduction)
2. [API Endpoints](#TestAPI)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [Backend API Endpoints](#backend-api-endpoints)


## Introduction
The system should support creating, retrieving, updating, and deleting tasks. Each task should have a title, description, creation date, and status (e.g., pending, in progress, completed).Include validation to check for invalid inputs (e.g., empty strings).Implemented error handling to manage different types of errors and return appropriate status codes and messages.


## API Endpoints:
- Create an endpoint to add a new task.
- Create an endpoint to retrieve all tasks.
- Create an endpoint to retrieve a single task by its ID.
- Create an endpoint to update a task by its ID.
- Create an endpoint to delete a task by its ID.


## Technologies Used

- Node.js
- Express.js
- MongoDB
- jest
- supertest


## Getting Started

### Backend Setup

```bash
# Clone the repository
git clone https://github.com/rachit3014/Convivity-Technology

# Navigate to the backend directory
cd Convivity Technology

# Install dependencies
npm install

# Setup .env file
In .env file firstly put your mongodb URL

# Start the backend server
npm start
```

## Backend API Endpoints
### 1. Create a Task

- **Url:** http://localhost:8000/create
- **Method:** POST

### 2. List of all task

- **Url:** http://localhost:8000/
- **Method:** GET


### 3. Task By its id

- **Url:** http://localhost:8000/task/6630a522796aa69651d408dc
- **Method:** GET
- **Parameters:**
  -  `id` : Task ID


### 4. Update Task by its id

- **Url**  http://localhost:8000/update/:id
- **Method:** Patch
- **Parameters:**
  -  `id` : Task ID

### 5. Delete Task by its id

- **Url** http://localhost:8000/delete/:id
- **Method:** Delete
- **Parameters:**
  - `id` : Task ID


## Test for API Endpoints

- Unit tests for the API endpoints to ensure they function correctly.
- Include integration tests that test the API endpoints with the database to ensure the system works as a whole.