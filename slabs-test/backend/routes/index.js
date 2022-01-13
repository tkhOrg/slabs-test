// backend/routes/index.js
const router = require('express').Router();
const projectRouter = require('./projects.js');

router.use('/projects', projectRouter);

module.exports = router;