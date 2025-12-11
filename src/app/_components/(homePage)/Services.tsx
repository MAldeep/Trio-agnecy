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
  return (
    <div className="w-full">
      <SingleService
        flex_dir="lg:flex-row"
        service_name="Digital Marketing"
        ComponentOfsub={DigitalMarketingSubServices}
      />
      <SingleServiceWithoutSubs
        ContentTitle="Content Creation"
        Component={ContentCreation}
        bgColor="bg-black"
        txtColor="text-white"
      />

      <SingleService
        flex_dir="lg:flex-row-reverse"
        service_name="Graphic Design"
        ComponentOfsub={GraphicDesignSubServices}
      />
      <SingleServiceWithoutSubs
        ContentTitle="SEO Optimization"
        Component={SEOOptimization}
        bgColor="bg-[#D1D5DE]"
        txtColor="text-white"
      />
      <SingleService
        flex_dir="lg:flex-row"
        service_name="Web & Mobile Apps"
        ComponentOfsub={WebMobileAppsSubServices}
      />
      <SingleServiceWithoutSubs
        ContentTitle="Media Buying"
        Component={MediaBuying}
        bgColor="bg-black"
        txtColor="text-white"
      />
      <SingleService
        flex_dir="lg:flex-row-reverse"
        service_name="Media Production"
        ComponentOfsub={MediaProductionSubServices}
      />
    </div>
  );
}
