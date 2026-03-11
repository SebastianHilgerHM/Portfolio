// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import { ReactNode, useId } from 'react';
import { spacing } from '@/lib/design-tokens';
import Card from './Card';

interface StaggeredCardItem {
  content: ReactNode;
  width?: string;
  marginLeft?: string;
  marginRight?: string;
}

interface StaggeredCardsProps {
  items: StaggeredCardItem[];
  alignItems?: 'flex-start' | 'center';
}

const StaggeredCards = ({
  items,
  alignItems = 'flex-start',
}: StaggeredCardsProps) => {
  const rawId = useId();
  const containerId = `sc-${rawId.replace(/:/g, '')}`;

  return (
    <>
      <style suppressHydrationWarning>{`
        @media (max-width: 1024px) {
          .${containerId} > div {
            margin-left: 0 !important;
            margin-right: 0 !important;
            width: 100% !important;
          }
          .${containerId} {
            align-items: flex-start !important;
          }
        }
      `}</style>
      <div
        className={containerId}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.small,
          position: 'relative',
          alignItems,
        }}
      >
        {items.map((item, i) => (
          <Card
            key={i}
            padding="small"
            style={{
              width: item.width,
              marginLeft: item.marginLeft,
              marginRight: item.marginRight,
            }}
          >
            {item.content}
          </Card>
        ))}
      </div>
    </>
  );
};

export default StaggeredCards;
