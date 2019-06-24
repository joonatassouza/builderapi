const Schedule = require("../models/Schedule");

module.exports = {
  async getAll(req, res) {
    const list = await Schedule.find().sort("name");

    return res.json(list);
  },

  async getById(req, res) {
    const schedule = await Schedule.findById(req.params.id);

    return res.json(schedule);
  },

  async add(req, res) {
    const { name, phone, birthdate } = req.body;

    const schedule = await Schedule.create({
      name,
      phone,
      birthdate
    });

    return res.json(schedule);
  },

  async update(req, res) {
    const { name, phone, birthdate } = req.body;

    const schedule = await Schedule.findById(req.params.id);

    schedule = { ...schedule, name, phone, birthdate };

    await schedule.save();

    return res.json(schedule);
  },

  async delete(req, res) {
    const schedule = await Schedule.findByIdAndDelete(req.params.id);

    return res.json(schedule);
  }
};
