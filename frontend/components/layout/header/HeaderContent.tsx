"use client";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { menus } from "@/config.json";

import {
  usePathName,
  useShouldHeaderMenuBgShow,
  useShouldHeaderMetaShow
} from "./hooks";

export function HeaderContent() {
  return (
    <>
      <AnimatedMenu />
    </>
  );
}

function AnimatedMenu() {
  const shouldBgShow = useShouldHeaderMenuBgShow();
  const shouldHeaderMetaShow = useShouldHeaderMetaShow();

  return (
    <AnimatePresence>
      {!shouldHeaderMetaShow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <HeaderMenu isBgShow={shouldBgShow} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function HeaderMenu({ isBgShow }: { isBgShow: boolean }) {
  const pathName = usePathName();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [radius, setRadius] = useState(0);

  const background = `radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, rgb(var(--color-accent) / 0.12) 0%, transparent 65%)`;

  function handleMouseMove({
    clientX,
    clientY,
    currentTarget
  }: React.MouseEvent) {
    const bounds = currentTarget.getBoundingClientRect();
    setMouseX(clientX - bounds.left);
    setMouseY(clientY - bounds.top);
    setRadius(Math.hypot(bounds.width, bounds.height) / 2.5);
  }

  return (
    <nav
      className={clsx(
        "group pointer-events-auto relative rounded-full duration-200",
        {
          "bg-gradient-to-b from-zinc-50/70 to-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md dark:from-zinc-900/70 dark:to-zinc-800/90 dark:ring-zinc-100/10":
            isBgShow
        }
      )}
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute -inset-px -z-1 rounded-full opacity-0 duration-500 group-hover:opacity-100"
        style={{ background }}
        aria-hidden
      />
      <div className="flex px-4 text-sm">
        {menus.map(menu => (
          <HeaderMenuItem
            key={menu.name}
            href={menu.link}
            title={menu.name}
            icon={menu.icon}
            isActive={pathName === menu.link}
          />
        ))}
      </div>
    </nav>
  );
}

function HeaderMenuItem({
  href,
  isActive,
  title,
  icon
}: {
  href: string;
  isActive: boolean;
  title: string;
  icon: string;
}) {
  const router = useRouter();

  function navTo(path: string) {
    router.push(path);
  }
  return (
    <span
      className={clsx(
        "relative block cursor-pointer select-none px-4 py-1.5",
        isActive ? "text-accent" : "hover:text-accent"
      )}
      onClick={() => navTo(href)}
    >
      <div className="flex space-x-2">
        <AnimatePresence>
          {isActive ? (
            <motion.i
              className={clsx("iconfont", icon)}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            />
          ) : null}
        </AnimatePresence>
        <span>{title}</span>
      </div>
      {isActive && (
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
      )}
    </span>
  );
}
