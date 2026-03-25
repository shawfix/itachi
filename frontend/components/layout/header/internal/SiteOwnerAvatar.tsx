import Image from 'next/image';
import type { FC } from 'react';

import { clsxm } from '@/lib/helper';
import { useAggregationSelector } from '@/providers/root/aggregation-data-provider';

export const SiteOwnerAvatar: FC<{ className: string }> = ({ className }) => {
  const avatar = useAggregationSelector(data => data.user.avatar);

  const isLiving = false;

  if (!avatar) {
    return null;
  }

  return (
    <div
      role={isLiving ? 'button' : 'img'}
      className={clsxm(
        'overflow pointer-events-none relative z-[9] select-none',
        isLiving ? 'cursor-pointer rounded-full' : '',
        className
      )}
    >
      <Image
        src={avatar}
        alt="Site Owner Avatar"
        width={40}
        height={40}
        className={clsxm(
          'ring-2 ring-slate-200 dark:ring-neutral-800',
          isLiving ? 'rounded-full' : 'mask mask-squircle'
        )}
      />
      {isLiving && (
        <>
          <p className="absolute bottom-0 right-0 z-1 rounded-md bg-red-400 p-1 font-[system-ui] text-[6px] text-white dark:bg-orange-700">
            LIVE
          </p>

          <div className="absolute inset-0 scale-100 animate-ping rounded-full ring-2 ring-red-500/80" />
        </>
      )}
    </div>
  );
};
