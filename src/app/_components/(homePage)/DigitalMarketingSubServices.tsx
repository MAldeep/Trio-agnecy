import EmailMarketing from "./EmailMarketing";
import PlanningStrategies from "./PlanningStrategies";
import SocialMediaMarketing from "./SocialMediaMarketing";
import SubService from "./SubService";

export default function DigitalMarketingSubServices() {
  return (
    <div className="w-full lg:w-1/2">
      <SubService
        subText="Social Media Marketing"
        Component={SocialMediaMarketing}
        id="sub-section"
        subTextColor="text-gray-900"
      />
      <SubService
        subText="E-mail Marketing"
        Component={EmailMarketing}
        id="sub-section"
        subTextColor="text-white"
      />
      <SubService
        subText="Planning & Strategies "
        Component={PlanningStrategies}
        id="sub-section"
        subTextColor="text-white"
      />
    </div>
  );
}
