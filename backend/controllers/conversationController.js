const Conversation = require("../models/Conversation");

const getConversations = async (req, res) => {

    try {

        const conversations =
        await Conversation.find()
        .sort({ createdAt: -1 });

        res.status(200).json(conversations);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const getConversationById =
async (req, res) => {

    try {

        const conversation =
        await Conversation.findById(
            req.params.id
        );

        if (!conversation) {

            return res.status(404).json({
                message: "Conversation not found"
            });

        }

        res.status(200).json(conversation);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    getConversations,
    getConversationById
};