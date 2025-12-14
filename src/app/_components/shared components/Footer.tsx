import Image from "next/image";
import logo from "../../assets/images/trio-logo.png";
import Link from "next/link";
import { serviceObj } from "./serviceData";
import ServiceLi from "./ServiceLi";
export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t-2 border-t-gray-300">
      {/* This footer's head */}
      <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 px-5 border-b-2 border-b-gray-200">
        <div className="w-full flex flex-col justify-start">
          <Image src={logo} alt="Trio's Logo" height={100} width={100} />
          <p>Trio&apos;s main moto</p>
        </div>
        <Link
          href="/contact"
          className="rounded-md bg-gray-950 text-gray-50 text-center w-fit px-10 py-2.5"
        >
          Contact
        </Link>
      </div>
      {/* Footer's Details */}
      <div className="w-full p-4 flex flex-col lg:flex-row justify-center gap-2.5">
        {/* left col for services*/}
        <div className="w-full lg:w-1/3 h-[90vh] bg-gray-100 rounded-2xl flex flex-col p-3 justify-center items-center gap-2.5">
          <Link href="/services" className="text-2xl text-gray-950">
            Services
          </Link>
          <ul>
            {serviceObj.map((el, idx) => (
              <ServiceLi
                key={idx}
                serviceTitle={el.title}
                subServicesTitles={el.subService || []}
              />
            ))}
          </ul>
        </div>
        {/* middle col for projects*/}
        <div className="w-full lg:w-1/3 h-[90vh] bg-gray-200 rounded-2xl flex flex-col p-5 justify-start items-center gap-2.5">
          <Link href="/projects" className="text-2xl text-gray-950">
            Projects
          </Link>
        </div>
        {/* right col for about us*/}
        <div className="w-full lg:w-1/3 h-[90vh] bg-gray-300 rounded-2xl flex flex-col p-5 justify-start items-center gap-2.5">
          <Link href="/about" className="text-2xl text-gray-950">
            About Us
          </Link>
        </div>
      </div>
      {/* Footer's copy rights */}
      <div className="w-full flex justify-center items-center gap-2.5 p-3 border-t-2 border-t-gray-200">
          <p>@2025 Trio Marketing Agency</p>
      </div>
    </footer>
  );
}
