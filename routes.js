const express = require("express");

const ScheduleController = require("./src/controllers/ScheduleController");

const routes = new express.Router();

routes.get("/api/schedule", ScheduleController.getAll);
routes.get("/api/schedule/:id", ScheduleController.getById);
routes.post("/api/schedule", ScheduleController.save);
routes.delete("/api/schedule/:id", ScheduleController.delete);

module.exports = routes;
