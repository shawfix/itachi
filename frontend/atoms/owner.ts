import { atom } from 'jotai';

import { jotaiStore } from '@/lib/store';

export const isLoggedAtom = atom(false);

export const isLogged = () => jotaiStore.get(isLoggedAtom);
