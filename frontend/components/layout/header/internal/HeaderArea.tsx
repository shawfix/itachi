import type { FC, PropsWithChildren } from 'react';

import { OnlyDesktop } from '@/components/ui/viewport/OnlyDesktop';
import { clsxm } from '@/lib/helper';

import styles from './grid.module.css';

export const HeaderLogoArea: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={clsxm('relative', styles['header--grid__logo'])}>
      <div
        className={clsxm('relative flex size-full items-center justify-center')}
      >
        {children}
      </div>
    </div>
  );
};

export const HeaderCenterArea: FC<PropsWithChildren> = ({ children }) => {
  return (
    <OnlyDesktop>
      <div className="flex min-w-0 grow">
        <div className="relative flex grow items-center justify-center">
          {children}
        </div>
      </div>
    </OnlyDesktop>
  );
};
