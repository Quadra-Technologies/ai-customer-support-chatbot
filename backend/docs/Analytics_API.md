# Analytics API

## GET /api/analytics

Returns analytics data for the Admin Dashboard.

### Response

```json
{
  "success": true,
  "totalLeads": 0,
  "totalChats": 5,
  "todayLeads": 0,
  "todayChats": 1,
  "conversionRate": 0,
  "statusDistribution": []
}
```

### Fields

| Field              | Description                           |
| ------------------ | ------------------------------------- |
| totalLeads         | Total number of leads                 |
| totalChats         | Total number of conversations         |
| todayLeads         | Leads created today                   |
| todayChats         | Conversations created today           |
| conversionRate     | Percentage of leads with status "Won" |
| statusDistribution | Lead count grouped by status          |

### Example Status Distribution

```json
{
  "statusDistribution": [
    {
      "_id": "New",
      "count": 5
    },
    {
      "_id": "Won",
      "count": 2
    }
  ]
}
```
