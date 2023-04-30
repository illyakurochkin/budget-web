import {useCallback} from 'react';
import {useSelectedSource} from './use-selected-source';
import {ActionType, useSourceAction} from './use-source-action';
import {useRefreshSourceMutation} from '../../../../graphql/generated';

type RefreshData = { amount: number, currency: string };

export const useRefreshSource = () => {
  const {action, setAction} = useSourceAction();
  const {selectedSource} = useSelectedSource();

  const [mutate, {loading}] = useRefreshSourceMutation({
    onCompleted: () => setAction(null),
  });

  const startRefresh = useCallback(() => {
    setAction(ActionType.Refresh);
  }, [setAction]);

  const confirmRefresh = useCallback(async ({amount, currency}: RefreshData) => {
    if (!action || !selectedSource) return;
    await mutate({
      variables: {
        input: {
          sourceId: selectedSource.id,
          amount,
          currency,
        }
      }
    });
  }, [action, mutate, selectedSource]);

  return {
    loading,
    startRefresh,
    confirmRefresh,
  };
};
