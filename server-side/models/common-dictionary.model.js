const mongoose = require("mongoose");

// 定义模式（Schema）
const CommonDictionarySchema = new mongoose.Schema(
  {
    _id: Number,
    Chinese_character: String,
    English_character: String,
    uuid: String,
  },
  { collection: "common" }
);

// 定义模型（Model）
const CommonDictionaryModel = mongoose.model("common", CommonDictionarySchema);

module.exports = CommonDictionaryModel;
