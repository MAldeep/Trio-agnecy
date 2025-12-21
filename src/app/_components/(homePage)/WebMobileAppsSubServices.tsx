import { useTranslations } from "next-intl";
import AppMaintenance from "./AppMaintenance";
import ECommerceSolutions from "./ECommerceSolutions";
import SubService from "./SubService";
import UIDesign from "./UIDesign";
import WebsiteDevelopment from "./WebsiteDevelopment";

export default function WebMobileAppsSubServices() {
  const t = useTranslations("Services.WebMobileAppsSubServices");
  return (
    <div className="w-full lg:w-1/2">
      <SubService
        subText={t("WebsiteDevelopment")}
        Component={WebsiteDevelopment}
        id="sub-section"
        subTextColor="text-white"
      />
      <SubService
        subText={t("ECommerceSolutions")}
        Component={ECommerceSolutions}
        id="sub-section"
        subTextColor="text-white"
      />
      <SubService
        subText={t("AppMaintenance")}
        Component={AppMaintenance}
        id="sub-section"
        subTextColor="text-white"
      />
      <SubService
        subText={t("UXUI")}
        Component={UIDesign}
        id="sub-section"
        subTextColor="text-white"
      />
    </div>
  );
}
