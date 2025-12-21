import { useTranslations } from "next-intl";
import ContentCreation from "./ContentCreation";
import DigitalMarketingSubServices from "./DigitalMarketingSubServices";
import GraphicDesignSubServices from "./GraphicDesignSubServices";
import MediaBuying from "./MediaBuying";
import MediaProductionSubServices from "./MediaProductionSubServices";
import SEOOptimization from "./SEOOptimization";
import SingleService from "./SingleService";
import SingleServiceWithoutSubs from "./SingleServiceWithoutSubs";
import WebMobileAppsSubServices from "./WebMobileAppsSubServices";

export default function Services() {
  const t = useTranslations("Services");
  return (
    <div className="w-full">
      <SingleService
        flex_dir="lg:flex-row"
        service_name={t("DigitalMarketing.title")}
        ComponentOfsub={DigitalMarketingSubServices}
      />
      <SingleServiceWithoutSubs
        ContentTitle={t("ContentCreation")}
        Component={ContentCreation}
        bgColor="bg-black"
        txtColor="text-white"
      />

      <SingleService
        flex_dir="lg:flex-row-reverse"
        service_name={t("GraphicDesign.title")}
        ComponentOfsub={GraphicDesignSubServices}
      />
      <SingleServiceWithoutSubs
        ContentTitle={t("SEO")}
        Component={SEOOptimization}
        bgColor="bg-[#F0BA37]"
        txtColor="text-black"
      />
      <SingleService
        flex_dir="lg:flex-row"
        service_name={t("WebMobileAppsSubServices.title")}
        ComponentOfsub={WebMobileAppsSubServices}
      />
      <SingleServiceWithoutSubs
        ContentTitle={t("MediaBuying")}
        Component={MediaBuying}
        bgColor="bg-black"
        txtColor="text-white"
      />
      <SingleService
        flex_dir="lg:flex-row-reverse"
        service_name={t("MediaProductionSubServices.title")}
        ComponentOfsub={MediaProductionSubServices}
      />
    </div>
  );
}
