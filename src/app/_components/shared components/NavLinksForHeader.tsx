import { NavLinks } from "../(homePage)/NavLinks";
import { usePathname } from "next/navigation";
import { useIsArabic } from "./useIsArabic";
import Link from "next/link";
import clsx from "clsx";
import { cairo, inter } from "@/app/fonts";

export default function NavLinksForHeader() {
  const pathname = usePathname();
  const { locale, isArabic } = useIsArabic();
  return (
    <div className="w-1/2 lg:flex justify-between items-center hidden links">
      {NavLinks.map((el, idx) => {
        const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
        const isActive =
          pathWithoutLocale === el.to ||
          (pathWithoutLocale.startsWith(el.to) && el.to !== "/");
        return (
          <Link
            href={`/${locale}${el.to}`}
            key={idx}
            className={clsx(
              "text-[18px]",
              {
                "font-bold text-amber-400": isActive,
                "font-semibold text-black": !isActive,
              },
              isArabic ? cairo.className : inter.className,
            )}
          >
            {isArabic ? el.titleAr : el.titleEn}
          </Link>
        );
      })}
    </div>
  );
}
