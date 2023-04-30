import React, {useCallback} from 'react';
import { Button } from '../../../../components/button';
import { Modal } from '../../../../components/modal';
import { useEditSource } from '../hooks/use-edit-source';
import {useSourceAction} from '../hooks/use-source-action';
import {useSelectedSource} from '../hooks/use-selected-source';

export const EditModal = () => {
  const { resetAction } = useSourceAction();
  const {selectedSource} = useSelectedSource();
  const {confirmEditing, loading} = useEditSource();

  const handleSubmit = useCallback(async () => {
    if(!selectedSource) return;
    await confirmEditing({name: selectedSource.name, tags: selectedSource.tags});
  }, [confirmEditing, selectedSource]);

  if(!selectedSource) return null;

  return (
    <Modal onClose={resetAction}>
      Edit Source - "{selectedSource.name}"

      <Button onClick={handleSubmit} loading={loading}>
        Confirm Editing
      </Button>
    </Modal>
  );
};
