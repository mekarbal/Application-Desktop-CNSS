require("dotenv").config();
const express = require("express");
const app = express();
require("./configs/configs");
const agentRouter = require("./routes/agentRouter");
const employeeRouter = require("./routes/employeeRouter");
app.use(express.json());

app.use("/agent", agentRouter);
app.use("/employee", employeeRouter);

app.listen(process.env.PORT, console.log("connected " + process.env.PORT));
