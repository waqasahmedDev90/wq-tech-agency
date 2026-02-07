// src/Components/Hero.jsx
import Button from "./Common/Button";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-[#0a0516]">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6 font-heading">
            Strategy First, Execution Second, and
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
              Growth
            </span>{" "}
            in Mind.
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            As a premier responsive website development company, focused on UX,
            speed, and security. We build to support real business growth.
          </p>

          <div className="flex gap-4">
            <Button text="Start a Project" variant="primary" />
            <Button text="Book Free Consultation" variant="outline" />
          </div>

          <p className="mt-8 text-sm text-gray-500 uppercase tracking-widest">
            Trusted by startups and enterprises for custom website development.
          </p>
        </div>

        {/* Right Side: Image/Illustration */}
        <div className="flex justify-center">
          <img
            src="/hero-rocket.png" // Apni image ko public folder mein rakhein
            alt="Rocket Growth"
            className="w-full max-w-md drop-shadow-[0_0_30px_rgba(147,51,234,0.3)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
