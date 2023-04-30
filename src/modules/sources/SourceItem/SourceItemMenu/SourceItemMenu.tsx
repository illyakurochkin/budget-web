import React, {useRef, useState} from 'react';
import { ReactComponent as Dots } from '../../../../components/icons/dots.svg';
import {useOutsideClick} from '../../../../hooks/use-outside-click';
import {SourceItemMenuButton} from './SourceItemMenuButton';
import {SourceActionModal} from '../SourceActionModal';
import {useSourceAction} from '../hooks/use-source-action';
import {classes} from '../../../../libs/classes';
import {useSelectedSource} from '../hooks/use-selected-source';
import {SourceFragment} from '../../../../graphql/generated';

interface SourceItemMenuProps {
  onEdit: () => void,
  onDelete: () => void,
  onView: () => void,
  onRefresh: () => void,
  onClose: () => void,
  source: SourceFragment,
}

export const SourceItemMenu = ({onEdit, onDelete, onView, onRefresh, source}: SourceItemMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const {selectedSource, setSelectedSource, resetSelectedSource} = useSelectedSource();
  const isVisible = selectedSource?.id === source.id;

  // useOutsideClick(menuRef, () => setShow(false));
  useOutsideClick(menuRef, () => isVisible && resetSelectedSource());



  const renderMenu = () => (
    <div className='absolute right-0 -bottom-12 z-[100] flex flex-row gap-x-2' ref={menuRef}>
      <SourceItemMenuButton icon="delete" onClick={onDelete}/>
      <SourceItemMenuButton icon="edit" onClick={onEdit}/>
      <SourceItemMenuButton icon="view" onClick={onView}/>
      <SourceItemMenuButton icon="refresh" onClick={onRefresh}/>
    </div>
  );

  return (
    <div className={classes('relative invisible group-hover:visible flex items-center justify-center', isVisible && 'visible')}>
      {isVisible && renderMenu()}
      <div className='ml-1 py-2 -mr-1 cursor-pointer' >
        <Dots className='max-w-[20px] max-h-[20px] fill-text-primary' onClick={() => setSelectedSource(source)}/>
      </div>
    </div>
  );
};
