const express = require("express");
const router = express.Router();
const { uploadImage } = require("../controllers/upload/upload.controller");

router.post("/", uploadImage);

module.exports = router;