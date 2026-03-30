import type { FC, PropsWithChildren } from 'react';

export const Content: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="relative z-1 px-4 pt-[4.5rem] fill-content md:px-0">
      {children}
    </main>
  );
};
