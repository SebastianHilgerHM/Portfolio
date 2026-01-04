# VS Code Copilot Instructions: Portfolio Website (P06)

## Project Context
You are helping build a Next.js/TypeScript portfolio website for a web technologies practical assignment (ID3 / WS 2025/26). This is part of coursework that can earn up to 70 points.

## Critical Requirements Overview

### Repository Structure
```
portfolio/
├── frontend/          # Next.js application goes here
│   ├── src/
│   ├── public/
│   └── ...
└── backend/          # Reserved for future implementation
```

### Existing Design Resources Location
```
portfolio/
├── docs/
│   ├── images/       # Source images for the project
│   ├── svg/          # Vector graphics
│   ├── design-tokens.ts
│   ├── component-layout-specifications.md
│   └── section-layout-specifications.md
```

## Technical Requirements

### Technology Stack
- **Framework**: Next.js with TypeScript
- **Component Pattern**: Use stateful React components where appropriate
- **Future-Ready**: Design data structures and components to easily integrate with a backend/database later

### Code Quality Standards
- Include author comments in every source file
- Follow best practices and learned standards
- Write efficient code, avoid redundancy
- High-quality solutions are expected (no "bare minimum" implementations)

### Design Implementation
- Follow the design specifications in `docs/component-layout-specifications.md` and `docs/section-layout-specifications.md`
- Use design tokens from `docs/design-tokens.ts`
- The design allows creative freedom (e.g., infinite scrolling vs. separate pages)
- "Seite" (page) can mean a section if using single-page design
- Determine appropriate information depth for projects

## Asset Management

### Images
When implementing components that need images:
1. Copy relevant images from `portfolio/docs/images/` to `portfolio/frontend/public/images/`
2. Copy SVG files from `portfolio/docs/svg/` to `portfolio/frontend/public/svg/`
3. Update image paths in components to use `/images/` or `/svg/` routes
4. Maintain original filenames for traceability

### Design Tokens
- Import and use design tokens from `../docs/design-tokens.ts` during development
- Later move to frontend structure as needed
- Ensure consistency across all components

## Implementation Guidelines

### Component Architecture
```typescript
// Every file should start with:
// Author: [Student Name]
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

// Use stateful components where appropriate
import { useState } from 'react';

// Prepare for backend integration
interface Project {
  id: string;
  title: string;
  description: string;
  // ... future database fields
}
```

### Form Validation Example
```typescript
// Contact form should validate:
- Name: required, non-empty
- Email: required, valid email format (regex)
- Message: required, non-empty
```

### Data Structure Preparation
Design components to accept props that could come from API calls:
```typescript
// Good - ready for backend
const ProjectsList = ({ projects }: { projects: Project[] }) => { ... }

// Bad - hardcoded data in component
const ProjectsList = () => {
  const projects = [/* hardcoded */];
  ...
}
```

## Workflow Instructions for Copilot

### When Asked to Create a Component:
1. Check `component-layout-specifications.md` for relevant specifications
2. Import design tokens from `design-tokens.ts`
3. Create TypeScript interfaces for props (think: future API data)
4. Add author comment at top of file
5. If component needs images, ask which images to copy from `docs/images/`
6. Implement with stateful logic if needed (useState, useEffect)

### When Asked to Create a Page:
1. Check `section-layout-specifications.md` for layout requirements
2. Plan component composition
3. Ensure routing structure in Next.js is clean
4. Consider data flow (props drilling vs. context vs. future API calls)

### When Asked to Implement Forms:
1. Use controlled components with useState
2. Implement validation logic
3. Add error state display
4. Prepare onSubmit handler for future backend integration
5. Consider accessibility (labels, error messages, focus management)

### When Asked About Design Decisions:
1. First check existing specifications in `docs/`
2. Reference design tokens for colors, spacing, typography
3. Suggest creative solutions within requirements
4. Avoid "bare minimum" solutions - aim for quality

## Quality Checklist

Before completing any task, verify:
- [ ] Author comment included
- [ ] TypeScript types properly defined
- [ ] No code redundancy
- [ ] Component is reusable and maintainable
- [ ] Design tokens used for styling
- [ ] Images copied to correct location if needed
- [ ] Component structure supports future backend integration
- [ ] Best practices followed (naming, file structure, etc.)
- [ ] Validation implemented where required
- [ ] Accessibility considered
