const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  name: String,
  phone: String,
  birthdate: Date
});

module.exports = mongoose.model("Schedule", ScheduleSchema);
