# API Documentation

## Authentication

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

---

## Leads API

### POST /api/leads

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

Response

```json
{
  "success": true,
  "count": 12,
  "data": []
}
```

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

---

## Conversations API

### GET /api/conversations

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

---

## Status Codes

### 200 OK

Request completed successfully.

### 201 Created

Resource created successfully.

### 400 Bad Request

Invalid request data.

### 401 Unauthorized

Authentication failed.

### 404 Not Found

Requested resource not found.

### 500 Internal Server Error

Unexpected server error.
