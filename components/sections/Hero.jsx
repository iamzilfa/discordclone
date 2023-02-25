import Button from "../ui/Button";
import arrowDown from "../../public/assests/vectors/arrowDown.svg";
import Shoe from "../../public/assests/vectors/shoes.svg";
import Cloud from "../../public/assests/vectors/cloud.svg";
import Image from "next/image";
import blueBoy from "../../public/assests/vectors/blueBoy.svg";

const Hero = () => {
  return (
    <div className="bg-[#404eed] relative ">
      <div className="relative z-30 mx-auto max-w-7xl container px-6 md:px-[40px] py-[56px] md:py-[120px] md:flex md:flex-col md:items-center md:justify-center md:text-center md:pt-[120px]">
        <div className="text-white md:w-[780px]">
          <h1 className="text-2xl font-extrabold leading-[22.8px] md:text-[56px] md:font-extrabold md:leading-[53.2px]">
            IMAGINE A PLACE...
          </h1>
          <p className="mt-6 mb-2 md:mt-10 md:text-[20px]">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </div>
        <div className="mt-6 md:flex md:items-center gap-6">
          <Button style="bg-white w-fit ">
            <span className="flex items-center gap-1">
              <Image src={arrowDown} alt="ArrowDown" />
              <span className=" text-lg">Download from Google Play</span>
            </span>
          </Button>
          <Button style="bg-black text-xl w-fit text-white">
            Open Discord in your browser
          </Button>
        </div>
      </div>
      <div>
        <div className="">
          <Image
            src={Cloud}
            alt="Cloud"
            className="absolute inset-0 left-0 z-10 h-full md:-ml-[-1320px] xl:left-1/2 lg:-ml-[1280px]  object-cover object-center"
          />
        </div>
        <div className="">
          <Image
            src={Shoe}
            alt="Shoe"
            className="absolute bottom-0 left-0 z-20 max-w-xl object-cover object-center"
          />
        </div>
        <div>
          <Image
            src={blueBoy}
            alt="Shoe"
            className="absolute z-20 bottom-0 right-0 max-w-xl object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
