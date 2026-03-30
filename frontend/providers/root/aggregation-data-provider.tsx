'use client';

import { atom, useAtomValue } from 'jotai';
import { selectAtom } from 'jotai/utils';
import type { FC, PropsWithChildren } from 'react';
import { useCallback, useEffect, useRef } from 'react';

import { useBeforeMounted } from '@/hooks/common/use-before-mounted';
import { jotaiStore } from '@/lib/store';
import type { AggregateRoot } from '@/types/biz/AggregateRoot';
import type { AppConfig } from '@/types/biz/AppConfig';

export const AggregationProvider: FC<
  PropsWithChildren<{
    appConfig: AppConfig;
    aggregationData: AggregateRoot;
  }>
> = ({ children, appConfig, aggregationData }) => {
  useBeforeMounted(() => {
    if (!appConfig) {
      return;
    }

    jotaiStore.set(appConfigAtom, appConfig);
  });

  useBeforeMounted(() => {
    if (!aggregationData) {
      return;
    }

    jotaiStore.set(aggregationDataAtom, aggregationData);
  });

  useEffect(() => {
    if (!appConfig) {
      return;
    }

    jotaiStore.set(appConfigAtom, appConfig);
  }, [appConfig]);

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

const appConfigAtom = atom<AppConfig | null>(null);

export const useAppConfigSelector = <T,>(
  selector: (atomValue: AppConfig) => T,
  deps: any[] = []
): T | null => {
  return useAtomValue(
    selectAtom(
      appConfigAtom,
      useCallback(atomValue => {
        return !atomValue ? null : selector(atomValue);
      }, deps)
    )
  );
};
