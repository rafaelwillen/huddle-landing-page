import {
  BracketsAngle,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  PhoneCall,
  TwitterLogo,
} from "phosphor-react";
import logo from "../../assets/images/logo-white.svg";
import FloatingCard from "./FloatingCard";

const Footer = () => {
  return (
    <div className="bg-darkCyan">
      <footer className="container mx-auto text-white mt-56 pt-28 pb-10 px-4 relative">
        <FloatingCard />
        <img
          src={logo}
          alt="Huddle logo"
          width={160}
          height={26}
          className=""
        />
        <div className="lg:flex justify-between items-start lg:my-6">
          <div className="grid grid-cols-[auto_1fr] gap-3 items-start mt-6 lg:my-0 mb-9 text-sm  ">
            <MapPin weight="fill" fill="#fff" size={25} />
            <p className="max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              inventore delectus facere at aperiam veniam enim ut vero pariatur
              illo!
            </p>
            <PhoneCall size={25} />
            <a href="tel:+15431234567" className="animated-underline w-fit">
              +1-543-123-4567
            </a>
            <EnvelopeSimple size={25} />
            <a
              href="mailto:example@xpto.com"
              className="animated-underline w-fit"
            >
              example@xpto.com
            </a>
          </div>
          <ul className="flex flex-col gap-4 font-light grid-cols-2 md:grid md:justify-items-center">
            <li>
              <a href="#" className="animated-underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="animated-underline">
                What We Do
              </a>
            </li>
            <li>
              <a href="#" className="animated-underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="animated-underline">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="animated-underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="animated-underline">
                Contact Us
              </a>
            </li>
          </ul>

          <ul className="flex justify-center gap-4 my-7">
            <li>
              <a href="#" title="Facebook">
                <FacebookLogo size={38} />
              </a>
            </li>
            <li>
              <a href="#" title="Twitter">
                <TwitterLogo size={38} />
              </a>
            </li>
            <li>
              <a href="#" title="Instagram">
                <InstagramLogo size={38} />
              </a>
            </li>
          </ul>
        </div>

        <p className="text-xs font-light text-center lg:text-right">
          &copy; Copyright 2022 Huddle, All rights reserved.
        </p>

        <p className="text-xs mt-6 font-light text-center flex justify-center items-center gap-1">
          Made by{" "}
          <a
            className="animated-underline"
            href="https://github.com/rafaelwillen"
          >
            Rafael Willen
          </a>
          <BracketsAngle size={15} />
        </p>
      </footer>
    </div>
  );
};

export default Footer;
