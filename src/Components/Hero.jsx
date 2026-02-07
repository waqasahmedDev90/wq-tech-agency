// src/Components/Hero.jsx
import bgeffect from "../assets/Images/bg-effect.png";
import HeroLeft from "./Hero/HeroLeft";
import HeroRight from "./Hero/HeroRight";

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
        <HeroLeft />

        {/* Right Side: Image/Illustration */}
        <HeroRight />
      </div>
    </section>
  );
};

export default Hero;
