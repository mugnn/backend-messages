import mongoose from "mongoose";
require("dotenv").config();

const uri = `mongodb+srv://clubetriunfoatlas:${process.env.DB_KEY}@clusterct.uhrhi.mongodb.net/`

mongoose.connect(uri).then().catch(err => console.error('Error:', err))

module.exports = mongoose;