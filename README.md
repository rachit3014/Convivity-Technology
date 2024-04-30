# Convivity Technology

Develop a RESTful API using Node.js that allows users to manage tasks. The system should support creating, retrieving, updating, and deleting tasks.

## Table of Contents

1. [Introduction](#introduction)
2. [API Endpoints](#api-endpoints)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [Backend API Endpoints](#backend-api-endpoints)
6. [Test for API Endpoints](#test-for-api-endpoints)

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
- **Body:** In the body we have to pass
  - **title:** Please input title of your task
  - **description:** Please input description of your task
  - **status:** Please enter valid status e.g. completed, pending, in progress 

![Screenshot (302)](https://github.com/rachit3014/Convivity-Technology/assets/84663169/46c90cab-20d0-4cae-bf44-2484550b6268)

### 2. List of all task

- **Url:** http://localhost:8000/
- **Method:** GET

![Screenshot (305)](https://github.com/rachit3014/Convivity-Technology/assets/84663169/1ad5865a-1d5d-44b0-b13a-3bbabb1cb2c2)


### 3. Task By its id

- **Url:** http://localhost:8000/task/6630a522796aa69651d408dc
- **Method:** GET
- **Parameters:**
  -  `id` : Task ID

![Screenshot (303)](https://github.com/rachit3014/Convivity-Technology/assets/84663169/1fe0ab77-6d9c-45b7-817b-ba1ba1721a76)


### 4. Update Task by its id

- **Url**  http://localhost:8000/update/:id
- **Method:** Patch
- **Parameters:**
  -  `id` : Task ID
- **Body:** In the body we have to pass
  - **status:** Please enter valid status e.g. completed, pending, in progress

  ![Screenshot (304)](https://github.com/rachit3014/Convivity-Technology/assets/84663169/539049c3-3966-465e-a5f5-a100043a5885)


### 5. Delete Task by its id

- **Url** http://localhost:8000/delete/:id
- **Method:** Delete
- **Parameters:**
  - `id` : Task ID

![Screenshot (306)](https://github.com/rachit3014/Convivity-Technology/assets/84663169/8ca73636-3e83-4a28-89b5-7695dbbb6ffd)


## Test for API Endpoints

- Unit tests for the API endpoints to ensure they function correctly.
- Include integration tests that test the API endpoints with the database to ensure the system works as a whole.

  ![Screenshot (307)](https://github.com/rachit3014/Convivity-Technology/assets/84663169/abfdf1fe-07a3-47d2-a04b-533b1b28ac03)

```bash
# Start the test
npm run test
```
