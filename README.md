# CruiseBookingSystem

# Cruise Booking System

Welcome to the Cruise Booking System API! This backend system allows users to manage boat bookings, users, and boat details. It is built using **Express**, **MongoDB (Mongoose)**, and other modern JavaScript technologies.

## Table of Contents

- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [API Endpoints](#api-endpoints)
- [Start the Server](#start-the-server)
- [Technologies Used](#technologies-used)

---

## Installation

To get started with the Cruise Booking System API, clone the repository to your local machine:

```bash
git clone https://github.com/dhiraj7kr/cruiseBookingSystem.git
cd cruiseBookingSystem
```

Then, install the necessary dependencies:

```bash
npm install
```

## Environment Setup

The system uses environment variables for sensitive data like the database URL and API keys. Create a `.env` file in the root directory and add the necessary configuration values:

```
MONGO_URI=<Your MongoDB Connection URI>
PORT=5000
```

Make sure to replace `<Your MongoDB Connection URI>` with your actual MongoDB connection string.

## API Endpoints

The API provides several endpoints to manage boats, users, and bookings:

### Boats
- **POST** `/api/boats`  
  Adds a new boat to the system.
  
- **GET** `/api/boats`  
  Retrieves a list of all available boats.

### Users
- **POST** `/api/users`  
  Adds a new user to the system.
  
- **GET** `/api/users`  
  Retrieves a list of all registered users.

### Bookings
- **GET** `/api/bookings`  
  Retrieves a list of all bookings.
  
- **POST** `/api/bookings`  
  Creates a new booking for a user and boat.

---

## Start the Server

Once you've set up your environment and installed dependencies, you can start the server:

```bash
npm run start
```

By default, the server will run on port `5000`. You should see a message indicating that the server is running:

```
🚀 Server running on port 5000
```

---

## Technologies Used

- **Node.js**
- **Express**: Web framework for building the API.
- **MongoDB & Mongoose**: For database operations and modeling.
- **CORS**: For enabling cross-origin requests.
- **dotenv**: For environment variable management.

---

If you have any questions or need further assistance, feel free to open an issue or reach out to us. Happy cruising! 🚢

--- 

Hope this README serves your project well!
