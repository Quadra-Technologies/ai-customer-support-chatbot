# Backend API Testing Checklist

## Authentication

[x] Login Success

[ ] Invalid Password

[ ] Invalid Token

---

## Leads

[x] Create Lead

[x] Get Leads

[ ] Update Lead

[ ] Delete Lead

---

## Chat

[x] Gemini Response

[ ] Empty Message Validation

---

## Analytics

[x] Total Leads

[x] Total Chats

---

## Conversations

[x] Retrieve History

---

## Database

[x] Data Saved

[ ] Data Updated

[ ] Data Deleted

---

## Deployment Verification

[x] Backend Deployed on Render

[x] MongoDB Atlas Connected

[x] API Base URL Accessible

[x] Production APIs Responding

---

## Tested Endpoints

### Authentication

POST /api/auth/login

Status: PASSED

### Leads

POST /api/leads

Status: PASSED

GET /api/leads

Status: PASSED

### Chat

POST /api/chat

Status: PASSED

### Analytics

GET /api/analytics

Status: PASSED

### Conversations

GET /api/conversations

Status: PASSED

---

## Deployment Details

Production URL:

https://ai-customer-support-chatbot-0hlz.onrender.com

API Base URL:

https://ai-customer-support-chatbot-0hlz.onrender.com/api

---

## Testing Summary

Completed Tests:
- JWT Login
- Lead Creation
- Lead Retrieval
- Chat API
- Analytics API
- Conversations API
- MongoDB Data Storage
- Render Deployment Verification

Pending Tests:
- Invalid Password
- Invalid Token
- Lead Update
- Lead Delete
- Empty Message Validation
- Data Update Verification
- Data Delete Verification

Last Updated: 16-06-2026