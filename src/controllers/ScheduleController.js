const Schedule = require('../models/Schedule');

module.exports = {
  async getAll(req, res) {
    const list = await Schedule.find().sort('name');

    return res.json(list);
  },

  async getById(req, res) {
    const schedule = await Schedule.findById(req.params.id);

    return res.json(schedule);
  },

  async save(req, res) {
    const { values } = req.body;

    const _id = (values.find(f => f.fieldName === '_id') || {}).value;
    const name = (values.find(f => f.fieldName === 'name') || {}).value;
    const phone = (values.find(f => f.fieldName === 'phone') || {}).value;
    const birthdate = (values.find(f => f.fieldName === 'birthdate') || {})
      .value;

    let schedule = await Schedule.findById(_id);

    if (!schedule) {
      schedule = await Schedule.create({
        name,
        phone,
        birthdate
      });
    } else {
      schedule = { ...schedule, name, phone, birthdate };
      await schedule.save();
    }

    return res.json(schedule);
  },

  async delete(req, res) {
    const schedule = await Schedule.findByIdAndDelete(req.params.id);

    return res.json(schedule);
  }
};
