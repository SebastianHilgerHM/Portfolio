/**
 * API Service
 * Author: Sebastian Hilger
 * Course: ID3 / WS 2025/26
 * Assignment: P07 - Portfolio Website
 * 
 * Centralized API service for communicating with the backend.
 */

// Base URL for API requests
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

/**
 * Project type definition
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  imageUrl: string;
  link: string;
  category?: string;
  technologies?: string[];
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

/**
 * Contact form data type
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * API Response type
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  count?: number;
  message?: string;
  error?: string;
  details?: string[];
}

/**
 * Generic fetch wrapper with error handling
 */
async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || 'An error occurred',
        details: data.details,
      };
    }

    return data;
  } catch (error) {
    // Silently handle network errors when backend is unavailable
    return {
      success: false,
      error: 'Network error. Please check your connection.',
    };
  }
}

/**
 * Project API functions
 */
export const projectApi = {
  /**
   * Get all projects
   */
  getAll: async (): Promise<ApiResponse<Project[]>> => {
    return fetchApi<Project[]>('/projects');
  },

  /**
   * Get featured projects
   */
  getFeatured: async (): Promise<ApiResponse<Project[]>> => {
    return fetchApi<Project[]>('/projects/featured');
  },

  /**
   * Get a single project by ID
   */
  getById: async (id: string): Promise<ApiResponse<Project>> => {
    return fetchApi<Project>(`/projects/${id}`);
  },

  /**
   * Create a new project
   */
  create: async (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Project>> => {
    return fetchApi<Project>('/projects', {
      method: 'POST',
      body: JSON.stringify(project),
    });
  },

  /**
   * Update a project
   */
  update: async (id: string, project: Partial<Project>): Promise<ApiResponse<Project>> => {
    return fetchApi<Project>(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(project),
    });
  },

  /**
   * Delete a project
   */
  delete: async (id: string): Promise<ApiResponse<Project>> => {
    return fetchApi<Project>(`/projects/${id}`, {
      method: 'DELETE',
    });
  },
};

/**
 * Contact API functions
 */
export const contactApi = {
  /**
   * Submit a contact form
   */
  submit: async (formData: ContactFormData): Promise<ApiResponse<{ id: string; name: string; email: string; createdAt: string }>> => {
    return fetchApi('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },
};

export default { projectApi, contactApi };
