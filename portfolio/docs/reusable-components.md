# Reusable UI Components

This document describes the reusable UI components created for the portfolio website.

## Component Architecture

The components have been broken down into smaller, reusable pieces located in `/frontend/components/ui/`:

### Base Components

#### 1. **Card** (`Card.tsx`)
A versatile card component with multiple variants.

**Props:**
- `children`: ReactNode - Content to display inside the card
- `variant`: 'default' | 'hover' | 'interactive' - Visual behavior variant
- `hoveredState`: boolean - Whether the card is currently hovered
- `padding`: 'small' | 'medium' | 'large' - Internal padding size
- `onClick`: () => void - Click handler
- `onMouseEnter`: () => void - Mouse enter handler
- `onMouseLeave`: () => void - Mouse leave handler
- `style`: React.CSSProperties - Additional styles
- `className`: string - Additional CSS classes

**Usage:**
```tsx
<Card variant="interactive" hoveredState={isHovered}>
  <h3>Title</h3>
  <p>Content</p>
</Card>
```

#### 2. **Button** (`Button.tsx`)
A styled button component with multiple variants.

**Props:**
- `children`: ReactNode - Button content
- `onClick`: () => void - Click handler
- `type`: 'button' | 'submit' | 'reset' - Button type
- `variant`: 'primary' | 'secondary' | 'outline' - Button style variant
- `style`: React.CSSProperties - Additional styles

**Usage:**
```tsx
<Button variant="primary" onClick={handleClick}>
  Submit
</Button>
```

#### 3. **ImageBlock** (`ImageBlock.tsx`)
A reusable image component with consistent styling.

**Props:**
- `src`: string - Image source URL
- `alt`: string - Alt text
- `width`: string | number - Image width
- `height`: string | number - Image height
- `maxWidth`: string | number - Maximum width
- `objectFit`: 'cover' | 'contain' - How image should fit
- `hoveredState`: boolean - Hover state for animations
- `rounded`: boolean - Whether to apply border radius
- `useDropShadow`: boolean - Whether to apply drop shadow effect

**Usage:**
```tsx
<ImageBlock
  src="/images/photo.jpg"
  alt="Description"
  height="350px"
  objectFit="contain"
  useDropShadow
/>
```

### Layout Components

#### 4. **SectionContainer** (`SectionContainer.tsx`)
A container component that wraps sections with consistent padding and max-width.

**Props:**
- `children`: ReactNode - Section content
- `paddingTop`: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
- `paddingBottom`: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
- `maxWidth`: string - Maximum width of content
- `className`: string - Additional CSS classes

**Usage:**
```tsx
<SectionContainer paddingTop="xxlarge" paddingBottom="xxlarge">
  <YourContent />
</SectionContainer>
```

#### 5. **SectionHeader** (`SectionHeader.tsx`)
A consistent header component for sections.

**Props:**
- `children`: ReactNode - Header text
- `align`: 'left' | 'center' | 'right' - Text alignment
- `marginBottom`: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
- `level`: 'h2' | 'h3' - Heading level

**Usage:**
```tsx
<SectionHeader level="h2" align="left">
  SOME OF MY WORKS
</SectionHeader>
```

### Composite Components

#### 6. **ProjectCard** (`ProjectCard.tsx`)
A specialized card for displaying projects with image and text.

**Props:**
- `id`: string - Unique identifier
- `title`: string - Project title
- `description`: string - Project description
- `imageUrl`: string - Project image URL
- `link`: string - Project detail page link
- `imagePosition`: 'left' | 'right' - Position of the image

**Usage:**
```tsx
<ProjectCard
  id="1"
  title="Project Alpha"
  description="Description here"
  imageUrl="/images/project.jpg"
  link="/projects/alpha"
  imagePosition="right"
/>
```

#### 7. **InterestCard** (`InterestCard.tsx`)
A card component for displaying interests or hobbies.

**Props:**
- `id`: string - Unique identifier
- `title`: string - Interest title
- `description`: string - Interest description

**Usage:**
```tsx
<InterestCard
  id="1"
  title="Design Systems"
  description="Exploring the intersection of design and code"
/>
```

### Form Components

#### 8. **FormInput** (`FormInput.tsx`)
A reusable form input component with validation support.

**Props:**
- `id`: string - Input ID
- `label`: string - Input label
- `type`: 'text' | 'email' | 'textarea' - Input type
- `value`: string - Input value
- `onChange`: (value: string) => void - Change handler
- `error`: string - Error message to display
- `rows`: number - Number of rows (for textarea)
- `placeholder`: string - Placeholder text

**Usage:**
```tsx
<FormInput
  id="name"
  label="Name"
  type="text"
  value={formData.name}
  onChange={(value) => setFormData({ ...formData, name: value })}
  error={errors.name}
/>
```

#### 9. **ContactForm** (`ContactForm.tsx`)
A complete contact form with validation.

**Props:**
- `onSubmit`: (data: ContactFormData) => void - Form submit handler
- `onCancel`: () => void - Cancel button handler

**Usage:**
```tsx
<ContactForm
  onSubmit={handleFormSubmit}
  onCancel={() => setShowForm(false)}
/>
```

## Benefits of This Architecture

1. **Reusability**: Components can be used across different pages and sections
2. **Consistency**: All cards, buttons, and layouts follow the same design patterns
3. **Maintainability**: Changes to styling or behavior can be made in one place
4. **Testability**: Smaller components are easier to test individually
5. **Flexibility**: Components accept props for customization while maintaining consistency
6. **Type Safety**: All components are fully typed with TypeScript

## Import Pattern

You can import components individually:
```tsx
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
```

Or use the barrel export:
```tsx
import { Card, Button, SectionContainer } from '@/components/ui';
```

## Refactored Sections

The following section components have been refactored to use the new reusable components:

- **IntroductionSection**: Uses `SectionContainer`, `ImageBlock`, and `Card`
- **WorksSection**: Uses `SectionContainer`, `SectionHeader`, and `ProjectCard`
- **CuriositySection**: Uses `SectionContainer`, `Card`, and `InterestCard`
- **ContactSection**: Uses `SectionContainer`, `SectionHeader`, `Card`, `Button`, and `ContactForm`

Each section is now much simpler and focuses on composition rather than implementation details.
