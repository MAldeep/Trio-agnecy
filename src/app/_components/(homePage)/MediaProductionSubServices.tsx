import AnimationMotionGraphics from "./AnimationMotionGraphics";
import CommercialsAndAdvertisements from "./CommercialsAndAdvertisements";
import EventCoverageLiveStreaming from "./EventCoverageLiveStreaming";
import SubService from "./SubService";
import VideoEditing from "./VideoEditing";

export default function MediaProductionSubServices() {
  return (
    <div className="w-full lg:w-1/2">
      <SubService
        subText="Social Media Marketing"
        Component={VideoEditing}
        id="sub-section"
        subTextColor="text-white"
      />
      <SubService
        subText="Animation & Motion Graphics"
        Component={AnimationMotionGraphics}
        id="sub-section"
        subTextColor="text-white"
      />
      <SubService
        subText="Commercials & Advertisements"
        Component={CommercialsAndAdvertisements}
        id="sub-section"
        subTextColor="text-gray-900"
      />
      <SubService
        subText="Event Coverage & Live Streaming"
        Component={EventCoverageLiveStreaming}
        id="sub-section"
        subTextColor="text-white"
      />
    </div>
  )
}
