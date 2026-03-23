import chroma from "chroma-js";

const themeColor = {
  accent: [
    { light: "#F55555", dark: "#FCCF31" },
    { light: "#0396FF", dark: "#ABDCFF" },
    { light: "#fb7287", dark: "#99D8CF" },
    { light: "#F072B6", dark: "#FFF886" },
    { light: "#9F44D3", dark: "#E2B0FF" },
    { light: "#FF6666", dark: "#A1CCD1" },
    { light: "#F6416C", dark: "#838BC6" },
    { light: "#32CCBC", dark: "#90F7EC" },
    { light: "#33A6B8", dark: "#79F1A4" },
    { light: "#F55555", dark: "#FCCF31" }
  ],
  bg: {
    primary: { light: "#ffffff", dark: "#1c1c1e" },
    secondary: { light: "#f4f4f5", dark: "#27272a" }
  },
  text: {
    primary: { light: "#373a3c", dark: "#ffffff" },
    secondary: { light: "#71717a", dark: "#d1d5db" }
  },
  border: {
    primary: { light: "#e4e4e7", dark: "#3f3f46" }
  }
};

function pickRandomAccent() {
  const seed = (Math.random() * themeColor.accent.length) | 0;
  return themeColor.accent[seed];
}

function getRgbVal(color: chroma.Color) {
  return color.rgb().join(" ");
}

export function getAccentColorStyleText() {
  const accentColor = pickRandomAccent();

  const rootBgColor = {
    light: chroma.mix("rgb(250,250,250)", accentColor.light, 0.05, "rgb"),
    dark: chroma.mix("rgb(0,2,18)", accentColor.dark, 0.12, "rgb")
  };

  return `html {
    --color-accent: ${getRgbVal(chroma(accentColor.light))};
    --color-bg-root: ${getRgbVal(rootBgColor.light)};
    --color-bg-primary: ${getRgbVal(chroma(themeColor.bg.primary.light))};
    --color-bg-secondary: ${getRgbVal(chroma(themeColor.bg.secondary.light))};
    --color-text-primary: ${getRgbVal(chroma(themeColor.text.primary.light))};
    --color-text-secondary: ${getRgbVal(chroma(themeColor.text.secondary.light))};
    --color-border-primary: ${getRgbVal(chroma(themeColor.border.primary.light))};
  }
  [data-theme='dark'] {
    --color-accent: ${getRgbVal(chroma(accentColor.dark))};
    --color-bg-root: ${getRgbVal(rootBgColor.dark)};
    --color-bg-primary: ${getRgbVal(chroma(themeColor.bg.primary.dark))};
    --color-bg-secondary: ${getRgbVal(chroma(themeColor.bg.secondary.dark))};
    --color-text-primary: ${getRgbVal(chroma(themeColor.text.primary.dark))};
    --color-text-secondary: ${getRgbVal(chroma(themeColor.text.secondary.dark))};
    --color-border-primary: ${getRgbVal(chroma(themeColor.border.primary.dark))};
  }`;
}
