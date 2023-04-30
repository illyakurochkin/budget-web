import React, {useState} from 'react';
import {Modal} from '../../../../components/modal';
import {useDeleteSource} from '../hooks/use-delete-source';
import { Button } from '../../../../components/button';
import {useSourceAction} from '../hooks/use-source-action';
import {sleep} from '../../../../libs/sleep';
import {useSelectedSource} from '../hooks/use-selected-source';

export const DeleteModal = () => {
  const { resetAction } = useSourceAction();
  const {selectedSource} = useSelectedSource();
  const [loading, setLoading] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const { confirmDeletion } = useDeleteSource();

  const handleConfirmDeletion = async () => {
    setLoading(true);
    await sleep();
    await confirmDeletion();
    setLoading(false);
    setDone(true);
    await sleep();
    resetAction();
  };

  if(!selectedSource) return null;

  return (
    <Modal onClose={resetAction} size='compact'>
      <div className='flex flex-row flex-wrap items-center gap-2 justify-center p-3 justify-items-center text-center'>
        <span className='text-xl'>Delete</span>
        <span className='flex flex-row gap-2'>
          <span className='text-2xl underline underline-offset-4'>{selectedSource.name}</span>
          <span className='text-xl'>?</span>
        </span>
      </div>

      <div className='flex flex-row justify-center gap-2 pt-2'>
        <Button variant='primary' effects={false} onClick={handleConfirmDeletion} done={done} loading={loading}>
          Confirm Deletion
        </Button>
        <Button variant='secondary' effects={false} onClick={confirmDeletion}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};
