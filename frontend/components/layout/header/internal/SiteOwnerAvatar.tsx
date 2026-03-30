import Image from 'next/image';
import type { FC } from 'react';

import { clsxm } from '@/lib/helper';
import { useAggregationSelector } from '@/providers/root/aggregation-data-provider';

export const SiteOwnerAvatar: FC<{ className: string }> = ({ className }) => {
  const avatar = useAggregationSelector(data => data.user.avatar);

  if (!avatar) {
    return null;
  }

  return (
    <div
      role="img"
      className={clsxm(
        'overflow pointer-events-none relative z-[9] select-none',
        className
      )}
    >
      <Image
        src={avatar}
        alt="Site Owner Avatar"
        width={40}
        height={40}
        className="mask mask-squircle ring-2 ring-slate-200 dark:ring-neutral-800"
      />
    </div>
  );
};
