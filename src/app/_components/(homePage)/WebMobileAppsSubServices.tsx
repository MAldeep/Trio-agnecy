import AppMaintenance from "./AppMaintenance";
import ECommerceSolutions from "./ECommerceSolutions";
import SubService from "./SubService";
import UIDesign from "./UIDesign";
import WebsiteDevelopment from "./WebsiteDevelopment";

export default function WebMobileAppsSubServices() {
  return (
    <div className="w-full lg:w-1/2">
      <SubService
        subText="Website Development"
        Component={WebsiteDevelopment}
        id="sub-section"
        subTextColor="text-white"
      />
      <SubService
        subText=" E-commerce Solutions"
        Component={ECommerceSolutions}
        id="sub-section"
        subTextColor="text-white"
      />
      <SubService
        subText="Web & Mobile App Maintenance"
        Component={AppMaintenance}
        id="sub-section"
        subTextColor="text-gray-900"
      />
      <SubService
        subText="UI & UX Design"
        Component={UIDesign}
        id="sub-section"
        subTextColor="text-white"
      />
    </div>
  )
}
