// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Card from './Card';
import Button from './Button';
import { colors, spacing, typography, radius } from '@/lib/design-tokens';

interface ProjectGridCardProps {
  title: string;
  image: string;
  link?: string;
}

const ProjectGridCard = ({ title, image, link }: ProjectGridCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: `${spacing.large}px`,
        paddingRight: `${spacing.large}px`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Card */}
      <Card
        hoveredState={isHovered}
        variant="interactive"
        padding="small"
        style={{
          padding: 0,
          overflow: 'hidden',
        }}
      >
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          style={{ 
            objectFit: 'contain', 
            width: '100%', 
            height: 'auto', 
            display: 'block' 
          }}
        />
      </Card>
      
      {/* Text Card - Overlapping bottom right corner */}
      <Card
        hoveredState={isHovered}
        variant="interactive"
        padding="small"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '70%',
          padding: `${spacing.xs}px`,
        }}
      >
        <h3
          style={{
            fontSize: typography.fontSize.h4,
            fontWeight: typography.fontWeight.bold,
            color: colors.text_primary,
            marginBottom: `${spacing.xs}px`,
          }}
        >
          {title}
        </h3>
        
        <Button 
          variant="outline"
          onClick={() => link && (window.location.href = link)}
          style={{
            fontSize: typography.fontSize.body_small,
          }}
        >
          Learn more
        </Button>
      </Card>
    </div>
  );
};

export default ProjectGridCard;
