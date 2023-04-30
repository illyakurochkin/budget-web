import React from 'react';
import {Modal} from '../../../../../components/modal';
import {useSourceAction} from '../../hooks/use-source-action';
import {useSelectedSource} from '../../hooks/use-selected-source';

export const RefreshModal = () => {
  const {resetAction} = useSourceAction();
  const {selectedSource} = useSelectedSource();

  return (
    <Modal onClose={resetAction} size='compact'>
      REFRESH
    </Modal>
  );
};
