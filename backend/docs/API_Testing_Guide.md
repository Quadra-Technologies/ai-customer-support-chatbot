# API Testing Guide

## Base URL

Production:

https://ai-customer-support-chatbot-0hlz.onrender.com

---

## Analytics API

### GET /api/analytics

Request:

GET /api/analytics

Response:

{
"success": true,
"totalLeads": 0,
"totalChats": 5,
"todayLeads": 0,
"todayChats": 1,
"conversionRate": 0,
"statusDistribution": []
}

---

## Conversations API

### GET /api/conversations

Returns all conversations.

### GET /api/conversations/:id

Returns a single conversation by ID.

---

## Leads API

### GET /api/leads

Returns all leads.

### POST /api/leads

Creates a new lead.

---

## Chat API

### POST /api/chat

Request:

{
"message": "Hello"
}

Response:

{
"reply": "AI response"
}
