import { useRef } from "react"; // 1. useRef mangwaya
import gsap from "gsap"; // 2. GSAP mangwaya
import { useGSAP } from "@gsap/react"; // 3. React Hook mangwaya
import { ScrollTrigger } from "gsap/ScrollTrigger"; // 4. ScrollTrigger mangwaya
import Button from "../Common/Button";

// Plugin Register kiya
gsap.registerPlugin(ScrollTrigger);

const Performance = ({ title, featuresList }) => {
  // 5. Container ka reference banaya
  const container = useRef();

  // 6. GSAP Animation Logic
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "h2", // Title se animation trigger hogi
        start: "top 80%", // Jab title screen k 80% hissay pe ayega
        toggleActions: "play none none reverse",
      },
    });

    // Step 1: Heading Animation
    tl.from("h2", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Step 2: Cards Animation (Targeting via .group class)
    tl.from(".group", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2, // Har card 0.2s k gap se ayega
      ease: "back.out(1.7)", // Thora bounce effect
    }, "-=0.5"); // Heading k khatam hone se thora pehle shuru hoga

    // Step 3: Bottom Text & Button Animation
    tl.from(".text-center.relative.z-10.px-4", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.5");

  }, { scope: container }); // Scope set kiya taake bahar k elements effect na hon

  return (
    // 7. Ref yahan section par lagaya
    <section ref={container} className="px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Dynamic Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center  font-heading">
          {title}
        </h2>

        <div className="flex gap-8 justify-center flex-wrap relative pt-20 pb-10">
          {featuresList.map((f, index) => (
            <div key={index} className="relative w-full md:w-100 mt-10 group">
              <div className="absolute inset-0 bg-linear-to-tl from-[#4EC1FF]  to-[#F268FF] rounded-[40px]  transition-transform duration-300 group-hover:scale-[1.01]"></div>

              <div className="bg-[#14011A] h-full w-full rounded-[38px] p-10  pt-24 flex flex-col items-center text-center shadow-neon-glass relative z-0">
                <div className="absolute -top-35 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 group-hover:-translate-y-4">
                  <img
                    src={f.icon}
                    alt={f.title}
                    className="max-w-70  drop-shadow-[0_0_20px_rgba(236,72,153,0.4)]"
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
        <div className=" text-center relative z-10 px-4">
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