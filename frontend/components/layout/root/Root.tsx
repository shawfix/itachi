import type { PropsWithChildren } from 'react';

import { Header } from '../header/Header';

export function Root({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      {/* <Content>{children}</Content>
      <Footer /> */}
    </>
  );
}
