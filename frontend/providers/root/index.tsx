'use client';

import { domMax, LazyMotion } from 'framer-motion';
import type { JSX, PropsWithChildren } from 'react';

import { ProviderComposer } from '@/components/common/ProviderComposer';

import { DebugProvider } from './debug-provider';
import { EventProvider } from './event-provider';
import { JotaiStoreProvider } from './jotai-provider';
import { PageScrollInfoProvider } from './page-scroll-info-provider';

const baseContexts: JSX.Element[] = [
  // // @ts-expect-error
  // <ThemeProvider key="themeProvider" />,
  <JotaiStoreProvider key="jotaiStoreProvider" />,
  <LazyMotion features={domMax} strict key="framer" />
];

const webappContexts: JSX.Element[] = baseContexts;

export function WebAppProviders({ children }: PropsWithChildren) {
  return (
    <ProviderComposer contexts={webappContexts}>
      {children}

      <EventProvider key="viewportProvider" />
      <PageScrollInfoProvider key="PageScrollInfoProvider" />
      <DebugProvider key="debugProvider" />
    </ProviderComposer>
  );
}
