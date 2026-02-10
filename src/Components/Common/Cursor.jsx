import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Mouse move hone par animation
    const moveCursor = (e) => {
      // Chota dot (Foran mouse ke sath chalega)
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3, // Boht tez
      });

      // Bara circle (Thora slow/smooth chalega)
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.9, // Smooth delay
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Main Chota Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-9999 mix-blend-difference -translate-x-1/2 -translate-y-1/2"
      />
      
      {/* Peeche Wala Bara Glow/Circle */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-12 h-12 border border-white/50 rounded-full pointer-events-none z-9998 mix-blend-difference -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default Cursor;