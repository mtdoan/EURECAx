const express = require("express");
const dotenv = require('dotenv').config();
const path = require('path');

const userRoutes = require("./routes/userRoutes");

const User = require('./models/userModel');

const app = express();


app.use("/api/users", userRoutes);

module.exports = { app };
