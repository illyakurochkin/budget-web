import React from 'react';
import {classes} from '../../libs/classes';
import {Spinner} from '@cloudscape-design/components';
import {ReactComponent as Done} from '../icons/done.svg';

interface ButtonProps {
  children: React.ReactNode,
  variant?: 'primary' | 'secondary',
  effects?: boolean,
  loading?: boolean,
  done?: boolean,
  className?: string,
  onClick: () => void,
}

const BASE_BUTTON_CLASSES = `
  pointer
  transition-all
  font-bold
  rounded-2xl
  border-2
  py-1
  px-4
`;

const PRIMARY_BUTTON_CLASSES = `
  border-text-primary
  bg-text-primary
  text-background-primary
`;

const SECONDARY_BUTTON_CLASSES = `
  border-text-primary
  text-text-primary  
`;

const BUTTON_ACTIVE_EFFECTS_CLASSES = `
  button-shadow

  outline-0
  outline-offset-0
  outline-text-primary
  
  hover:outline
  hover:outline-2
  hover:outline-offset-2
  
  active:outline-0
  active:outline-offset-0
  
  #shadow-text-primary
  #shadow-2xl
`;

const BUTTON_PASSIVE_EFFECTS = {
  primary: `
    active:bg-background-primary 
    active:text-text-primary
  `,
  secondary: `
    active:bg-text-primary 
    active:text-background-primary
  `,
};

const BUTTON_VARIANT_CLASSES = {
  primary: PRIMARY_BUTTON_CLASSES,
  secondary: SECONDARY_BUTTON_CLASSES,
};

export const Button = ({
  children,
  variant = 'primary',
  effects = true,
  loading = false,
  done = false,
  onClick,
  className
}: ButtonProps) => {
  const renderContent = () => {
    if(!loading && !done) return children;

    return (
      <>
        <span className='opacity-0'>
          {children}
        </span>
        <span className={classes('absolute', BUTTON_VARIANT_CLASSES)}>
          {loading && <Spinner />}
          {done && <Done className='w-[22px] h-[22px] mt-[2px]'/>}
        </span>
      </>
    )
  }

  return (
    <button
      onClick={onClick}
      className={classes(
        BASE_BUTTON_CLASSES,
        effects ? BUTTON_ACTIVE_EFFECTS_CLASSES : BUTTON_PASSIVE_EFFECTS[variant],
        BUTTON_VARIANT_CLASSES[variant],
        (loading || done) && 'flex items-center justify-center',
        className,
      )}>
      {renderContent()}
    </button>
  );
};
