import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../Common/Button.jsx";

const HeroLeft = ({ title, description, highlightWord, titlelast, trustedbadge }) => {
  
  const container = useRef();

  useGSAP(() => {
    // Sab elements ko pakar kar animate karega
    // '.hero-anim' class humne neeche har element ko di hai
    gsap.from(".hero-anim", {
      y: 50,          // 50px neeche se upar aayega
      opacity: 0,     // Bilkul gayab hoga shuru mein
      duration: 1,    // 1 second lega
      stagger: 0.2,   // Har element 0.2s ke gap se aayega (Sequence banega)
      ease: "power3.out", // Smooth break lagayega
      delay: 0.2      // Page load hone ke 0.2s baad shuru hoga
    });
  }, { scope: container });

  return (
    <div ref={container} className="md:w-[60%] w-full">
      
      {/* 1. Heading */}
      <h1 className="hero-anim text-4xl md:text-[48px] lg:text-[59px] font-bold text-white leading-tight mb-6 font-heading">
        {title} {' '}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF47F9] from-16% to-[#99DBFF] to-88%">
          {highlightWord}
        </span>{" "}
        {titlelast}
      </h1>

      {/* 2. Description */}
      <p className="hero-anim text-white text-[22px] mb-8 font-body">
        {description}
      </p>

      {/* 3. Buttons */}
      <div className="hero-anim flex gap-4">
        <Button text="Start a Project" variant="primary" />
        <Button text="Book Free Consultation" variant="outline" />
      </div>

      {/* 4. Trusted Badge */}
      <p className="hero-anim mt-8 text-sm text-gray-400 tracking-widest max-w-lg font-body">
        {trustedbadge}
      </p>
      
    </div>
  );
};

export default HeroLeft;