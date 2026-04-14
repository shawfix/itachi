import { AnimatePresence, m } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { useEffect, useRef, useState } from 'react';

import { softBouncePreset } from '@/constants/spring';
import type { Content } from '@/types/biz/content/Content';
import type { Moment } from '@/types/biz/content/Moment';
import type { Post } from '@/types/biz/content/Post';
import { ContentType } from '@/types/biz/content/public';

export function ContentList({ data }: { data: Content[] | void }) {
  if (!data || data.length === 0) {
    return <div>No content available</div>;
  }

  return (
    <m.section
      initial={{ opacity: 0.0001, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={softBouncePreset}
      className="mt-8 flex flex-col gap-4 lg:mt-0"
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-medium leading-loose">最近更新的文稿</h2>
      <ul className="list-none">
        {data.map(item => (
          <li key={item.contentType + item.id} className="mb-4 rounded-lg p-0">
            {item.contentType === ContentType.MOMENT ? (
              <MomentCard data={item as Moment} />
            ) : (
              <PostCard data={item as Post} />
            )}
          </li>
        ))}
      </ul>
    </m.section>
  );
}

function MomentCard({ data }: { data: Moment }) {
  return (
    <CardWrapper>
      {/* <h2 className="relative text-2xl font-bold">{data.text}</h2> */}
      <p className="overflow-hidden">{data.text}</p>
    </CardWrapper>
  );
}

function PostCard({ data }: { data: Post }) {
  return (
    <CardWrapper>
      <h2 className="relative text-2xl font-bold">{data.title}</h2>
      <p className="mt-4 overflow-hidden">{data.text}</p>
    </CardWrapper>
  );
}

function CardWrapper({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null);
  const [enter, setEnter] = useState(false);

  const handleMouseEnter = () => {
    setEnter(true);
  };
  const handleMouseLeave = () => {
    setEnter(false);
  };
  const handleFocus = () => {
    setEnter(true);
  };
  const handleBlur = () => {
    setEnter(false);
  };

  useEffect(() => {
    const $ref = ref.current;
    if (!$ref) {
      return;
    }

    $ref.addEventListener('mouseenter', handleMouseEnter);
    $ref.addEventListener('mouseleave', handleMouseLeave);
    $ref.addEventListener('focus', handleFocus);
    $ref.addEventListener('blur', handleBlur);

    return () => {
      $ref.removeEventListener('mouseenter', handleMouseEnter);
      $ref.removeEventListener('mouseleave', handleMouseLeave);
      $ref.removeEventListener('focus', handleFocus);
      $ref.removeEventListener('blur', handleBlur);
    };
  }, []);

  return (
    <div ref={ref} className="group relative cursor-pointer py-8">
      {children}

      <AnimatePresence>
        {enter && (
          <m.div
            className="absolute -inset-x-4 inset-y-4 -z-1 rounded-lg bg-accent"
            initial={{ opacity: 0.02, scale: 0.95 }}
            animate={{ opacity: 0.1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            layout
            layoutId="content-card-hover-overlay"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
