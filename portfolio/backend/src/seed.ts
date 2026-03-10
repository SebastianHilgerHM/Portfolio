/**
 * Database Seed Script
 * Author: Sebastian Hilger
 * Course: ID3 / WS 2025/26
 * Assignment: P07 - Portfolio Backend
 * 
 * Seeds the database with initial project data.
 * Run with: npm run seed
 */

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Project } from './models';

// Load environment variables
dotenv.config();

// Sample project data based on the frontend
const projectsData = [
  {
    title: 'Poster Series',
    description: 'A Series of black and white posters that were created as part of a university course. The project explores minimalist design principles and typographic experimentation.',
    shortDescription: 'Black and white poster designs exploring minimalism',
    imageUrl: '/images/posters.png',
    link: '/projects/posters',
    category: 'Design',
    technologies: ['Adobe Illustrator', 'Typography', 'Print Design'],
    featured: true,
    order: 1,
  },
  {
    title: 'DnD Chatbot',
    description: 'An interactive chatbot designed to assist Dungeons & Dragons players with rules, character creation, and campaign management. Built with natural language processing capabilities.',
    shortDescription: 'AI-powered assistant for D&D players',
    imageUrl: '/images/chatbot.png',
    link: '/projects/chatbot',
    category: 'Web Development',
    technologies: ['Python', 'NLP', 'React'],
    featured: true,
    order: 2,
  },
  {
    title: 'Steam Community-Tab Redesign',
    description: 'A comprehensive UI/UX redesign concept for the Steam Community tab, focusing on improved navigation, modern aesthetics, and enhanced user engagement.',
    shortDescription: 'UI/UX redesign concept for Steam',
    imageUrl: '/images/steam_redesign.png',
    link: '/projects/steam-redesign',
    category: 'Design',
    technologies: ['Figma', 'UI/UX', 'Prototyping'],
    featured: true,
    order: 3,
  },
  {
    title: '3D Catan',
    description: 'A browser version of the classic Catan Boardgame. As part of a university course, our team of four developed a 3D digital version of the board game Catan. The project combined gameplay programming, interface design, and 3D asset creation into a unified product.',
    shortDescription: 'Browser-based 3D version of the classic board game',
    imageUrl: '/images/catan_3d.png',
    link: '/projects/catan',
    category: '3D',
    technologies: ['Three.js', 'JavaScript', 'Blender', 'WebGL'],
    featured: true,
    order: 4,
  },
  {
    title: 'Album Covers',
    description: 'A collection of album cover designs created for various music projects. Each cover explores different visual styles and techniques to match the mood and genre of the music.',
    shortDescription: 'Album artwork designs for music projects',
    imageUrl: '/images/album_cover.png',
    link: '/projects/album-covers',
    category: 'Design',
    technologies: ['Adobe Photoshop', 'Illustration', 'Digital Art'],
    featured: true,
    order: 5,
  },
  {
    title: 'MSB Service Center',
    description: 'A service center application designed for MSB, featuring appointment scheduling, service tracking, and customer management capabilities.',
    shortDescription: 'Service center management application',
    imageUrl: '/images/msb.png',
    link: '/projects/msb',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'Database'],
    featured: true,
    order: 6,
  },
  {
    title: 'Listening Wrapped',
    description: 'A personalized music listening analytics dashboard that visualizes your yearly listening habits, top artists, genre breakdowns, and mood patterns. Inspired by Spotify Wrapped but designed as a standalone cross-platform tool.',
    shortDescription: 'Music listening analytics and year-in-review dashboard',
    imageUrl: '/images/sample_cover.png',
    link: '/projects/listening-wrapped',
    category: 'Web Development',
    technologies: ['React', 'D3.js', 'Spotify API', 'Node.js'],
    featured: true,
    order: 7,
  },
  {
    title: 'Moosburg Treefinder',
    description: 'An interactive map application for the city of Moosburg that catalogs and visualizes urban trees. Users can explore tree species, filter by characteristics, and learn about the local urban canopy.',
    shortDescription: 'Interactive urban tree mapping for Moosburg',
    imageUrl: '/images/sample_poster.png',
    link: '/projects/moosburg-treefinder',
    category: 'Web Development',
    technologies: ['Leaflet', 'GeoJSON', 'TypeScript', 'Next.js'],
    featured: true,
    order: 8,
  },
  {
    title: '7Slots',
    description: 'A stylized slot-machine browser game with retro aesthetics and modern interactions. Features multiple themed reels, a combo system, and procedurally generated visual effects.',
    shortDescription: 'Retro-styled slot machine browser game',
    imageUrl: '/images/sample_chatbot.png',
    link: '/projects/7slots',
    category: 'Web Development',
    technologies: ['Canvas API', 'JavaScript', 'CSS Animations', 'Web Audio'],
    featured: true,
    order: 9,
  },
];

/**
 * Seed the database with projects
 */
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfoliodb';
    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB');

    // Clear existing projects
    await Project.deleteMany({});
    console.log('🗑️ Cleared existing projects');

    // Insert new projects
    const createdProjects = await Project.insertMany(projectsData);
    console.log(`✅ Created ${createdProjects.length} projects`);

    // Log created projects
    createdProjects.forEach((project) => {
      console.log(`  - ${project.title} (ID: ${project._id})`);
    });

    console.log('\n🎉 Database seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('👋 Disconnected from MongoDB');
    process.exit(0);
  }
};

// Run the seed function
seedDatabase();
