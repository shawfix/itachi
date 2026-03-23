import { useSetAtom } from "jotai";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import {
  metaDescriptionAtom,
  metaSlugAtom,
  metaTitleAtom,
  pathNameAtom
} from "@/atoms/metaInfo";

export function HeaderMetaInfoProvider({
  title = "",
  description = "",
  slug = ""
}: {
  title?: string;
  description?: string;
  slug?: string;
}) {
  const pathname = usePathname();

  const setPathName = useSetAtom(pathNameAtom);
  const setTitle = useSetAtom(metaTitleAtom);
  const setDescription = useSetAtom(metaDescriptionAtom);
  const setSlug = useSetAtom(metaSlugAtom);

  useEffect(() => {
    // 去掉 pathName 结尾的 '/'
    if (pathname !== "/") {
      setPathName(pathname.replace(/\/$/, ""));
    } else {
      setPathName(pathname);
    }
    setTitle(title);
    setDescription(description);
    setSlug(slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, title, description, slug]);

  return null;
}
