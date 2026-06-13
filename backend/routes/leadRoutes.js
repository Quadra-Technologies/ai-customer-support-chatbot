const express = require("express");

const router = express.Router();

const {
    createLead,
    getAllLeads,
    updateLeadStatus,
    deleteLead
} = require("../controllers/leadController");

router.post("/", createLead);

router.get("/", getAllLeads);

router.put("/:id", updateLeadStatus);

router.delete("/:id", deleteLead);

module.exports = router;