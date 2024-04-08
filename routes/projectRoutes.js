import express from 'express';
import sequelize from '../config/db.js'
import { getProjects, createProjects, updateProjects, deleteProject } from '../controllers/projectController.js';
const router = express.Router();

router.get('/', getProjects)

router.post('/', createProjects);

router.put('/', updateProjects);

router.delete('/', deleteProject);

export default router