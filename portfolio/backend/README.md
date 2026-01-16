# Portfolio Backend API

**Author:** Sebastian Hilger  
**Course:** ID3 / WS 2025/26  
**Assignment:** P07 - Portfolio Backend with MongoDB

## Description

Express/TypeScript backend API for the Portfolio website with MongoDB database integration using Mongoose ODM.

## Features

- REST API for Projects (CRUD operations)
- Contact form submission storage
- Input validation with Mongoose schema validators
- Proper error handling with meaningful messages
- CORS configured for frontend communication

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Copy `.env.example` to `.env` (or use the existing `.env`)
   - Update `MONGODB_URI` if needed

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/portfoliodb` |
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment mode | `development` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:3000` |

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

### Seed Database
```bash
npm run seed
```

## API Endpoints

### Projects

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/projects` | Get all projects |
| `GET` | `/api/projects/featured` | Get featured projects |
| `GET` | `/api/projects/:id` | Get project by ID |
| `POST` | `/api/projects` | Create new project |
| `PUT` | `/api/projects/:id` | Update project |
| `DELETE` | `/api/projects/:id` | Delete project |

### Contact

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/contact` | Submit contact form |
| `GET` | `/api/contact` | Get all contacts |
| `GET` | `/api/contact/:id` | Get contact by ID |
| `PATCH` | `/api/contact/:id/read` | Mark contact as read |
| `DELETE` | `/api/contact/:id` | Delete contact |

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Server health check |

## Data Models

### Project Schema
```typescript
{
  title: string;          // Required, 2-100 chars
  description: string;    // Required, 10-2000 chars
  shortDescription: string; // Optional, max 200 chars
  imageUrl: string;       // Required
  link: string;           // Required
  category: string;       // Enum: Web Development, Design, 3D, Game Development, Other
  technologies: string[]; // Array of technology names
  featured: boolean;      // Default: false
  order: number;          // Default: 0
}
```

### Contact Schema
```typescript
{
  name: string;    // Required, 2-100 chars
  email: string;   // Required, valid email format
  message: string; // Required, 10-5000 chars
  read: boolean;   // Default: false
}
```

## Database Export

Export database using mongodump:
```bash
mongodump --db portfoliodb --out ./dump
```

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── database.ts    # MongoDB connection
│   │   └── index.ts
│   ├── controllers/
│   │   ├── contactController.ts
│   │   ├── projectController.ts
│   │   └── index.ts
│   ├── models/
│   │   ├── Contact.ts
│   │   ├── Project.ts
│   │   └── index.ts
│   ├── routes/
│   │   ├── contactRoutes.ts
│   │   ├── projectRoutes.ts
│   │   └── index.ts
│   ├── seed.ts            # Database seeding script
│   └── server.ts          # Express server entry point
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## HTTP Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `404` - Not Found
- `500` - Server Error

## License

ISC
