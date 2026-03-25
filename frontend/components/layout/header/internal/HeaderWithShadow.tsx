'use client';

import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';

import { usePageScrollLocationSelector } from '@/providers/root/page-scroll-info-provider';

import { useHeaderBgOpacity } from './hooks';

export const HeaderWithShadow: FC<PropsWithChildren> = ({ children }) => {
  const headerOpacity = useHeaderBgOpacity();
  const showShadow = usePageScrollLocationSelector(
    y => y > 100 && headerOpacity > 0.8,
    [headerOpacity]
  );
  return (
    <header
      data-hide-print
      className={clsx(
        'fixed inset-x-0 top-0 z-[9] mr-[var(--removed-body-scroll-bar-size)] h-[4.5rem] overflow-hidden transition-shadow duration-200',
        showShadow &&
          'shadow-none shadow-neutral-100 lg:shadow-sm dark:shadow-neutral-800/50'
      )}
    >
      {children}
    </header>
  );
};
