import type { PropsWithChildren } from 'react';

import { Content } from '../content/Content';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';

export function Root({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
