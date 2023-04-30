import {useCallback} from 'react';
import {useSelectedSource} from './use-selected-source';
import {ActionType, useSourceAction} from './use-source-action';
import {GetSourcesDocument, useDeleteSourceMutation} from '../../../../graphql/generated';

export const useDeleteSource = () => {
  const {action, setAction} = useSourceAction();
  const {selectedSource} = useSelectedSource();

  const [mutate, {loading, called}] = useDeleteSourceMutation({
    refetchQueries: [GetSourcesDocument],
  });

  const startDeletion = useCallback(() => {
    setAction(ActionType.Delete);
  }, [setAction]);

  const confirmDeletion = useCallback(async () => {
    if(!action || !selectedSource) return;
    await mutate({variables: { sourceId: selectedSource.id }})
  }, [action, mutate, selectedSource]);

  return {
    called,
    loading,
    startDeletion,
    confirmDeletion,
  }
};
