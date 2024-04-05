const express = require("express");
const router = express.Router();
const {
  createVolunteer,
  updateStatus,
  getAllApplications,
  getPendingApplications,
  getAcceptedApplications,
  getNumberOfAcceptedApplications,
  getNumberOfPendingApplications,
  getVolunteerById,
  getPerYear,
  getNumberOfRejectedApplications,
  getRejectedApplications,
} = require("../controllers/volunteerController");

// /api/volunteers
router.post("/", createVolunteer);
router.get("/peryear", getPerYear);
router.patch("/:id/status", updateStatus);
router.get("/all", getAllApplications);
router.get("/pending", getPendingApplications);
router.get("/accepted", getAcceptedApplications);
router.get("/rejected", getRejectedApplications);
router.get("/accepted/count", getNumberOfAcceptedApplications);
router.get("/pending/count", getNumberOfPendingApplications);
router.get("/:id", getVolunteerById);
router.get("/rejected/count", getNumberOfRejectedApplications);
module.exports = router;
