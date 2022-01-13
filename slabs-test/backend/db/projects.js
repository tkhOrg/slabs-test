const { Project } = require("./models");

async function get(id) {
    return await Project.findByPk(id);
};

async function list() {
    return await Project.findAll();
};

module.exports = { get, list };