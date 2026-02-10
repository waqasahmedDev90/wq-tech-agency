import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroRight = ({ image }) => {
  const rocketRef = useRef(); // Image ko pakarne ke liye

  useGSAP(() => {
    // 1. Pehle Rocket Right side se Slide ho kar aayega
    gsap.from(rocketRef.current, {
      x: 100,        // Right se aayega
      opacity: 0,    // Gayab hoga shuru mein
      duration: 1.5, // 1.5 second lega
      ease: "power3.out",
    });

    // 2. Phir ye Hawa mein Tairta (Float) rahega (Infinite Loop)
    gsap.to(rocketRef.current, {
      y: -20,        // 20px upar jayega
      duration: 2,   // 2 second mein
      repeat: -1,    // Hamesha chalta rahega
      yoyo: true,    // Wapis neeche aayega
      ease: "sine.inOut", // Bilkul smooth wave ki tarah
      delay: 1.5     // Entrance animation ke baad shuru hoga
    });
  });

  return (
    <div className="text-end md:w-[40%] w-full md:flex hidden justify-end relative">
      
      {/* (Optional) Peeche Glow Effect lagaya hai taake Rocket pop kare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-purple-600/20 blur-[100px] rounded-full -z-10"></div>

      <img
        ref={rocketRef} // Animation yahan lagay gi
        src={image}
        alt="Rocket Growth"
        className="w-full object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]" // Thora sa shadow bhi diya
      />
    </div>
  );
};

export default HeroRight;