const express = require("express");
const { createMenuItem } = require("../../controllers/menuItemController");
const asyncHandler = require("../../utils/asyncHandler");

const router = express.Router();

router.post("/create", asyncHandler(createMenuItem));

module.exports = router;