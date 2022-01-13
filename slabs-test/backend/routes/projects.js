const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const ProjectsRepository = require('../db/projects-repository');

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const projects = await ProjectsRepository.list();
        return res.json({
            projects
        });
    }),
);

router.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const project = await ProjectsRepository.get(req.params.id);
        return res.json({
            project
        });
    }),
);

module.exports = router;