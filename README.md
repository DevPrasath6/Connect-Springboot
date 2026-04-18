# Connect

## 📖 Description
A full-stack Connect app built using React (frontend) and Spring Boot (backend). Features include user authentication, posting images, liking, commenting, and viewing posts.

## 🚀 Features

1. 🔐 User authentication (Sign up, Log in)
2. 📸 Post images with captions
3. ❤️ Like and comment on posts
4. 👤 User profiles with posts
5. 📰 Feed showing all posts

## 🏗️ Technologies

- **Frontend:** React, Redux, Axios
- **Backend:** Spring Boot, Spring Security, PostgreSQL, JPA/Hibernate
- **Image Storage:** Cloudinary or AWS S3

## 🛠️ Installation

### Backend (Spring Boot)
1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/connect-backend.git
   ```
2. Set up MySQL database and update `application.properties`.
3. Run the backend:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

### Frontend (React)
1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/connect-frontend.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm start
   ```

## 📌 Usage
- Visit the app at [http://localhost:3000](http://localhost:3000) (frontend) and [http://localhost:8080](http://localhost:8080) (backend).

## 📜 License
This project is licensed under the MIT License.
