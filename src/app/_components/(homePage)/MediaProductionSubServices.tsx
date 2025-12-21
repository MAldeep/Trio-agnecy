import { useTranslations } from "use-intl";
import AnimationMotionGraphics from "./AnimationMotionGraphics";
import CommercialsAndAdvertisements from "./CommercialsAndAdvertisements";
import EventCoverageLiveStreaming from "./EventCoverageLiveStreaming";
import SubService from "./SubService";
import VideoEditing from "./VideoEditing";

export default function MediaProductionSubServices() {
  const t = useTranslations("Services.MediaProductionSubServices");
  return (
    <div className="w-full lg:w-1/2">
      <SubService
        subText={t("VideoEditing")}
        Component={VideoEditing}
        id="sub-section"
        subTextColor="text-white"
      />
      <SubService
        subText={t("AnimationMotionGraphics")}
        Component={AnimationMotionGraphics}
        id="sub-section"
        subTextColor="text-white"
      />
      <SubService
        subText={t("CommercialsAndAdvertisements")}
        Component={CommercialsAndAdvertisements}
        id="sub-section"
        subTextColor="text-white"
      />
      <SubService
        subText={t("EventCoverageLiveStreaming")}
        Component={EventCoverageLiveStreaming}
        id="sub-section"
        subTextColor="text-white"
      />
    </div>
  );
}
