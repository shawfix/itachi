import { atom, useAtomValue } from 'jotai';
import { selectAtom } from 'jotai/utils';
import { useCallback } from 'react';

type AggregateRoot = any;

export const aggregationDataAtom = atom<null | AggregateRoot>(null);

export const useAggregationSelector = <T,>(
  selector: (atomValue: AggregateRoot) => T,
  deps: any[] = []
): T | null => {
  return useAtomValue(
    selectAtom(
      aggregationDataAtom,
      useCallback(atomValue => {
        return !atomValue ? null : selector(atomValue);
      }, deps)
    )
  );
};
