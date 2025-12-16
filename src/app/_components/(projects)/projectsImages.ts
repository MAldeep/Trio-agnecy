import logo from "../../assets/images/trio-logo.png";
import hero from "../../assets/images/hero.png";
import { StaticImageData } from "next/image";
interface Images {
  logo: StaticImageData;
  images: StaticImageData[];
}
export const trioImages : Images = {
  logo: logo,
  images: [logo, hero],
};
