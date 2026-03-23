import { useAtomValue } from "jotai";

import { isMobileAtom } from "@/atoms/viewport";

export function useIsMobile() {
  return useAtomValue(isMobileAtom);
}
