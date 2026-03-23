"use client";

import { site } from "@/config.json";

import { HeaderMetaInfoProvider } from "./HeaderMetaInfoProvider";
import { PageScrollInfoProvider } from "./PageScrollInfoProvider";
import { ViewportProvider } from "./ViewportProvider";

export function ClientProvider() {
  const { title, description, slug } = site;
  return (
    <>
      <HeaderMetaInfoProvider
        title={title}
        description={description}
        slug={slug}
      />
      <PageScrollInfoProvider />
      <ViewportProvider />
    </>
  );
}
