import { useTranslations } from "next-intl";
import BrandIdentity from "./BrandIdentity";
import PrintDesign from "./PrintDesign";
import SocialMediaDesign from "./SocialMediaDesign";
import SubService from "./SubService";

export default function GraphicDesignSubServices() {
  const t = useTranslations("Services");
  return (
    <div className="w-full lg:w-1/2">
      <SubService
        subText={t("GraphicDesign.BrandIdentityDevelopment")}
        Component={BrandIdentity}
        id="sub-section"
        subTextColor="text-white"
      />
      <SubService
        subText={t("GraphicDesign.PrintDesign")}
        Component={PrintDesign}
        id="sub-section"
        subTextColor="text-white"
      />
      <SubService
        subText={t("GraphicDesign.SocialMediaDesign")}
        Component={SocialMediaDesign}
        id="sub-section"
        subTextColor="text-white"
      />
    </div>
  );
}
