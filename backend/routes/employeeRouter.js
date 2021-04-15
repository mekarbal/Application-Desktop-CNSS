const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

router.post("/", employeeController.create);
router.get("/:id", employeeController.findById);
router.post("/login", employeeController.login);

module.exports = router;
