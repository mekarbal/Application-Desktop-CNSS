const express = require("express");
const router = express.Router();
const agentController = require("../controllers/agentController");

/**
 * @swagger
 * /agent/:
 *   post:
 *     summary: Add an agent.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The agent's email.
 *                 example: agent@gmail.com
 *               password:
 *                 type: string
 *                 description: The agent's password.
 *                 example: password
 *     responses:
 *       201:
 *         description: A successful response
 */
router.post("/", agentController.create);

/**
 * @swagger
 * /agent/login:
 *   post:
 *     summary: login an agent.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The agent's email.
 *                 example: agent@gmail.com
 *               password:
 *                 type: string
 *                 description: The agent's password.
 *                 example: password
 *     responses:
 *       201:
 *         description: A successful response with a valid token
 */
router.post("/login", agentController.login);

module.exports = router;
