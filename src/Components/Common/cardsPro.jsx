import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Common/Button";

gsap.registerPlugin(ScrollTrigger);

const Performance = ({ title, featuresList }) => {
  const sectionRef = useRef(null); // Poora Section
  const triggerRef = useRef(null); // Trigger Element
  const sliderRef = useRef(null);  // Cards ka Wrapper

  useGSAP(() => {
    // 1. Horizontal Scroll Logic
    const slider = sliderRef.current;
    
    // Total width calculate karein jitna scroll karna hai
    let scrollWidth = slider.scrollWidth - document.documentElement.clientWidth;

    gsap.to(slider, {
      x: -scrollWidth, // Cards ko left taraf dhakelo
      ease: "none", // Linear speed (ruk ruk k na chale)
      scrollTrigger: {
        trigger: triggerRef.current, // Jab ye section aaye
        pin: true,     // Page ko hold kar lo (Scroll rok do)
        scrub: 1,      // Smooth scroll (Mouse k sath chale)
        start: "top top", // Jab section top pe touch kare
        end: () => `+=${slider.scrollWidth}`, // Jitne lambe cards hain utna scroll
      }
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0a0516]"> 
    {/* ^^^ Background color zaroori hai horizontal scroll mein */}

      {/* Ye Wrapper PIN hoga */}
      <div ref={triggerRef}> 
        
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <h2 className="text-white text-4xl md:text-5xl font-bold text-center font-heading">
            {title}
          </h2>
        </div>

        {/* SLIDER CONTAINER (Horizontal) */}
        {/* flex-nowrap: Cards aik line mein rahen, toot kar neeche na ayen */}
        <div ref={sliderRef} className="flex gap-10 px-20 py-20 w-max flex-nowrap">
          
          {featuresList.map((f, index) => (
            // w-[400px]: Width fix karni paregi horizontal scroll k liye
            <div key={index} className="relative w-[85vw] md:w-[400px] group flex-shrink-0">
              
              <div className="absolute inset-0 bg-linear-to-tl from-[#4EC1FF] to-[#F268FF] rounded-[40px] transition-transform duration-300 group-hover:scale-[1.01]"></div>

              <div className="bg-[#14011A] h-full w-full rounded-[38px] p-10 pt-24 flex flex-col items-center text-center shadow-neon-glass relative z-0">
                <div className="absolute -top-30 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 group-hover:-translate-y-4">
                  <img
                    src={f.icon}
                    alt={f.title}
                    className="max-w-60 drop-shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                  />
                </div>

                <h3 className="text-[#F488FC] text-[28px] font-heading mb-2 leading-tight -mt-5">
                  {f.title}
                </h3>

                <p className="text-[#FFFFFF]/75 text-[16px] leading-relaxed font-body">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Button Section */}
        <div className="text-center relative z-10 px-4 pb-20">
          <p className="text-[#FFFFFF]/80 text-[18px] mb-8 font-body tracking-wide">
            Standard features, not extras, in every digital solution we deliver.
          </p>
          <Button text="Upgrade Your Site" className="primary" />
        </div>

      </div>
    </section>
  );
};

export default Performance;