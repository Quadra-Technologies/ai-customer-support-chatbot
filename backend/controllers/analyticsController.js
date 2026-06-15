const Lead = require("../models/Lead");
const Conversation = require("../models/Conversation");

const getAnalytics = async (req, res) => {
    try {

        const totalLeads = await Lead.countDocuments();

        const totalChats = await Conversation.countDocuments();

        const today = new Date();

        today.setHours(0, 0, 0, 0);

        const todayLeads = await Lead.countDocuments({
            createdAt: { $gte: today }
        });

        const todayChats = await Conversation.countDocuments({
            createdAt: { $gte: today }
        });

        const wonLeads = await Lead.countDocuments({
            status: "Won"
        });

        const conversionRate =
            totalLeads > 0
                ? ((wonLeads / totalLeads) * 100).toFixed(2)
                : 0;

        const statusDistribution = await Lead.aggregate([
            {
                $group: {
                    _id: "$status",
                    count: { $sum: 1 }
                }
            }
        ]);

        res.status(200).json({
            success: true,
            totalLeads,
            totalChats,
            todayLeads,
            todayChats,
            conversionRate,
            statusDistribution
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    getAnalytics
};