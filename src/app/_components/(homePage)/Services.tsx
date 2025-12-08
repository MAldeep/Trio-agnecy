import DigitalMarketingSubServices from "./DigitalMarketingSubServices";
import GraphicDesignSubServices from "./GraphicDesignSubServices";
import SingleService from "./SingleService";
import WebMobileAppsSubServices from "./WebMobileAppsSubServices";

export default function Services() {
  return (
    <div className="w-full">
      <SingleService
        flex_dir="lg:flex-row"
        service_name="Digital Marketing"
        ComponentOfsub={DigitalMarketingSubServices}
      />
      <SingleService
        flex_dir="lg:flex-row-reverse"
        service_name="Graphic Design"
        ComponentOfsub={GraphicDesignSubServices}
      />
      <SingleService
        flex_dir="lg:flex-row"
        service_name="Web & Mobile Apps"
        ComponentOfsub={WebMobileAppsSubServices}
      />
    </div>
  );
}
