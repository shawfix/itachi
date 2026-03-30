'use client';

import clsx from 'clsx';
import { m } from 'framer-motion';
import Image from 'next/image';
import type { FC } from 'react';
import { createElement } from 'react';

import { BottomToUpTransitionView } from '@/components/ui/transition/BottomToUpTransitionView';
import { TextUpTransitionView } from '@/components/ui/transition/TextUpTransitionView';
import { softBouncePreset } from '@/constants/spring';
import { clsxm } from '@/lib/helper';
import {
  useAggregationSelector,
  useAppConfigSelector
} from '@/providers/root/aggregation-data-provider';

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}

const TwoColumnLayout: FC<{
  children:
    | [React.ReactNode, React.ReactNode]
    | [React.ReactNode, React.ReactNode, React.ReactNode];
  leftContainerClassName?: string;
  rightContainerClassName?: string;
  className?: string;
}> = ({
  children,
  leftContainerClassName,
  rightContainerClassName,
  className
}) => {
  return (
    <div
      className={clsxm(
        'relative block size-full min-w-0 max-w-[1800px] flex-col flex-wrap items-center lg:flex lg:flex-row',
        className
      )}
    >
      {children.slice(0, 2).map((child, i) => {
        return (
          <div
            key={i}
            className={clsxm(
              'flex w-full flex-col center lg:h-auto lg:w-1/2',
              i === 0 ? leftContainerClassName : rightContainerClassName
            )}
          >
            <div className="relative max-w-full lg:max-w-2xl">{child}</div>
          </div>
        );
      })}

      {children[2]}
    </div>
  );
};

const Hero: FC = () => {
  const hero = useAppConfigSelector(config => {
    return {
      ...config.hero
    };
  });

  const { title, description } = hero || {};
  const titleAnimateD = title
    ? title.template.reduce((acc, cur) => {
        return acc + (cur.text?.length || 0);
      }, 0) * 50
    : 0;

  const siteOwner = useAggregationSelector(agg => {
    return agg.user;
  });
  const { avatar } = siteOwner || {};

  return (
    <div className="mt-20 min-w-0 max-w-screen overflow-hidden lg:mt-[-4.5rem] lg:h-dvh lg:min-h-[800px]">
      <TwoColumnLayout leftContainerClassName="mt-[120px] lg:mt-0 h-[15rem] lg:h-1/2">
        <>
          <m.div
            className="group relative text-center leading-[4] lg:text-left [&_*]:inline-block"
            initial={{ opacity: 0.0001, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={softBouncePreset}
          >
            {title?.template.map((t, i) => {
              const { type } = t;
              const prevAllTextLength = title.template
                .slice(0, i)
                .reduce((acc, cur) => {
                  return acc + (cur?.text?.length || 0);
                }, 0);

              return createElement(
                type,
                { key: i, className: t.class },
                t.text && (
                  <TextUpTransitionView
                    initialDelay={prevAllTextLength * 0.05}
                    eachDelay={0.05}
                  >
                    {t.text}
                  </TextUpTransitionView>
                )
              );
            })}
          </m.div>

          <BottomToUpTransitionView
            delay={titleAnimateD + 500}
            transition={softBouncePreset}
            className="my-3 text-center lg:text-left"
          >
            <span className="opacity-80">{description}</span>
          </BottomToUpTransitionView>
        </>
        <div
          className={clsx('lg:size-[300px]', 'size-[200px]', 'mt-24 lg:mt-0')}
        >
          <Image
            height={300}
            width={300}
            src={avatar!}
            alt="Site Owner Avatar"
            className={clsxm(
              'aspect-square rounded-full border border-slate-200 dark:border-neutral-800',
              'w-full'
            )}
          />
        </div>

        <m.div
          initial={{ opacity: 0.0001, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={softBouncePreset}
          className={clsx(
            'inset-x-0 bottom-0 mt-12 flex flex-col center lg:absolute lg:mt-0',

            'text-neutral-800/80 center dark:text-neutral-200/80'
          )}
        >
          <small>
            当第一颗卫星飞向大气层外，我们便以为自己终有一日会征服宇宙。
          </small>
          <span className="mt-8 animate-bounce">
            <i className="icon-[mingcute--right-line] rotate-90 text-2xl" />
          </span>
        </m.div>
      </TwoColumnLayout>
    </div>
  );
};
