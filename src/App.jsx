import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Aapke Components
import Navbar from "./Components/Navbar.jsx";
import WebDevelopment from "./Pages/Services/WebDevelopment.jsx";
import Cursor from "./Components/Common/Cursor.jsx"; // Path check karleiyega

const App = () => {
  
  useEffect(() => {
    // 1. Lenis Smooth Scroll Setup
    const lenis = new Lenis({
      duration: 2, // Jitna zyada value, utna smooth/slow scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth rukne ka formula
      smoothWheel: true,
    });

    // 2. Animation Frame Loop (Lenis ko zinda rakhne ke liye)
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. GSAP aur Lenis ko Jorna (Syncing)
    // Ye bohot zaroori hai warna scroll animations atak sakti hain
    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // GSAP time ko Lenis ke time se match kiya
    });
    
    gsap.ticker.lagSmoothing(0); // Lag ko khatam karne ke liye

  }, []);

  return (
    <div>
      {/* Custom Cursor sab se upar */}
      <Cursor />
      
      <Navbar />
      <WebDevelopment />
    </div>
  );
};

export default App;