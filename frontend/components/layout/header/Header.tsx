import { memo } from 'react';

import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { OnlyMobile } from '@/components/ui/viewport/OnlyMobile';
import { clsxm } from '@/lib/helper';

import { AnimatedLogo } from './internal/AnimatedLogo';
import { BluredBackground } from './internal/BluredBackground';
import styles from './internal/grid.module.css';
import { HeaderCenterArea, HeaderLogoArea } from './internal/HeaderArea';
import { HeaderContent } from './internal/HeaderContent';
import { HeaderMeta } from './internal/HeaderMeta';
import { HeaderWithShadow } from './internal/HeaderWithShadow';

export function Header() {
  return (
    <ErrorBoundary>
      <MemoedHeader />
    </ErrorBoundary>
  );
}

const MemoedHeader = memo(() => {
  return (
    <HeaderWithShadow>
      <BluredBackground />
      <div
        className={clsxm(
          'relative mx-auto grid h-full min-h-0 max-w-7xl grid-cols-[4.5rem_auto_4.5rem] lg:px-8',
          styles['header--grid']
        )}
      >
        {/* TODO: Mobile */}
        {/* <HeaderLeftButtonArea>
          <HeaderDrawerButton />
        </HeaderLeftButtonArea> */}

        <HeaderLogoArea>
          <AnimatedLogo />

          <OnlyMobile>
            <HeaderMeta />
          </OnlyMobile>
        </HeaderLogoArea>

        <HeaderCenterArea>
          <HeaderContent />
          <HeaderMeta />
        </HeaderCenterArea>
      </div>
    </HeaderWithShadow>
  );
});
