const express = require("express");
const router = express.Router();

const { addUserMiddleware, findUserMiddleware } = require("../middlewares/userMiddleware");
const { addUserController, findUserController } = require("../controllers/userController");

router.post("/addUser", addUserMiddleware, addUserController);
router.get("/findUser", findUserMiddleware, findUserController);

module.exports = router;