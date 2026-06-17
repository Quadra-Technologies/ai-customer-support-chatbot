# Database Schema

## Users

```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "role": "string"
}
```

---

## Leads

```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "requirement": "string",
  "status": "string",
  "createdAt": "date"
}
```

---

## Conversations

```json
{
  "userMessage": "string",
  "aiResponse": "string",
  "timestamp": "date"
}
```

---

## FAQs

```json
{
  "question": "string",
  "answer": "string",
  "category": "string"
}
```
