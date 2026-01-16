/**
 * Project Model
 * Author: Sebastian Hilger
 * Course: ID3 / WS 2025/26
 * Assignment: P07 - Portfolio Backend
 * 
 * Mongoose model for portfolio projects with validation.
 */

import mongoose, { Schema, Document } from 'mongoose';

/**
 * Interface for Project document
 */
export interface IProject extends Document {
  title: string;
  description: string;
  shortDescription?: string;
  imageUrl: string;
  link: string;
  category?: string;
  technologies?: string[];
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Project Schema with validation
 */
const ProjectSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
      minlength: [2, 'Title must be at least 2 characters long'],
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
      trim: true,
      minlength: [10, 'Description must be at least 10 characters long'],
      maxlength: [2000, 'Description cannot exceed 2000 characters'],
    },
    shortDescription: {
      type: String,
      trim: true,
      maxlength: [200, 'Short description cannot exceed 200 characters'],
    },
    imageUrl: {
      type: String,
      required: [true, 'Project image URL is required'],
      trim: true,
    },
    link: {
      type: String,
      required: [true, 'Project link is required'],
      trim: true,
    },
    category: {
      type: String,
      trim: true,
      enum: {
        values: ['Web Development', 'Design', '3D', 'Game Development', 'Other'],
        message: '{VALUE} is not a valid category',
      },
      default: 'Other',
    },
    technologies: {
      type: [String],
      default: [],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_doc: unknown, ret: Record<string, unknown>) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

// Index for efficient querying
ProjectSchema.index({ featured: 1, order: 1 });
ProjectSchema.index({ category: 1 });

export default mongoose.model<IProject>('Project', ProjectSchema);
