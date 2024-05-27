const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RememberSchema = new Schema({
  title: String,
  data: String,
});

const Remember = new mongoose.model("remember", RememberSchema);

module.exports = Remember;
