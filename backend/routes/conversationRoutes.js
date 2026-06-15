const express = require("express");

const router = express.Router();

const {
    getConversations,
    getConversationById
}
=
require(
"../controllers/conversationController"
);

router.get(
"/",
getConversations
);

router.get(
"/:id",
getConversationById
);

module.exports = router;