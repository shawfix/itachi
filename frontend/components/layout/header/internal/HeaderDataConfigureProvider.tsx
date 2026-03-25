'use client';

import type { FC, PropsWithChildren } from 'react';
import { createContext, use, useMemo } from 'react';

import { headerMenuConfig as baseHeaderMenuConfig } from '../config';

const HeaderMenuConfigContext = createContext({
  config: baseHeaderMenuConfig
});

export const useHeaderConfig = () => use(HeaderMenuConfigContext);

export const HeaderDataConfigureProvider: FC<PropsWithChildren> = ({
  children
}) => {
  return (
    <HeaderMenuConfigContext
      value={useMemo(() => {
        return { config: baseHeaderMenuConfig };
      }, [])}
    >
      {children}
    </HeaderMenuConfigContext>
  );
};
