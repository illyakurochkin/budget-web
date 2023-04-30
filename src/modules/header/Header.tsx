import React from 'react';
import {useAuthentication} from '../../hooks/use-authentication';
import {Button} from '../../components/button';
import {classes} from '../../libs/classes';

interface HeaderProps {
  className?: string;
}

export const Header = ({className}: HeaderProps) => {
  const {logout} = useAuthentication();

  return (
    <div className={classes('flex flex-row items-end justify-between', className)}>
      <div className='underline underline-offset-4 text-3xl'>Budget</div>
      <Button variant="secondary" effects={false} onClick={logout}>Logout</Button>
    </div>
  );
};
