# Backend README

## Project

AI Customer Support Chatbot Backend

## Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* Google Gemini API

---

# Backend Setup

Install dependencies:

```bash
npm install
```

---

# Run

Development:

```bash
npm run dev
```

Production:

```bash
node server.js
```

---

# Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key
```

---

## API Base URL

### Local

```text
http://localhost:5000/api
```

### Production

```text
https://ai-customer-support-chatbot-0hlz.onrender.com/api
```

---

## Available Modules

* Authentication API
* Leads API
* Chat API
* Conversations API
* Analytics API

---

## Deployment

### Platform

Render

### Database

MongoDB Atlas
