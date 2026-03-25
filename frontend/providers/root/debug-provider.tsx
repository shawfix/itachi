import type { PropsWithChildren } from 'react';
import { Suspense } from 'react';

export function DebugProvider({ children }: PropsWithChildren) {
  return (
    <>
      <Suspense>
        <div data-hide-print>
          {/* <ReactQueryDevtools buttonPosition="bottom-left" /> */}
        </div>
      </Suspense>
      {children}
    </>
  );
}
