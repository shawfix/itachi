'use client';

import type { FC, PropsWithChildren } from 'react';

import { useIsMobile } from '@/atoms/hooks/viewport';
import { useIsClient } from '@/hooks/common/use-is-client';

export const OnlyMobile: FC<PropsWithChildren> = ({ children }) => {
  const isClient = useIsClient();
  const isMobile = useIsMobile();

  if (!isClient) return null;
  if (!isMobile) return null;
  return children;
};
