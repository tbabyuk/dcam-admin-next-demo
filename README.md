# Office Admin App (An app for office tasks and payroll tracking)

See it live: [Office Admin App](https://dcam-admin-next-demo.vercel.app/)

Login Credentials for demo:  <br>
Email: **demo@gmail.com**  
Pass: **demo123**

## Technologies
This project was made with:
* Next.js
* React & Node.js
* Tailwind CSS
* Firebase Auth
* Firebase Firestore
* MongoDB

## Short Description
A web app used by the admin team of a music school business with three main features:
1. Authentication
2. Tasks Manager / Planner
3. Teacher Hours & Pay Tracker

## Long Description
1. AUTHENTICATION  
Authentication was implemented with the help of Firebase Auth where each member of the admin team has their own login credentials. The UI is different depending on who the currently logged-in user is. For example, not all admin members are able to see the specific pay amount owed to each employee.

2. TASKS MANAGER / PLANNER  
This part of the app was implemented with React on the front end and Firebase Firestore for the database. It includes standard todo app functionality such as adding, deleting and editing tasks, but also allows users to color-code tasks according priority and move them to one of three columns: "to do tasks", "tasks in progress" and "completed tasks", according to their status.

3. TEACHER HOURS & PAY TRACKER  
This part of the app was done with React on the front end and Node.js + MongoDB on the back end. It allows admin to see at a glance which employees have submitted their work hours, the total pay owed to them, as well as detailed submission information and any notes in a modal table display. All the information is shown in a neatly-organized table.

## Background & Motivation
This was a practical project done for a small business. It began with the "Tasks Manager / Planner" first, and the "Teacher Hours & Pay Tracker" part was added later.

## State of Completion
Completed and actively being used by office admin. More improvements/features will be added going forward as per user feedback and business requirements.

## Learning Lessons & Challenges
### Working with two databases
This is one of a few projects where I am making use of two different databases. While I could have done the whole app with just a single database (either Firebase or MongoDB), I decided to use two as a challenge to myself and to get experience in case I ever need to deal with two databases in a more complex project. Also, Firebase was used only on the front end while I used MongoDB on the back end with the help of Route Handlers, so this added a bit more variety to the project, which I really enjoyed.

## Summary
This was a fun app the to make and I am looking forward to adding more features to it as per business requirements!




