const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const ProjectsController = require('../db/projects');

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const projects = await ProjectsController.list();
        console.log(projects);
        return res.json({
            projects
        });
    }),
);

router.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const project = await ProjectsController.get(req.params.id);
        return res.json({
            project
        });
    }),
);

module.exports = router;