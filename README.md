
# Blogging Platform

## Overview

This project is a full-stack blogging platform built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to register, log in, create blog posts, update them, and delete them. The project includes user authentication with JWT (JSON Web Tokens) and implements CORS to allow communication between the frontend and backend.

## Features

- User Authentication (Register, Login)
- Create, Read, Update, Delete (CRUD) Blog Posts
- JWT Authentication for protected routes
- MongoDB for data storage
- Express.js for the backend framework
- React.js for the frontend framework

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- React.js
- JWT (JSON Web Tokens)
- bcrypt
- dotenv

## Installation

### Prerequisites

- Node.js
- MongoDB (Atlas or local installation)
- npm (Node Package Manager)

### Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/yourrepository.git
```

2. Navigate to the backend directory:

```bash
cd yourrepository/backend
```

3. Install the dependencies:

```bash
npm install
```

4. Create a `.env` file in the `backend` directory and add the following environment variables:

```
MONGO_URL="your_mongodb_connection_string"
PORT="5000"
SECRET="your_secret_key"
```

5. Start the backend server:

```bash
npm start
```

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd yourrepository/frontend
```

2. Install the dependencies:

```bash
npm install
```

3. Start the frontend development server:

```bash
npm start
```

## Usage

### API Endpoints

#### User Authentication

- **POST /api/register** - Register a new user.
- **POST /api/login** - Authenticate a user and return a JWT.

#### Blog Posts

- **GET /api/posts** - Retrieve all blog posts.
- **GET /api/posts/:id** - Retrieve a single blog post by ID.
- **POST /api/posts** - Create a new blog post (protected).
- **PUT /api/posts/:id** - Update a blog post by ID (protected).
- **DELETE /api/posts/:id** - Delete a blog post by ID (protected).

### Testing API Endpoints with Postman

1. Register a new user via `POST /api/register` with a JSON body:

```json
{
    "username": "yourusername",
    "password": "yourpassword"
}
```

2. Log in via `POST /api/login` with a JSON body:

```json
{
    "username": "yourusername",
    "password": "yourpassword"
}
```

Copy the returned token.

3. Create a new blog post via `POST /api/posts` with a JSON body and the token in the headers:

Headers:

```
Authorization: Bearer <your_jwt_token>
```

Body:

```json
{
    "title": "Your Post Title",
    "content": "Your post content",
    "author": "your_user_id"
}
```

### Middleware

Use middleware to handle JWT authentication. Protect routes that require authentication.

### Handle CORS

Add the following CORS handling in your `index.js` file:

```javascript
const cors = require('cors');
app.use(cors());
```

## License

This project is licensed under the MIT License.

---

Feel free to modify the `README.md` as per your project's specifics.
