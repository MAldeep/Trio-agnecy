import { useTranslations } from "next-intl";
import EmailMarketing from "../subServices/EmailMarketing";
import PlanningStrategies from "../subServices/PlanningStrategies";
import SocialMediaMarketing from "../subServices/SocialMediaMarketing";
import SubService from "../SubService";

export default function DigitalMarketingSubServices() {
  const t = useTranslations("Services");
  return (
    <div className="w-full lg:w-1/2">
      <SubService
        subText={t("DigitalMarketing.SocialMediaMarketing")}
        Component={SocialMediaMarketing}
        id="sub-section"
        subTextColor="text-white"
      />
      <SubService
        subText={t("DigitalMarketing.EmailMarketing")}
        Component={EmailMarketing}
        id="sub-section"
        subTextColor="text-white"
      />
      <SubService
        subText={t("DigitalMarketing.PlanningStrategies")}
        Component={PlanningStrategies}
        id="sub-section"
        subTextColor="text-white"
      />
    </div>
  );
}
