'use client';

import clsx from 'clsx';
import {
  LayoutGroup,
  m,
  useMotionTemplate,
  useMotionValue
} from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC, MouseEvent, PropsWithChildren, ReactNode } from 'react';
import { memo, useCallback } from 'react';

import { clsxm } from '@/lib/helper';

import type { IHeaderMenu } from '../config';
import { useHeaderConfig } from './HeaderDataConfigureProvider';
import { useHeaderHasMetaInfo, useMenuOpacity } from './hooks';

export const HeaderContent: FC = () => {
  return (
    <LayoutGroup>
      <AnimatedMenu>
        <ForDesktop />
      </AnimatedMenu>
    </LayoutGroup>
  );
};

const AnimatedMenu: FC<PropsWithChildren> = ({ children }) => {
  const opacity = useMenuOpacity();
  const hasMetaInfo = useHeaderHasMetaInfo();

  return (
    <m.div
      className="duration-100"
      style={{
        opacity: hasMetaInfo ? opacity : 1,
        visibility: opacity === 0 && hasMetaInfo ? 'hidden' : 'visible'
      }}
      initial={{
        y: 10,
        opacity: 0
      }}
      animate={{ y: 0, opacity: 1 }}
    >
      {children}
    </m.div>
  );
};

const ForDesktop: FC = () => {
  const { config: headerMenuConfig } = useHeaderConfig();
  const pathname = usePathname();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);

  const opacity = useMenuOpacity();

  const hasMetaInfo = useHeaderHasMetaInfo();
  const shouldHideNavBg = !hasMetaInfo && opacity === 0;

  const handleMouseMove = useCallback(
    ({ clientX, clientY, currentTarget }: MouseEvent) => {
      const bounds = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - bounds.left);
      mouseY.set(clientY - bounds.top);
      radius.set(Math.hypot(bounds.width, bounds.height) / 2.5);
    },
    [mouseX, mouseY, radius]
  );

  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, rgb(var(--color-accent) / 0.12) 0%, transparent 65%)`;

  return (
    <m.nav
      layout="size"
      onMouseMove={handleMouseMove}
      className={clsxm(
        'relative',
        'rounded-full bg-gradient-to-b from-zinc-50/70 to-white/90',
        'shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5',
        'dark:from-zinc-900/70 dark:to-zinc-800/90 dark:ring-zinc-100/10',
        'group [--spotlight-color:oklch(var(--a)_/_0.12)]',
        'pointer-events-auto duration-200',
        shouldHideNavBg && '!bg-none !shadow-none !ring-transparent'
      )}
    >
      <m.div
        className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background }}
        aria-hidden="true"
      />
      <div className="flex px-4 font-medium text-zinc-800 dark:text-zinc-200">
        {headerMenuConfig.map(section => {
          return (
            <HeaderMenuItem
              key={section.path}
              section={section}
              isActive={
                pathname === section.path ||
                (pathname.startsWith(`${section.path}/`) &&
                  !section.exclude?.includes(pathname)) ||
                false
              }
            />
          );
        })}
      </div>
    </m.nav>
  );
};

const HeaderMenuItem = memo<{
  section: IHeaderMenu;
  isActive: boolean;
}>(({ section, isActive }) => {
  const href = section.path;

  return (
    <AnimatedItem
      href={href}
      isActive={isActive}
      className="transition-[padding]"
    >
      <span className="relative flex items-center">
        {isActive && (
          <m.span
            layoutId="header-menu-icon"
            className="mr-2 flex items-center"
          >
            {section.icon}
          </m.span>
        )}
        <m.span layout>{section.title}</m.span>
      </span>
    </AnimatedItem>
  );
});
HeaderMenuItem.displayName = 'HeaderMenuItem';

function AnimatedItem({
  href,
  children,
  className,
  isActive
}: {
  href: string;
  children: ReactNode;
  className: string;
  isActive?: boolean;
}) {
  const isExternal = href.startsWith('http');
  const As = isExternal ? 'a' : Link;

  return (
    <div>
      <As
        href={href}
        className={clsxm(
          'relative block whitespace-nowrap px-4 py-2 transition',
          isActive ? 'text-accent' : 'hover:text-accent/80',
          isActive ? 'active' : '',
          className
        )}
        target={isExternal ? '_blank' : undefined}
      >
        {children}
        {isActive && (
          <m.span
            className={clsx(
              'absolute inset-x-1 -bottom-px h-px',
              'bg-gradient-to-r from-accent/0 via-accent/70 to-accent/0'
            )}
            layoutId="active-nav-item"
          />
        )}
      </As>
    </div>
  );
}
