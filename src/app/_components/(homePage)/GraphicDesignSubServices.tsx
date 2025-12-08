import BrandIdentity from "./BrandIdentity";
import PrintDesign from "./PrintDesign";
import SocialMediaDesign from "./SocialMediaDesign";
import SubService from "./SubService";

export default function GraphicDesignSubServices() {
  return (
    <div className="w-full lg:w-1/2">
      <SubService
        subText="Brand Identity Development"
        Component={BrandIdentity}
        id="sub-section"
        subTextColor="text-white"
      />
      <SubService
        subText="Print Design"
        Component={PrintDesign}
        id="sub-section"
        subTextColor="text-gray-900"
      />
      <SubService
        subText="Social Media Design"
        Component={SocialMediaDesign}
        id="sub-section"
        subTextColor="text-white"
      />
    </div>
  );
}
