# API Documentation

## Authentication API

### POST /api/auth/login

Request

```json
{
  "email": "admin@gmail.com",
  "password": "123456"
}
```

Response

```json
{
  "message": "Login Successful",
  "token": "JWT_TOKEN"
}
```

Status Codes

* 200 OK
* 401 Unauthorized
* 500 Internal Server Error

---

## Lead APIs

### POST /api/leads

Create a new lead.

Request

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "phone": "9999999999",
  "requirement": "Need chatbot"
}
```

Response

```json
{
  "success": true,
  "message": "Lead created successfully"
}
```

### GET /api/leads

Fetch all leads.

### PUT /api/leads/:id

Update lead details.

### DELETE /api/leads/:id

Delete a lead.

Status Codes

* 200 OK
* 201 Created
* 404 Not Found
* 500 Internal Server Error

---

## Chat API

### POST /api/chat

Request

```json
{
  "message": "What services do you provide?"
}
```

Response

```json
{
  "success": true,
  "reply": "Welcome to Quadra Events. We provide wedding planning, birthday events, corporate events, catering, decor and venue management. Please share your requirements."
}
```

Status Codes

* 200 OK
* 500 Internal Server Error

---

## Analytics API

### GET /api/analytics

Response

```json
{
  "success": true,
  "totalLeads": 13,
  "totalChats": 8,
  "todayLeads": 5,
  "todayChats": 1,
  "conversionRate": "0.00",
  "statusDistribution": []
}
```

Status Codes

* 200 OK
* 500 Internal Server Error

---

## Conversations API

### GET /api/conversations

Fetch all conversations.

Response

```json
[
  {
    "_id": "conversation_id",
    "userMessage": "What services do you provide?",
    "aiResponse": "Welcome to Quadra Events...",
    "timestamp": "2026-06-17T07:12:46.675Z"
  }
]
```

### GET /api/conversations/:id

Fetch a conversation by ID.

Status Codes

* 200 OK
* 404 Not Found
* 500 Internal Server Error
