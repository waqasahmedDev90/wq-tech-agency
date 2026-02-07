// src/Components/Hero.jsx
import Button from "./Common/Button";
import herorocket from "../assets/Images/rocket.png";
import bgeffect from "../assets/Images/bg-effect.png";

const Hero = () => {
  return (
    <section className="relative  min-h-[80vh] flex items-center md:pt-9 pt-40 overflow-hidden px-3 md:px-6">
      {/* Background Glows */}
      <div className="absolute -top-100 -left-90 mx-w-md"> <img
            src={bgeffect} // Apni image ko public folder mein rakhein
            alt="Bg Effect"
            className="mx-w-lg"
          /></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px]"></div>

      <div className=" w-350 mx-auto  px-2 md:flex  gap-5 items-center relative z-10">
        {/* Left Side: Content */}

        <div className="md:w-[60%] w-full">
          <h1 className="text-4xl md:text-[48px] lg:text-[59px] font-bold text-white leading-tight mb-6 font-heading">
            Strategy First, Execution Second, and
            <span className="pl-1 text-transparent bg-clip-text bg-linear-to-r from-[#FF47F9] from-16% to-[#99DBFF] to-88%">
              Growth
            </span>{" "}
            in Mind.
          </h1>
          <p className="text-white text-[22px] mb-8 ">
            As a premier responsive website development company, focused on UX,
            speed, and security. Whether you need small business website
            development services or enterprise SAP integrations, we build to
            support real business growth.
          </p>

          <div className="flex gap-4">
            <Button text="Start a Project" variant="primary" />
            <Button text="Book Free Consultation" variant="outline" />
          </div>

          <p className="mt-8 text-sm text-gray-400 uppercase tracking-widest max-w-lg">
            Trusted by startups and enterprises for custom website development
            services done right from day one.{" "}
          </p>
        </div>

        {/* Right Side: Image/Illustration */}
        <div className="text-end md:w-[40%] w-full md:block hidden justify-end">
          <img
            src={herorocket} // Apni image ko public folder mein rakhein
            alt="Rocket Growth"
            className="w-full "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
