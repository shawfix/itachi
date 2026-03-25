'use client';

import { AnimatePresence, m } from 'framer-motion';
import { useRouter } from 'next/navigation';
import type { FC } from 'react';

import { useResolveAdminUrl } from '@/atoms/hooks/url';
import { useViewport } from '@/atoms/hooks/viewport';
import { isLogged } from '@/atoms/owner';
import { useSingleAndDoubleClick } from '@/hooks/common/use-single-double-click';
import { Routes } from '@/lib/route-builder';

import { useHeaderMetaShouldShow } from './hooks';
import { SiteOwnerAvatar } from './SiteOwnerAvatar';

export const AnimatedLogo: FC = () => {
  const shouldShowMeta = useHeaderMetaShouldShow();

  const isDesktop = useViewport($ => $.lg && $.w !== 0);

  if (isDesktop) {
    return (
      <>
        <TapableLogo />
        {/* <Activity /> */}
      </>
    );
  }

  return (
    <AnimatePresence>
      {!shouldShowMeta && (
        <m.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex items-center"
        >
          {/* <Activity /> */}
          <TapableLogo />
        </m.div>
      )}
    </AnimatePresence>
  );
};

const TapableLogo: FC = () => {
  const router = useRouter();

  const resolveAdminUrl = useResolveAdminUrl();

  const fn = useSingleAndDoubleClick(
    () => {
      router.push(Routes.Home);
    },
    () => {
      if (isLogged()) {
        location.href = resolveAdminUrl();

        return;
      }

      router.push(
        `${Routes.Login}?redirect=${encodeURIComponent(location.pathname)}`
      );
    }
  );

  return (
    <button type="button" onClick={fn}>
      <SiteOwnerAvatar className="cursor-pointer" />
      <span className="sr-only">Owner Avatar</span>
    </button>
  );
};
