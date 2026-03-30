import type { PropsWithChildren } from 'react';

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <h1>Home</h1>
      {children}
    </>
  );
}
