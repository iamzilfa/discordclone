import Image from "next/image";
import Logo from "../../public/assests/vectors/discordLogo.svg";
import Menu from "../../public/assests/vectors/menu.svg";


const Navbar = () => {
  return (
    <nav className="bg-[#404eed] ">
      <div className="mx-auto max-w-7xl container px-6 md:px-[40px]">
        <div className="flex justify-between items-center pt-5">
          <div>
            <Image src={Logo} alt="LOGO" />
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-10 hover:underline text-white font-semibold leading-[22.4px]">
              {[
                "Download",
                "Nitro",
                "Discover",
                "Safety",
                "Support",
                "BlogCareers",
              ].map((e) => {
                return <li>{e}</li>;
              })}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white rounded-full">
              <button className="py-[7px] px-[16px] leading-6 font-medium text-[14px] md:flex flex-col items-center justify-center">
                Login
              </button>
            </div>
            <div className="block md:hidden">
              <Image src={Menu} alt="Menu" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
