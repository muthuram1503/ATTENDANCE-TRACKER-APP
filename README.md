🧑‍💻 Attendance Tracking System

📌 Overview
The Attendance Tracking System is a full-stack web-based application designed 
for educational institutions to manage subjects, students, and attendance efficiently.
Each subject dynamically creates its own student and attendance collections 
in MongoDB (e.g., student{subjectId}, attendance{subjectId}), ensuring organized 
and scalable data management.It provides a clean, responsive dashboard where admins 
can add subjects, enroll students, mark attendance, and view reports — all with authentication 
and secure backend integration.

🚀 Features

📚 Subject Management
-->Admins can add new subjects with details such as subject name, department, and year.
-->Each subject automatically creates dynamic collections for students and attendance in MongoDB.

🧑‍🎓 Student Management
-->Allows adding, updating, viewing, and deleting students under specific subjects.
-->Student data is stored in collections like student{subjectId}.
-->Email and phone validation included for accurate records.

🕒 Attendance Tracking
-->Each subject has its own attendance collection (attendance{subjectId}).
-->Teachers/admins can mark daily attendance for every student.
-->Attendance records are stored by date, subject, and student ID.
-->Supports month-wise and date-wise attendance views.

🔐 Authentication (Kinde Auth)
-->Integrated Kinde Auth for secure login/logout.
-->Only authenticated users can access the dashboard and manage attendance.

💾 Dynamic Data Handling
-->MongoDB dynamic collections enable scalable, subject-wise data management.
-->Separate collections prevent data overlap between subjects or departments.

📊 Dashboard Overview
-->Interactive UI to manage subjects, students, and attendance.
-->Simplified navigation with Next.js dynamic routing.
-->Admins can easily switch between subjects to view or update attendance.

☁️ Deployment
-->Frontend: Next.js hosted on Render (Static Site).
-->Backend: Node.js + Express API hosted as a Render Web Service.
-->Fully deployed and connected via environment variables for secure API calls.

🧠 Tech Stack
| Layer          | Technology                      |
| -------------- | ------------------------------- |
| Frontend       | Next.js, React.js, Tailwind CSS |
| Backend        | Node.js, Express.js             |
| Database       | MongoDB (Dynamic Collections)   |
| Authentication | Kinde Auth                      |
| Deployment     | Render                          |

⚙️ Installation & Setup
1️⃣ Clone the Repository:
git clone https://github.com/yourusername/attendance-tracker.git
cd attendance-tracker

2️⃣ Install Dependencies:
For Backend:
cd backend
npm install

For Frontend:
cd frontend
npm install

3️⃣ Setup Environment Variables:
Create a .env file inside your backend folder:
cd backend
touch .env

Then add your environment details:
MONGO_URI=your_mongodb_connection_string
KINDE_ISSUER_URL=https://yourproject.kinde.com
KINDE_CLIENT_ID=your_kinde_client_id
KINDE_CLIENT_SECRET=your_kinde_client_secret
BASE_URL=https://your_frontend_url

4️⃣ Run the Application
🖥 Backend:
cd backend
npm start

💻 Frontend:
cd frontend
npm run dev

🧩 Project Workflow
1)Admin Login:
The admin logs in securely using Kinde Auth.

2)Add Subject:
When a subject is added, backend automatically creates dynamic MongoDB collections:
student{subjectId}
attendance{subjectId}

3)Add Students:
Admin can add students for each subject; data is stored in student{subjectId}.

4)Mark Attendance:
Admin marks attendance for a selected subject; records are saved in attendance{subjectId}.

5)View Attendance:
Attendance can be filtered by date or month, and viewed directly in the dashboard.

