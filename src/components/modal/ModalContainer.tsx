import React from 'react';
import {classes} from '../../libs/classes';

interface Props {
  children: React.ReactNode;
  className?: string;
  size?: ModalSize;
}

export type ModalSize = 'compact' | 'default' | 'large' | 'full-page';

export const ModalContainer: React.FC<Props> = ({children, className, size = 'default'}) => (
  <div className={classes(className, 'relative z-modal')}>
    <div className="fixed z-[100] inset-0 bg-[rgba(0,0,0,0.9)]"/>

    <div className="fixed z-[150] inset-0 z-modal overflow-y-auto">
      <div className={classes(
        'flex z-[250] min-h-screen flex-col items-center px-4 py-24',
        size === 'full-page' && 'h-full px-0 pt-0 pb-0 sm:h-auto sm:px-4 sm:pt-4',
      )}>
        {children}
      </div>
    </div>
  </div>
);
