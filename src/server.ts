import express from "express";
const app: express.Application = require("./config/config");

require("dotenv").config();
const PORT = process.env.PORT || 3800;

app.listen(PORT, () => {
  console.log(`Server works on port: ${PORT}`);
});
