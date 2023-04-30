import React from 'react';
import clsx from 'clsx';

interface CardProps {
  className?: string;
  children: React.ReactNode,
}

const CARD_CLASSES = `
  p-3 md:p-6 
  rounded-2xl 
  bg-background-secondary 
  border-4 border-text-primary 
  card-shadow
`

export const Card = ({className, children}: CardProps) => (
  <div className={clsx(CARD_CLASSES, className)}>
    {children}
  </div>
);
