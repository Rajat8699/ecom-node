const express = require("express");
const router = express.Router();

const { getUserMiddleware } = require("../middlewares/userMiddleware");
const { getUserController } = require("../controllers/userController");

router.get("/getUser", getUserMiddleware, getUserController);

module.exports = router;