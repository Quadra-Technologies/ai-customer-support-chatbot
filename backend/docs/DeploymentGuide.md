# Deployment Guide

## 1. MongoDB Atlas Setup

### Create Production Project

* Login to MongoDB Atlas
* Create Project: Quadra-Production
* Create Free Tier Cluster
* Provider: AWS
* Region: Mumbai (ap-south-1)

### Create Database User

* Navigate to Database Access
* Click Add Database User
* Username: quadra_admin
* Assign Read and Write to Any Database permissions
* Save credentials securely

### Configure Network Access

* Navigate to Network Access
* Click Add IP Address
* Allow Access From Anywhere
* Value: 0.0.0.0/0

### Get Connection String

* Click Connect
* Select Drivers
* Choose Node.js
* Copy MongoDB URI

Example:

MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/?retryWrites=true&w=majority

---

## 2. Render Setup

### Create Render Account

* Login using GitHub
* Connect GitHub account

### Create Web Service

* Click New
* Select Web Service
* Connect repository:
  ai-customer-support-chatbot

### Service Configuration

Name:
quadra-backend

Branch:
feature/backend-deployment

Root Directory:
backend

Build Command:
npm install

Start Command:
npm start

---

## 3. Environment Variables

Configure the following variables in Render:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

NODE_ENV=production

---

## 4. Production URL

Backend URL:

https://quadra-backend-a6jg.onrender.com

---

## 5. Testing Steps

### Authentication

POST /api/auth/register

POST /api/auth/login

Verify:

* User Registration
* JWT Token Generation

### Leads

POST /api/leads

GET /api/leads

PUT /api/leads/:id

DELETE /api/leads/:id

Verify:

* Lead Creation
* Lead Update
* Lead Deletion

### Chat

POST /api/chat

Verify:

* AI Response
* Conversation Saved

### Conversations

GET /api/conversations

Verify:

* Conversation History Returned

### Analytics

GET /api/analytics

Verify:

* Total Leads
* Total Chats
* Status Distribution

---

## Deployment Verification Checklist

* [ ] MongoDB Connected
* [ ] Render Deployment Successful
* [ ] Environment Variables Configured
* [ ] Authentication Working
* [ ] Lead APIs Working
* [ ] Chat API Working
* [ ] Conversations API Working
* [ ] Analytics API Working
* [ ] Production URL Accessible

Deployment Status: Completed
