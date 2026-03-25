'use client';

import type { JSX, PropsWithChildren } from 'react';

export function ProviderComposer({
  contexts,
  children
}: PropsWithChildren & { contexts: JSX.Element[] }) {
  return contexts.reduceRight((kids: any, parent: any) => {
    return { ...parent, props: { ...parent.props, children: kids } };
  }, children);
}
