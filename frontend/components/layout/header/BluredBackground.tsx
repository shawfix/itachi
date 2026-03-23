import { useHeaderBgOpacity } from "./hooks";

export function BluredBackground() {
  const opacity = useHeaderBgOpacity();

  return (
    <div
      className="absolute inset-0 -z-1 transform-gpu border-b border-primary bg-white/70 backdrop-blur-lg backdrop-saturate-150 dark:bg-zinc-800/70"
      style={{
        opacity
      }}
    />
  );
}
