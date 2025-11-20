# 📝 Blog Application

**Modern, Secure, and Feature-Rich Blogging Platform**

---

## 🌟 Overview

This project is a full-stack web application designed to serve as a complete blogging platform. It allows users to create, read, update, and delete their own blog posts. The application features robust **authentication and authorization** using **JSON Web Tokens (JWT)** to ensure secure user accounts and protected routes. The views are dynamically rendered on the server using **EJS**.

---

## ✨ Key Features

### Security & Authentication
* **User Registration (`/signup`):** Securely create new accounts.
* **User Login (`/signin`):** Authenticate users and issue a JWT.
* **JWT Authentication:** All protected routes require a valid JWT passed in the request header.
* **Authorization:** Users can only modify or delete their own posts.
* **Password Hashing:** Passwords are securely stored using a robust hashing algorithm (**Password hashing with Salt**).

### Blog Functionality (CRUD)
* **Create Posts:** Logged-in users can write and publish new blog posts.
* **Read Posts:** View all blog posts (publicly accessible) and individual post details.
* **Update Posts:** Authors can edit their existing blog posts.
* **Delete Posts:** Authors can remove their published posts.
* **Draft Feature:** Functionality to save posts as drafts before publishing (if implemented).

### What Else Is There?
* **User Profiles:** Dedicated pages for users to view their post history.
* **Category/Tagging System:** Organize posts for better navigation and searchability.
* **Search Functionality:** Ability to search posts by title, content, or author.
* **Responsive Design:** Optimized for desktop, tablet, and mobile devices.

---

## 🛠️ Technologies Used

This project is structured using a standard full-stack architecture, often referred to as the **MongoDB, Express, EJS, Node.js (MEEN)** stack.

### Backend (API Server & Rendering)
* **Node.js:** JavaScript runtime environment.
* **Express.js:** Web application framework for Node.js.
* **MongoDB:** NoSQL database for data persistence.
* **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
* **JSON Web Token (JWT):** For secure authentication and authorization.
* **Bcrypt.js:** For hashing user passwords securely using a salt.

### Frontend (View Engine)
* **EJS (Embedded JavaScript Templating):** Used as the templating engine to dynamically render HTML views on the server.
* **HTML/CSS/JavaScript (Client-side):** Standard web technologies for structure, styling, and basic client interactions.
* **Styling:** (e.g., Tailwind CSS, Bootstrap, or custom CSS).

---

## ⚙️ Installation and Setup

Follow these steps to get a local copy of the project up and running.

### Prerequisites
You need to have the following installed on your machine:
* [Node.js](https://nodejs.org/) (which includes npm)
* [MongoDB](https://www.mongodb.com/try/download/community) (either local installation or a cloud service like MongoDB Atlas)

### 1. Clone the Repository

```bash
git clone [https://github.com/Gyan-Aditya/Blog.git](https://github.com/Gyan-Aditya/Blog.git)
cd Blog
```

## ⚙️ Installation and Setup (Continued)

### 2. Backend Setup (`/server`)

The backend (API) is typically located in a directory like `server/`, `backend/`, or at the root of the project.

```bash
# Navigate to the backend directory
cd server 
# Install dependencies
npm install
```

**Configuration:**
Create a **`.env`** file in the backend directory and add the following environment variables. These are crucial for connecting to the database and ensuring security.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=a_very_secret_key_for_jwt
```

**Run the Backend**

```bash
npm start
# or for development with live reload:
npm run dev
```
The backend server should now be running at http://localhost:5000.

## 🚀 API Endpoints Overview

The following are the core API routes for the backend:

| Method | Endpoint | Description | Authentication Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/signup` | Register a new user. | No |
| `POST` | `/api/auth/signin` | Log in and receive a JWT. | No |
| `GET` | `/api/posts` | Fetch all published blog posts. | No |
| `GET` | `/api/posts/:id` | Fetch a single blog post by ID. | No |
| `POST` | `/api/posts` | Create a new blog post. | **Yes** (User) |
| `PUT` | `/api/posts/:id` | Update a specific blog post. | **Yes** (Author) |
| `DELETE` | `/api/posts/:id` | Delete a specific blog post. | **Yes** (Author) |

## 🤝 Contributing

Contributions are always welcome! To contribute:

1. **Fork the repository**

2. **Create a new feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add some AmazingFeature"
   ```
4. **Push to your branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**
