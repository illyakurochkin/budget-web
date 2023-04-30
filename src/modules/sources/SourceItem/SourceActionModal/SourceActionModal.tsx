import React from 'react';
import {ActionType, useSourceAction} from '../hooks/use-source-action';
import {RefreshModal} from './RefreshModal';
import {EditModal} from './EditModal';
import { DeleteModal } from './DeleteModal';
import {useSelectedSource} from '../hooks/use-selected-source';

const SOURCE_ACTION_MODAL = {
  [ActionType.Delete]: DeleteModal,
  [ActionType.Refresh]: RefreshModal,
  [ActionType.Edit]: EditModal,
}

export const SourceActionModal = () => {
  const { action } = useSourceAction();
  const { selectedSource } = useSelectedSource();

  if(!action || !selectedSource) return null;

  const ActionModal = SOURCE_ACTION_MODAL[action];
  return <ActionModal />
};
