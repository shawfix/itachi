import type { ReactNode } from 'react';
import { createElement as h } from 'react';

import {
  FaSolidCircleNotch,
  FaSolidDotCircle,
  FaSolidFeatherAlt,
  FaSolidHistory,
  FaSolidUserFriends,
  IcTwotoneSignpost
} from '@/components/icons/menu-collection';

export interface IHeaderMenu {
  title: string;
  path: string;
  type?: string;
  icon?: ReactNode;
  exclude?: string[];
}

export const headerMenuConfig: IHeaderMenu[] = [
  {
    title: '首页',
    path: '/',
    type: 'Home',
    icon: h(FaSolidDotCircle)
  },
  {
    title: '文稿',
    path: '/posts',
    type: 'Post',
    icon: h(IcTwotoneSignpost)
  },
  {
    title: '手记',
    type: 'Note',
    path: '/notes',
    icon: h(FaSolidFeatherAlt),
    exclude: ['/notes/topics']
  },

  {
    title: '时光',
    icon: h(FaSolidHistory),
    path: '/timeline'
  },
  {
    title: '友链',
    icon: h(FaSolidUserFriends),
    path: '/friends'
  },

  {
    title: '更多',
    icon: h(FaSolidCircleNotch),
    path: '#'
  }
];
