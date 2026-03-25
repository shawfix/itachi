'use client';

import type { ExtractAtomValue } from 'jotai';
import { useAtomValue } from 'jotai';
import { selectAtom } from 'jotai/utils';
import type { FC, PropsWithChildren } from 'react';

import { viewportAtom } from '@/atoms/viewport';
import { useIsClient } from '@/hooks/common/use-is-client';

const selector = (v: ExtractAtomValue<typeof viewportAtom>) => {
  return v.lg && v.w !== 0;
};

export const OnlyDesktop: FC<PropsWithChildren> = ({ children }) => {
  const isClient = useIsClient();
  const isLg = useAtomValue(selectAtom(viewportAtom, selector));

  if (!isClient) {
    return null;
  }

  if (!isLg) {
    return null;
  }

  return children;
};
