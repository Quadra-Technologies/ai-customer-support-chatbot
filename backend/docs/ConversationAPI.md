# Conversation API

## GET /api/conversations

Returns all conversations.

### Example Response

[
{
"_id": "6a2edf5bde55b90b59f1b874",
"userMessage": "I need pricing details",
"aiResponse": "Welcome to Quadra Events...",
"timestamp": "2026-06-14T17:05:31.192Z"
}
]

---

## GET /api/conversations/:id

Returns conversation by ID.

### Example

GET /api/conversations/6a2edf5bde55b90b59f1b874

### Example Response

{
"_id": "6a2edf5bde55b90b59f1b874",
"userMessage": "I need pricing details",
"aiResponse": "Welcome to Quadra Events...",
"timestamp": "2026-06-14T17:05:31.192Z"
}
