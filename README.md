# CodersCampus Chat API

This is a back end for [CodersCampus Chat App](https://github.com/CodersCampus/ChatApp)

## Overview

This repository contains the backend API for a modern and scalable chat application. The API is built using NodeJS, Express, Mongoose, WebSockets, and JWT for authentication. It provides a robust foundation for developing real-time chat features in your application.

## Features

    - Real-time chat functionality
    - User authentication using JWT
    - MongoDB integration with Mongoose
    - WebSocket support for instant messaging
    - Scalable and modular project structure

## Tech Stack
    - NodeJS: JavaScript runtime for server-side development.
    - Express: Fast, unopinionated, minimalist web framework for Node.js.
    - Mongoose: Elegant MongoDB object modeling for Node.js.
    - WebSockets: For real-time, bidirectional communication between clients and server.
    - JWT: JSON Web Tokens for user authentication.

## Running the Application

To run the application locally, follow these steps:

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

```bash
# Clone the repository
git clone git@github.com:CodersCampus/ClientWiseAPI.git or
git clone https://github.com/CodersCampus/ClientWiseAPI.git

# Navigate to the project directory
cd ClientWiseAPI

# Install dependencies
npm install

# Run the app
nodemon index.js or
node index.js
```

## Dependencies (Versions)
    "bcryptjs": "^2.4.3",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.0.1",
    "ws": "^8.14.2"
