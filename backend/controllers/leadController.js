const Lead = require("../models/Lead");

exports.createLead = async (req, res) => {
    try {

        const lead = await Lead.create(req.body);

        res.status(201).json({
            success: true,
            message: "Lead created successfully",
            data: lead
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

exports.getAllLeads = async (req, res) => {

    try {

        const leads = await Lead.find().sort({
            createdAt: -1
        });

        res.status(200).json({
            success: true,
            count: leads.length,
            data: leads
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.updateLeadStatus = async (req, res) => {

    try {

        const lead = await Lead.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            success: true,
            data: lead
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.deleteLead = async (req, res) => {

    try {

        await Lead.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Lead deleted"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};