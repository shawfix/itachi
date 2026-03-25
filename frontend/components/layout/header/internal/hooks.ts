import { atom, useAtomValue } from 'jotai';

import { useIsMobile } from '@/atoms/hooks/viewport';
import { usePageScrollLocationSelector } from '@/providers/root/page-scroll-info-provider';

const headerMetaTitleAtom = atom('');
const headerMetaDescriptionAtom = atom('');
const headerMetaSlugAtom = atom('');
const headerShouldShowBgAtom = atom(true);

export const useHeaderShouldShowBg = () => useAtomValue(headerShouldShowBgAtom);

export const useMenuOpacity = () => {
  const headerOpacity = useHeaderBgOpacity();

  return 1 - headerOpacity;
};

export const useMenuVisibility = () => useMenuOpacity() > 0;

export const useHeaderBgOpacity = () => {
  const threshold = 50;
  const isMobile = useIsMobile();

  const headerShouldShowBg = useHeaderShouldShowBg() || isMobile;

  return usePageScrollLocationSelector(
    y =>
      headerShouldShowBg
        ? y >= threshold
          ? 1
          : Math.floor((y / threshold) * 100) / 100
        : 0,
    [headerShouldShowBg]
  );
};

const headerMetaShouldShowAtom = atom(get => {
  const title = get(headerMetaTitleAtom);
  const description = get(headerMetaDescriptionAtom);

  return title !== '' && description !== '';
});

export const useHeaderMetaShouldShow = () => {
  const v = useMenuVisibility();
  return useAtomValue(headerMetaShouldShowAtom) && !v;
};

export const useHeaderMetaInfo = () => {
  return {
    title: useAtomValue(headerMetaTitleAtom),
    description: useAtomValue(headerMetaDescriptionAtom),
    slug: useAtomValue(headerMetaSlugAtom)
  };
};

const headerHasMetaInfoAtom = atom(get => {
  const title = get(headerMetaTitleAtom);
  const description = get(headerMetaDescriptionAtom);

  return title !== '' && description !== '';
});

export const useHeaderHasMetaInfo = () => {
  return useAtomValue(headerHasMetaInfoAtom);
};
