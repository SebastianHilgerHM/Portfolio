/**
 * Project Controller
 * Author: Sebastian Hilger
 * Course: ID3 / WS 2025/26
 * Assignment: P07 - Portfolio Backend
 * 
 * Controller for handling project-related API requests.
 * Implements CRUD operations with proper error handling.
 */

import { Request, Response } from 'express';
import { Project } from '../models';
import mongoose from 'mongoose';

/**
 * Get all projects
 * @route GET /api/projects
 */
export const getAllProjects = async (_req: Request, res: Response): Promise<void> => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while fetching projects',
    });
  }
};

/**
 * Get a single project by ID
 * @route GET /api/projects/:id
 */
export const getProjectById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        success: false,
        error: 'Invalid project ID format',
      });
      return;
    }

    const project = await Project.findById(id);

    if (!project) {
      res.status(404).json({
        success: false,
        error: 'Project not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while fetching project',
    });
  }
};

/**
 * Create a new project
 * @route POST /api/projects
 */
export const createProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, shortDescription, imageUrl, link, category, technologies, featured, order } = req.body;

    const project = new Project({
      title,
      description,
      shortDescription,
      imageUrl,
      link,
      category,
      technologies,
      featured,
      order,
    });

    const savedProject = await project.save();

    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: savedProject,
    });
  } catch (error) {
    console.error('Error creating project:', error);

    // Handle Mongoose validation errors
    if (error instanceof mongoose.Error.ValidationError) {
      const messages = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({
        success: false,
        error: 'Validation error',
        details: messages,
      });
      return;
    }

    res.status(500).json({
      success: false,
      error: 'Server error while creating project',
    });
  }
};

/**
 * Update a project by ID
 * @route PUT /api/projects/:id
 */
export const updateProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        success: false,
        error: 'Invalid project ID format',
      });
      return;
    }

    const { title, description, shortDescription, imageUrl, link, category, technologies, featured, order } = req.body;

    const project = await Project.findByIdAndUpdate(
      id,
      {
        title,
        description,
        shortDescription,
        imageUrl,
        link,
        category,
        technologies,
        featured,
        order,
      },
      { new: true, runValidators: true }
    );

    if (!project) {
      res.status(404).json({
        success: false,
        error: 'Project not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Project updated successfully',
      data: project,
    });
  } catch (error) {
    console.error('Error updating project:', error);

    // Handle Mongoose validation errors
    if (error instanceof mongoose.Error.ValidationError) {
      const messages = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({
        success: false,
        error: 'Validation error',
        details: messages,
      });
      return;
    }

    res.status(500).json({
      success: false,
      error: 'Server error while updating project',
    });
  }
};

/**
 * Delete a project by ID
 * @route DELETE /api/projects/:id
 */
export const deleteProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        success: false,
        error: 'Invalid project ID format',
      });
      return;
    }

    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      res.status(404).json({
        success: false,
        error: 'Project not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Project deleted successfully',
      data: project,
    });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while deleting project',
    });
  }
};

/**
 * Get featured projects
 * @route GET /api/projects/featured
 */
export const getFeaturedProjects = async (_req: Request, res: Response): Promise<void> => {
  try {
    const projects = await Project.find({ featured: true }).sort({ order: 1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while fetching featured projects',
    });
  }
};
