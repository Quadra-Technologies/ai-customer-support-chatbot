# API Documentation

## Authentication API

### POST /api/auth/login

Request

json
{
  "email": "admin@gmail.com",
  "password": "123456"
}


Response

json
{
  "token": "JWT_TOKEN"
}


Status Codes

* 200 OK
* 401 Unauthorized
* 500 Internal Server Error



## Lead APIs

### POST /api/leads

Create a new lead.

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



## Chat API

### POST /api/chat

Request

json
{
  "message": "What services do you provide?"
}


Response

json
{
  "reply": "..."
}


Status Codes

* 200 OK
* 500 Internal Server Error



## Analytics API

### GET /api/analytics

Response

json
{
  "totalLeads": 0,
  "totalChats": 0
}


Status Codes

* 200 OK
* 500 Internal Server Error



## Conversations API

### GET /api/conversations

Fetch all conversations.

### GET /api/conversations/:id

Fetch a conversation by ID.

Status Codes

* 200 OK
* 404 Not Found
* 500 Internal Server Error



