import { useAtomValue } from "jotai";
import { floor } from "lodash-es";

import {
  hasMetaInfoAtom,
  metaDescriptionAtom,
  metaSlugAtom,
  metaTitleAtom,
  pathNameAtom
} from "@/atoms/metaInfo";
import { pageScrollLocationAtom } from "@/atoms/scrollInfo";

const threshold = 60;

export function useHeaderBgOpacity() {
  const scrollY = useAtomValue(pageScrollLocationAtom);
  if (scrollY >= threshold * 2) {
    return 1;
  } else if (scrollY <= threshold) {
    return 0;
  } else {
    return floor((scrollY - threshold) / threshold, 2);
  }
}

export function useHasMetaInfo() {
  return useAtomValue(hasMetaInfoAtom);
}

export function useShouldHeaderMenuBgShow() {
  const scrollY = useAtomValue(pageScrollLocationAtom);
  return scrollY < threshold;
}

export function useShouldHeaderMetaShow() {
  const hasMetaInfo = useHasMetaInfo();
  const scrollY = useAtomValue(pageScrollLocationAtom);

  return hasMetaInfo && scrollY >= threshold;
}

export function useHeaderMetaInfo() {
  const title = useAtomValue(metaTitleAtom);
  const description = useAtomValue(metaDescriptionAtom);
  const slug = useAtomValue(metaSlugAtom);

  return {
    title,
    description,
    slug
  };
}

export function usePathName() {
  return useAtomValue(pathNameAtom);
}
