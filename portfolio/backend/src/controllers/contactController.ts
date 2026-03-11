/**
 * Contact Controller
 * Author: Sebastian Hilger
 * Course: ID3 / WS 2025/26
 * Assignment: P07 - Portfolio Backend
 * 
 * Controller for handling contact form submissions.
 * Implements create and read operations with proper error handling.
 */

import { Request, Response } from 'express';
import { Contact } from '../models';
import mongoose from 'mongoose';
import { sendContactFormEmail } from '../services/emailService';

/**
 * Create a new contact submission
 * @route POST /api/contact
 */
export const createContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, message } = req.body;

    // Create new contact entry
    const contact = new Contact({
      name,
      email,
      message,
    });

    const savedContact = await contact.save();

    // Send email notification
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'sebastianhilger9@gmail.com';
    const emailSent = await sendContactFormEmail(
      { name, email, message },
      recipientEmail
    );

    if (!emailSent) {
      console.warn('Contact saved to database but email notification failed');
    }

    res.status(201).json({
      success: true,
      message: 'Message received successfully. Thank you for contacting us!',
      data: {
        id: savedContact.id,
        name: savedContact.name,
        email: savedContact.email,
        createdAt: savedContact.createdAt,
      },
    });
  } catch (error) {
    console.error('Error saving contact:', error);

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
      error: 'Server error while saving message. Please try again later.',
    });
  }
};

/**
 * Get all contact submissions (admin endpoint)
 * @route GET /api/contact
 */
export const getAllContacts = async (_req: Request, res: Response): Promise<void> => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while fetching contacts',
    });
  }
};

/**
 * Get a single contact by ID
 * @route GET /api/contact/:id
 */
export const getContactById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        success: false,
        error: 'Invalid contact ID format',
      });
      return;
    }

    const contact = await Contact.findById(id);

    if (!contact) {
      res.status(404).json({
        success: false,
        error: 'Contact message not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error('Error fetching contact:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while fetching contact',
    });
  }
};

/**
 * Mark a contact as read
 * @route PATCH /api/contact/:id/read
 */
export const markContactAsRead = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        success: false,
        error: 'Invalid contact ID format',
      });
      return;
    }

    const contact = await Contact.findByIdAndUpdate(
      id,
      { read: true },
      { new: true }
    );

    if (!contact) {
      res.status(404).json({
        success: false,
        error: 'Contact message not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Contact marked as read',
      data: contact,
    });
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while updating contact',
    });
  }
};

/**
 * Delete a contact by ID
 * @route DELETE /api/contact/:id
 */
export const deleteContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        success: false,
        error: 'Invalid contact ID format',
      });
      return;
    }

    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      res.status(404).json({
        success: false,
        error: 'Contact message not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Contact message deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while deleting contact',
    });
  }
};
