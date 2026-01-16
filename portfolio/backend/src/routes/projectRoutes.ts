/**
 * Project Routes
 * Author: Sebastian Hilger
 * Course: ID3 / WS 2025/26
 * Assignment: P07 - Portfolio Backend
 * 
 * API routes for project-related endpoints.
 */

import { Router } from 'express';
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  getFeaturedProjects,
} from '../controllers/projectController';

const router = Router();

/**
 * @route   GET /api/projects
 * @desc    Get all projects
 * @access  Public
 */
router.get('/', getAllProjects);

/**
 * @route   GET /api/projects/featured
 * @desc    Get featured projects
 * @access  Public
 */
router.get('/featured', getFeaturedProjects);

/**
 * @route   GET /api/projects/:id
 * @desc    Get a single project by ID
 * @access  Public
 */
router.get('/:id', getProjectById);

/**
 * @route   POST /api/projects
 * @desc    Create a new project
 * @access  Public (should be protected in production)
 */
router.post('/', createProject);

/**
 * @route   PUT /api/projects/:id
 * @desc    Update a project by ID
 * @access  Public (should be protected in production)
 */
router.put('/:id', updateProject);

/**
 * @route   DELETE /api/projects/:id
 * @desc    Delete a project by ID
 * @access  Public (should be protected in production)
 */
router.delete('/:id', deleteProject);

export default router;
