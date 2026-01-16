/**
 * Contact Routes
 * Author: Sebastian Hilger
 * Course: ID3 / WS 2025/26
 * Assignment: P07 - Portfolio Backend
 * 
 * API routes for contact form endpoints.
 */

import { Router } from 'express';
import {
  createContact,
  getAllContacts,
  getContactById,
  markContactAsRead,
  deleteContact,
} from '../controllers/contactController';

const router = Router();

/**
 * @route   POST /api/contact
 * @desc    Submit a contact form
 * @access  Public
 */
router.post('/', createContact);

/**
 * @route   GET /api/contact
 * @desc    Get all contact submissions
 * @access  Public (should be protected in production)
 */
router.get('/', getAllContacts);

/**
 * @route   GET /api/contact/:id
 * @desc    Get a single contact by ID
 * @access  Public (should be protected in production)
 */
router.get('/:id', getContactById);

/**
 * @route   PATCH /api/contact/:id/read
 * @desc    Mark a contact as read
 * @access  Public (should be protected in production)
 */
router.patch('/:id/read', markContactAsRead);

/**
 * @route   DELETE /api/contact/:id
 * @desc    Delete a contact by ID
 * @access  Public (should be protected in production)
 */
router.delete('/:id', deleteContact);

export default router;
