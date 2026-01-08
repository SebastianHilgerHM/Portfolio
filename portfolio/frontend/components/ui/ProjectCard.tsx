// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import Link from 'next/link';
import { useState } from 'react';
import Card from './Card';
import ImageBlock from './ImageBlock';
import { colors, spacing, typography, motion } from '@/lib/design-tokens';

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  imagePosition?: 'left' | 'right';
}

const ProjectCard = ({
  id,
  title,
  description,
  imageUrl,
  link,
  imagePosition = 'right',
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const TextContent = (
    <Link
      href={link}
      style={{
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <Card hoveredState={isHovered} variant="hover">
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h3
            style={{
              fontSize: typography.fontSize.h3,
              fontWeight: typography.fontWeight.semibold,
              color: colors.text_primary,
              marginBottom: `${spacing.xs}px`,
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: typography.fontSize.body,
              color: colors.text_secondary,
              marginBottom: `${spacing.small}px`,
              lineHeight: typography.lineHeight.normal,
            }}
          >
            {description}
          </p>

          {/* CTA Button */}
          <span
            style={{
              display: 'inline-block',
              fontSize: typography.fontSize.body,
              fontWeight: typography.fontWeight.medium,
              color: colors.accent,
              textDecoration: 'none',
              transition: `color ${motion.duration.fast}`,
            }}
          >
            Learn more →
          </span>
        </div>
      </Card>
    </Link>
  );

  const ImageContent = (
    <ImageBlock
      src={imageUrl}
      alt={title}
      height="350px"
      objectFit="contain"
      hoveredState={isHovered}
      useDropShadow
    />
  );

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: `${spacing.medium}px`,
        alignItems: 'center',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: `all ${motion.duration.normal} ${motion.easing.standard}`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="project-card"
    >
      {imagePosition === 'left' ? (
        <>
          {ImageContent}
          {TextContent}
        </>
      ) : (
        <>
          {TextContent}
          {ImageContent}
        </>
      )}
    </div>
  );
};

export default ProjectCard;
