import {create} from 'zustand';

export enum ActionType {
  Delete = 'delete',
  Edit = 'edit',
  Refresh = 'refresh',
}

interface ActionState {
  action: ActionType | null,
  setAction: (action: ActionType | null) => void,
  resetAction: () => void,
}

export const useSourceAction = create<ActionState>()(set => ({
  action: null,
  setAction: (action: ActionType | null) => set({action}),
  resetAction: () => set({action: null}),
}));
