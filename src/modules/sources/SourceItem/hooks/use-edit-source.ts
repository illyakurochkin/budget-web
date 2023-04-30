import {useCallback} from 'react';
import {useSelectedSource} from './use-selected-source';
import {ActionType, useSourceAction} from './use-source-action';
import {UpdateSourceInput, useEditSourceMutation} from '../../../../graphql/generated';

export const useEditSource = () => {
  const {action, setAction} = useSourceAction();
  const {selectedSource} = useSelectedSource();

  const [mutate, {loading}] = useEditSourceMutation({
    onCompleted: () => setAction(null),
  });

  const startEditing = useCallback(() => {
    setAction(ActionType.Edit);
  }, [setAction]);

  const confirmEditing = useCallback(async (updatedSource: UpdateSourceInput) => {
    if (!action || !selectedSource) return;
    await mutate({
      variables: {
        sourceId: selectedSource.id,
        input: {
          name: updatedSource.name,
          tags: updatedSource.tags,
        }
      }
    });
  }, [action, mutate, selectedSource]);

  return {
    loading,
    startEditing,
    confirmEditing,
  };
};
