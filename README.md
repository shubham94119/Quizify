Quizify is a robust and user-friendly quiz application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). 
It offers full CRUD functionality with secure JWT-based authentication. Designed for both admins and users, Quizzy simplifies quiz creation, 
management, and participation, making it perfect for interactive learning and assessment.

Features

Admin Features
Secure Login: Admin authentication with error handling for invalid credentials and automatic redirection to the dashboard upon successful login.
Quiz Management: Create, update, and delete quizzes. Each quiz includes a title, an optional description, and a timer.
Question Management: Manage multiple-choice questions by adding, editing, or deleting them for each quiz.
Score Monitoring: View scores of all users or filter scores for a specific quiz.
Dashboard Insights: A comprehensive admin dashboard displaying key data.

User Features
Browse Quizzes: Explore all quizzes available in the application.
Quiz Participation: Attempt quizzes that have not yet been taken, with clear notifications for already attempted quizzes.
Score Review: Instantly view scores after completing a quiz.
Attempt History: Access a detailed history of previously attempted quizzes and scores.
User Dashboard: View relevant data on a personalized user dashboard.

Tech Stack
Frontend: React.js
Backend: Node.js with Express.js
Database: MongoDB
Authentication: JSON Web Token (JWT)
Installation Guide
Prerequisites
Ensure you have the following installed on your system:

Node.js
MongoDB
Backend Setup
Navigate to the backend folder.
Run the following commands:

npm install
npm run dev
Frontend Setup
Navigate to the frontend folder.
Run the following commands:

npm install
npm run dev
The application will now run locally with the frontend accessible at http://localhost:5173 and the backend at http://localhost:3000.

API Endpoints
Authentication
POST /api/auth/register: Register a new user.
POST /api/auth/login: Authenticate admin or user and receive a JWT token.
Admin Endpoints
GET /api/admin/quizzes: Retrieve all quizzes.
POST /api/admin/quizzes: Create a new quiz.
PUT /api/admin/quizzes/:id: Update an existing quiz.
DELETE /api/admin/quizzes/:id: Delete a specific quiz.
GET /api/admin/quizzes/:id/questions: Retrieve all questions for a specific quiz.
POST /api/admin/quizzes/:id/questions: Add a new question to a quiz.
PUT /api/admin/questions/:id: Update a specific question.
DELETE /api/admin/questions/:id: Remove a specific question.
GET /api/admin/scores: Retrieve scores of all users or filter scores for a particular quiz.
User Endpoints
GET /api/quizzes: Fetch all available quizzes.
POST /api/quizzes/:id/attempt: Submit answers for a quiz attempt.
GET /api/users/:id/attempts: Retrieve all quiz attempts by a user.
