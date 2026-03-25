import { Provider } from 'jotai';
import type { PropsWithChildren } from 'react';

import { jotaiStore } from '@/lib/store';

export function JotaiStoreProvider({ children }: PropsWithChildren) {
  return <Provider store={jotaiStore}>{children}</Provider>;
}
