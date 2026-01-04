# TravelEase – Vehicle Booking & Trip Management Platform

![TravelEase Screenshot](https://i.ibb.co.com/fY0m16x2/traveleasess.png)

---

## About the Project

TravelEase is a full-stack vehicle booking web application that allows users to explore, add, update, and manage vehicles available for rent or travel purposes. Authenticated users can list their own vehicles, update trip details, manage bookings, and delete their listings.

The project showcases a complete MERN stack application integrated with Firebase Authentication, featuring a modern UI design and seamless user experience.

---

## Project Overview

- **Objective:**  
  To build a comprehensive vehicle booking and trip management platform that empowers users to manage vehicles and bookings efficiently with secure authentication.

- **Target Audience:**  
  Individuals and businesses looking to rent or list vehicles for travel or rental purposes.

- **Key Metrics:**  
  - Number of vehicle listings  
  - User registrations and bookings  
  - Vehicle availability and booking statuses  

- **Deployment:**  
  - Client hosted on Netlify  
  - Server hosted on Vercel  
  - Firebase Authentication used for user login and registration  

---

## Key Features

- Password validation enforcing strong password policies  
- Add, update, and delete vehicle listings (authenticated users only)  
- Browse all vehicles with sorting and filtering options  
- View detailed vehicle information with “Book Now” functionality  
- Manage personal vehicle listings and bookings  
- Protected private routes for sensitive pages  
- Dark/Light theme toggle  
- Integration of Framer Motion and date-fns for enhanced UI/UX and date management  

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, Framer Motion  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** Firebase Authentication (Email/Password and Google)  
- **API Calls:** Axios 
- **Deployment:** Netlify (client), Vercel (server)  

---

## Dependencies

- **Dependencies:**

  - `@tailwindcss/vite` ^4.1.17  
  - `axios` ^1.13.2  
  - `date-fns` ^4.1.0  
  - `firebase` ^12.5.0  
  - `framer-motion` ^12.23.24  
  - `react` ^19.1.1  
  - `react-dom` ^19.1.1  
  - `react-hot-toast` ^2.6.0  
  - `react-icons` ^5.5.0  
  - `react-router` ^7.9.5  
  - `react-toast` ^1.0.3  
  - `react-toastify` ^11.0.5  
  - `sweetalert2` ^11.26.3  
  - `swiper` ^12.0.3  
  - `tailwindcss` ^4.1.17  

- **Dev Dependencies:**

  - `@eslint/js` ^9.36.0  
  - `@types/react` ^19.1.16  
  - `@types/react-dom` ^19.1.9  
  - `@vitejs/plugin-react` ^5.0.4  
  - `daisyui` ^5.4.7  
  - `eslint` ^9.36.0  
  - `eslint-plugin-react-hooks` ^5.2.0  
  - `eslint-plugin-react-refresh` ^0.4.22  
  - `globals` ^16.4.0  
  - `vite` ^7.1.7  

---

## Installation

Install the project dependencies for both server and client:

```bash
# Clone the repository
git clone https://github.com/SadiaAhmedBushra/b12-a09-green-nest.git
cd b12-a09-green-nest

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
````
  
## After Installation

Follow these steps to run the project locally:

```bash
# Start the backend server
cd server
npm run dev

```
Start the frontend client
```bash
cd client
npm start
```
Then open your browser and visit:
http://localhost:3000

## Live Demo: https://travelease-client.netlify.app/

