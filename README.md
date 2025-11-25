# Skill_India
Full-stack e-learning platform project using MERN stack with Vite and Tailwind CSS for modern course delivery.

# 🇮🇳 Skill India E-Learning Platform

A full-stack, comprehensive e-learning platform project inspired by popular course delivery systems like Udemy, designed to showcase modern web development skills. This application allows users to browse courses, manage enrollments, and provides an admin interface for course creation and content delivery.

##  Features

* **User Authentication:** Secure login and registration for learners and instructors.
* **Course Catalog:** Browse and search a categorized library of courses.
* **Detailed Course Pages:** View curriculum, instructor details, ratings, and reviews.
* **Enrollment System:** User enrollment and progress tracking.
* **Admin/Instructor Panel:** Secure interface for creating, updating, and managing course content (CRUD operations).
* **Responsive Design:** Fully responsive layout using **Tailwind CSS** for seamless access on desktop and mobile devices.

##  Tech Stack

This project is built using the **MERN** stack, leveraging fast development and modern styling tools:

### Frontend
* **React:** JavaScript library for building the user interface.
* **Vite:** Next-generation frontend tooling for a super-fast development experience.
* **Tailwind CSS:** A utility-first CSS framework for rapid and custom styling.
* **JavaScript (ES6+)**
* **React Router:** For navigation and routing within the Single Page Application (SPA).

### Backend & Database
* **Node.js:** JavaScript runtime environment for the server.
* **Express.js:** Minimalist web framework for handling API routing and middleware.
* **MongoDB:** NoSQL database for flexible data storage (courses, users, enrollments).
* **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.

##  Getting Started

Follow these steps to set up the project locally.

### Prerequisites

* Node.js (LTS recommended)
* MongoDB (local instance or a cloud service like MongoDB Atlas)
* Git

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [YOUR-REPO-URL-HERE]
    cd skill_india
    ```

2.  **Setup the Server (`server` directory):**
    ```bash
    cd server
    npm install
    ```
    * **Create a `.env` file** in the `server` directory and add your environment variables:
        ```env
        PORT=5000
        MONGO_URI=[YOUR_MONGODB_CONNECTION_STRING]
        JWT_SECRET=[YOUR_SECURE_SECRET_KEY]
        ```
    ```bash
    npm start # Or 'npm run dev' if you set up nodemon
    ```

3.  **Setup the Client (`client` directory):**
    ```bash
    cd ../client
    npm install
    npm run dev
    ```

4.  **Access the Application:**
    * The backend will run on `http://localhost:5000` (or the port you set).
    * The frontend will run on a port provided by Vite, usually `http://localhost:5173`.

##  Contribution

This is a portfolio project, but feel free to fork the repository and explore the code!

##  License

This project is licensed under the MIT License - see the `LICENSE` file for details (If you plan to add one).

##  Contact

[Your Name] - [Your Email Address]

Project Link: [Your GitHub Repo URL]
