# Uber Clone Backend

This is the backend for the Uber Clone project built using the MERN stack (MongoDB, Express, React, Node.js).

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/uber-clone.git
    ```
2. Navigate to the backend directory:
    ```sh
    cd uber-clone/Backend
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Create a `.env` file in the root of the backend directory and add the following:
    ```
    DB_CONNECT=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

### Running the Server

```sh
npm start
```

The server will start on port 4000 by default.

## API Documentation

### Registration

- **URL:** `/user/register`
- **Method:** `POST`
- **Body Parameters:**
  - `email` (string, required): User's email address.
  - `fullname.firstname` (string, required): User's first name.
  - `fullname.lastname` (string, optional): User's last name.
  - `password` (string, required): User's password.

- **Response:**
  - `201 Created`: User successfully registered.
  - `400 Bad Request`: Validation error or missing fields.

### Login

- **URL:** `/user/login`
- **Method:** `POST`
- **Body Parameters:**
  - `email` (string, required): User's email address.
  - `password` (string, required): User's password.

- **Response:**
  - `200 OK`: User successfully logged in.
  - `400 Bad Request`: Validation error or incorrect credentials.

### Profile

- **URL:** `/user/profile`
- **Method:** `GET`
- **Headers:**
  - `Authorization` (string, required): Bearer token.

- **Response:**
  - `200 OK`: User profile data.
  - `401 Unauthorized`: Invalid or missing token.

### Logout

- **URL:** `/user/logout`
- **Method:** `POST`
- **Headers:**
  - `Authorization` (string, required): Bearer token.

- **Response:**
  - `200 OK`: Logout successful.
  - `401 Unauthorized`: Invalid or missing token.

## Internal Implementation

### Directory Structure

```
/Backend
|-- /controllers
|-- /db
|-- /models
|-- /routes
|-- /services
|-- app.js
|-- server.js
|-- .env
```

### Controllers

The controllers handle the incoming HTTP requests and interact with the services to perform the required operations.

### Services

The services contain the business logic of the application. They interact with the models to perform database operations.

### Models

The models define the schema for the MongoDB collections and contain methods for interacting with the database.

### Routes

The routes define the endpoints for the API and map them to the corresponding controller methods.

### Database Connection

The database connection is established in the `db/db.js` file using Mongoose.

### Environment Variables

The environment variables are stored in the `.env` file and loaded using the `dotenv` package.

### Middleware

The application uses middleware for handling CORS, parsing JSON and URL-encoded data, and routing.

### Authentication

The application uses JWT for authentication. The `generateAuthToken` method in the user model generates a JWT token for the user.

### Password Hashing

The passwords are hashed using bcrypt before being stored in the database. The `hashPassword` method in the user model hashes the password, and the `comparePassword` method compares the hashed password with the provided password.

## How the Login and Register Routes Work

### Register Route

1. **Validation:** The route `/user/register` uses `express-validator` to validate the incoming request. It checks if the email is valid, the first name is at least 3 characters long, and the password is at least 6 characters long.
2. **Controller:** The request is then passed to the `registerUser` method in the `user.controllers.js` file.
3. **Service:** The controller calls the `createUser` method in the `user.services.js` file, which creates a new user in the database.
4. **Response:** If the user is successfully created, a `201 Created` response is returned. If there is a validation error or missing fields, a `400 Bad Request` response is returned.

### Login Route

1. **Validation:** The route `/user/login` uses `express-validator` to validate the incoming request. It checks if the email is valid and the password is at least 6 characters long.
2. **Controller:** The request is then passed to the `loginUser` method in the `user.controllers.js` file.
3. **Service:** The controller calls the `loginUser` method in the `user.services.js` file, which checks if the user exists and if the password is correct.
4. **Response:** If the user is successfully logged in, a `200 OK` response is returned with a JWT token. If there is a validation error or incorrect credentials, a `400 Bad Request` response is returned.
