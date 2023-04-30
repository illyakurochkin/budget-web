import {create} from 'zustand';
import {SourceFragment} from '../../../../graphql/generated';

interface SelectedSourceState {
  selectedSource: SourceFragment | null,
  setSelectedSource: (source: SourceFragment) => void,
  resetSelectedSource: () => void,
}
export const useSelectedSource = create<SelectedSourceState>()(set => ({
  selectedSource: null,
  setSelectedSource: (source) => set({selectedSource: source}),
  resetSelectedSource: () => set({selectedSource: null}),
}));
