'use client';

import { atom, useAtomValue } from 'jotai';
import { selectAtom } from 'jotai/utils';
import type { FC, PropsWithChildren } from 'react';
import { useCallback, useEffect, useRef } from 'react';

import { useBeforeMounted } from '@/hooks/common/use-before-mounted';
import { jotaiStore } from '@/lib/store';
import type { AggregateRoot } from '@/types/biz/AggregateRoot';

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

export const AggregationProvider: FC<
  PropsWithChildren<{
    aggregationData: AggregateRoot;
  }>
> = ({ children, aggregationData }) => {
  useBeforeMounted(() => {
    if (!aggregationData) {
      return;
    }

    jotaiStore.set(aggregationDataAtom, aggregationData);
  });

  useEffect(() => {
    if (!aggregationData) {
      return;
    }

    jotaiStore.set(aggregationDataAtom, aggregationData);
  }, [aggregationData]);

  const callOnceRef = useRef(false);

  useEffect(() => {
    if (callOnceRef.current) {
      return;
    }

    if (!aggregationData?.user) {
      return;
    }

    callOnceRef.current = true;
  }, [aggregationData?.user]);

  return children;
};
