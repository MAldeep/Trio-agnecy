import { useLocale } from "next-intl";

export function useIsArabic() {
  const locale = useLocale();
  const isArabic = locale === "ar";
  return { isArabic, locale };
}
