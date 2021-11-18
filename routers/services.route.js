const router = require("express").Router();
const { createGroomingService } = require("../controllers/serviceController");

router.post("/grooming", createGroomingService);

module.exports = router;
