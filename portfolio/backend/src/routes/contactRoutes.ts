/**
 * Contact Routes
 * Author: Sebastian Hilger
 * Course: ID3 / WS 2025/26
 * Assignment: P07 - Portfolio Backend
 * 
 * API routes for contact form endpoints.
 */

import { Router } from 'express';
import { createContact } from '../controllers/contactController';

const router = Router();

/**
 * @route   POST /api/contact
 * @desc    Submit a contact form
 * @access  Public
 */
router.post('/', createContact);

export default router;
