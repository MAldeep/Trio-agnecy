import { useTranslations } from "next-intl";
import ContentCreation from "./singleServiceWithoutSubs/ContentCreation";
import DigitalMarketingSubServices from "./singleService/DigitalMarketingSubServices";
import GraphicDesignSubServices from "./singleService/GraphicDesignSubServices";
import MediaBuying from "./singleServiceWithoutSubs/MediaBuying";
import MediaProductionSubServices from "./singleService/MediaProductionSubServices";
import SEOOptimization from "./singleServiceWithoutSubs/SEOOptimization";
import SingleService from "./SingleService";
import SingleServiceWithoutSubs from "./SingleServiceWithoutSubs";
import WebMobileAppsSubServices from "./singleService/WebMobileAppsSubServices";

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
