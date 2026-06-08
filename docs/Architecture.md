# Architecture Document

## System Architecture

The application follows a three-tier architecture:

Frontend
↓
Backend API
↓
Database & AI Services

---

# Frontend Layer

Technology:

* React
* Tailwind CSS

Responsibilities:

* Landing Page
* Chat Interface
* Admin Dashboard
* Analytics Dashboard
* Authentication Pages

---

# Backend Layer

Technology:

* Node.js
* Express.js

Responsibilities:

* Authentication
* Business Logic
* Lead Management
* Conversation Management
* Analytics APIs
* Gemini Integration

---

# Database Layer

Technology:

* MongoDB Atlas

Collections:

## Users

* id
* name
* email
* password
* role

---

## Leads

* id
* name
* email
* phone
* requirement
* status
* createdAt

---

## Conversations

* id
* messages
* userId
* createdAt

---

## FAQs

* question
* answer
* category

---

# AI Layer

Technology:

* Gemini API

Responsibilities:

* Answer customer questions
* Generate responses
* Assist in lead capture

---

# Deployment Architecture

Frontend:
Vercel

Backend:
Render

Database:
MongoDB Atlas

AI:
Gemini API

---

# Folder Structure

frontend/
backend/
docs/
deployment/

README.md
