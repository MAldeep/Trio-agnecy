import { useTranslations } from "next-intl";
import EmailMarketing from "./EmailMarketing";
import PlanningStrategies from "./PlanningStrategies";
import SocialMediaMarketing from "./SocialMediaMarketing";
import SubService from "./SubService";

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
