const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const CommonDictionaryModel = require("./models/common-dictionary.model");

const COMMON_DIC_MONGO_URL = "mongodb://127.0.0.1:27017/dictionary";
const COMMON_DIC_PORT = 4000;

const app = express();
app.use(cors()); // in order to make FE could listen to localhost:4000
app.use(express.json());

dotenv.config();

// const COMMON_DIC_MONGO_URL = process.env["COMMON_DIC_MONGO_URL "];
// const COMMON_DIC_PORT = process.env["COMMON_DIC_PORT "];

mongoose
  .connect(COMMON_DIC_MONGO_URL)
  .then(() => {
    console.log("Connection to MongoDB is successful");
    app.listen(COMMON_DIC_PORT, () =>
      console.log(`Server is running on PORT ${COMMON_DIC_PORT}`)
    );
  })
  .catch((err) => console.error("Errors when connecting to Mongo DB：", err));

app.get("/getData", async (req, res) => {
  try {
    const data = await CommonDictionaryModel.find();
    res.json(data);
  } catch (err) {
    console.error("Errors when finding data from DB：", err);
    res.status(500).json({ error: "Errors when searching in DB" });
  }
});
