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

export default router;
