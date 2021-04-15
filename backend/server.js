require("dotenv").config();
const express = require("express");
const app = express();
require("./configs/configs");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "CNSS API",
      description: "CNSS API Information",
      contact: {
        name: "YouCode Developer",
      },
      server: ["http://localhost:5000"],
    },
  },
  apis: ["./routes/*.js"],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const agentRouter = require("./routes/agentRouter");
const employeeRouter = require("./routes/employeeRouter");
app.use(express.json());

app.use("/agent", agentRouter);

app.use("/employee", employeeRouter);

app.listen(process.env.PORT, console.log("connected " + process.env.PORT));
