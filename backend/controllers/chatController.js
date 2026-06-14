const Conversation = require("../models/Conversation");

exports.chat = async (req, res) => {
    try {

        const { message } = req.body;

        const reply =
            "Welcome to Quadra Events. We provide wedding planning, birthday events, corporate events, catering, decor and venue management. Please share your requirements.";

        await Conversation.create({
            userMessage: message,
            aiResponse: reply
        });

        res.status(200).json({
            success: true,
            reply
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};