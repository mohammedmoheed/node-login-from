# Login Form Node.js App

This is a simple Node.js application that implements a login form with user registration using Express.js, MongoDB, and JWT authentication.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (Ensure you have MongoDB installed and running)

### Installation

1. Clone the repository or download the source code.

```bash
git clone https://github.com/mohammedmoheed/node-login-from.git
```

2. Navigate to the project directory.

```bash
cd login-form-node-app
```

3. Install the dependencies.

```bash
npm install
```

### Configuration

1. Create a `.env` file in the project root and add the following environment variables:

```palintext
MONGO_URI=your_mongodb_uri_here
JWT_SECRET=your_jwt_secret_here

```

Replace `your_mongodb_uri_here` with your MongoDB connection URI, and `your_jwt_secret_here` with a secret key for JWT token generation.

### Usage

1. Start the application.

2. Open your web browser and visit `http://localhost:3000` to access the login form.

## Features

- User registration with encrypted password storage using bcrypt.
- User login with JWT authentication.
- JWT-based authentication middleware to protect routes.
- Basic error handling and validation for form inputs.

## Built With

- Node.js
- Express.js
- MongoDB (mongoose)
- JWT (jsonwebtoken)
- Bcrypt

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JSON Web Tokens (JWT)](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
