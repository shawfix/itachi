import { headers } from 'next/headers';

import { ThemeSwitcher } from '@/components/ui/theme-switcher/ThemeSwitcher';
import { REQUEST_GEO, REQUEST_IP } from '@/constants/system';

export const Footer = async () => {
  const header = await headers();
  const geo = header.get(REQUEST_GEO);
  const ip = header.get(REQUEST_IP);
  return (
    <footer
      data-private-info={JSON.stringify({
        geo,
        ip
      })}
      data-hide-print
      className="border-x-uk-separator-opaque-light dark:border-uk-separator-opaque-dark relative z-1 mt-32 border-t bg-[var(--root-bg)] py-6 text-base-content/80"
    >
      <div className="px-4 sm:px-8">
        <div className="relative mx-auto max-w-7xl lg:px-8">
          {/* <FooterInfo /> */}

          <div className="mt-6 block text-center md:absolute md:bottom-0 md:right-0 md:mt-0">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
};
