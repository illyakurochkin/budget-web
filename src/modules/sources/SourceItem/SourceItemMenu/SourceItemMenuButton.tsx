import React from 'react';
import {Button} from '../../../../components/button';
import {ReactComponent as Delete} from '../../../../components/icons/delete.svg';
import {ReactComponent as Edit} from '../../../../components/icons/edit.svg';
import {ReactComponent as View} from '../../../../components/icons/view.svg';
import {ReactComponent as Refresh} from '../../../../components/icons/refresh.svg';

const ICONS = {
  view: View,
  delete: Delete,
  edit: Edit,
  refresh: Refresh,
};

interface SourceItemMenuButtonProps {
  onClick: () => void,
  icon: keyof typeof ICONS,
}

export const SourceItemMenuButton = ({onClick, icon}: SourceItemMenuButtonProps) => {
  const Icon = ICONS[icon]
  return (
    <div className='border-2 bg-background-primary p-2 rounded-xl'>
      <Button effects={false} className='flex items-center justify-center p-0 pl-0 pr-0 pb-0 pt-0 w-[30px] h-[30px]' onClick={onClick}>
        <Icon className='w-[20px] h-[20px] text-current'/>
      </Button>
    </div>
  );
};
