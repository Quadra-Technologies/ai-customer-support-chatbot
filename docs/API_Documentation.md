# API Documentation

## Base URL

/api/v1

---

# Authentication APIs

## POST /auth/login

Description:
Admin login

Request:

{
"email": "[admin@example.com](mailto:admin@example.com)",
"password": "password"
}

Response:

{
"token": "jwt_token"
}

---

# Chat APIs

## POST /chat

Description:
Send user message to AI

Request:

{
"message": "Tell me about your services"
}

Response:

{
"reply": "We provide AI Automation and Web Development services."
}

---

# Lead APIs

## POST /lead

Description:
Store lead information

Request:

{
"name": "John",
"email": "[john@example.com](mailto:john@example.com)",
"phone": "9876543210",
"requirement": "Need a website"
}

Response:

{
"message": "Lead saved successfully"
}

---

## GET /leads

Description:
Get all leads

Response:

[
{
"name": "John",
"email": "[john@example.com](mailto:john@example.com)"
}
]

---

# Analytics APIs

## GET /analytics

Description:
Get dashboard analytics

Response:

{
"totalLeads": 50,
"totalConversations": 120
}

---

# Conversation APIs

## GET /conversations

Description:
Get conversation history

Response:

[
{
"user": "John",
"messages": []
}
]
}
