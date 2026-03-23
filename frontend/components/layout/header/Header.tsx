"use client";
import { useIsMobile } from "@/hooks/useIsMobile";

import { AnimatedLogo } from "./AnimatedLogo";
import { BluredBackground } from "./BluredBackground";
import { HeaderContent } from "./HeaderContent";
import { HeaderMeta } from "./HeaderMeta";

export function LayoutHeader() {
  const isMobile = useIsMobile();

  return (
    <header className="fixed inset-x-0 top-0 z-10 h-[64px] overflow-hidden">
      <BluredBackground />
      <div className="mx-auto grid h-full max-w-[1100px] grid-cols-[64px_auto_64px] md:px-4">
        <div className="flex items-center justify-center">
          {/* {isMobile ? <HeaderDrawer /> : <AnimatedLogo />} */}
          {/* TODO: 窄屏 */}
          {isMobile ? null : <AnimatedLogo />}
        </div>
        <div className="relative flex items-center justify-center">
          {/* {isMobile ? <AnimatedLogo /> : <HeaderContent />}
          <HeaderMeta /> */}
          {isMobile ? <AnimatedLogo /> : <HeaderContent />}
          <HeaderMeta />
        </div>
        {/* <div className="flex items-center justify-center">
          <SearchButton />
        </div> */}
      </div>
    </header>
  );
}
