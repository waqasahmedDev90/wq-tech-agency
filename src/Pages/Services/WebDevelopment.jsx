import Hero from "../../Components/Hero";
import herorocket from "../../assets/Images/rocket.png";
import Designed from "../../assets/Images/Custom-Designed.png";
import Fast from "../../assets/Images/Fast-Websites.png";
import Mobile from "../../assets/Images/Mobile‑First-Design.png";
import Scalable from "../../assets/Images/Scalable Architecture.png";
import Secure from "../../assets/Images/Secure Development.png";
import SEO from "../../assets/Images/SEO‑Ready.png";
import Performance from "../../Components/Features/Performance";

const WebDevelopment = () => {
  const webFeatures = [
    {
      title: "Lightning-Fast Websites",
      desc: "Built for smooth performance and Core Web Vitals, ensuring your site is ready for Generative Engine Optimization (GEO) and paid traffic.",
      icon:  Fast ,
    },
    {
      title: "Custom-Designed for Your Brand",
      desc: "Every layout is designed around your Corporate Identity Design, helping you stand out from generic competitors.",
      icon:  Designed ,
    },
    {
      title: "SEO‑Ready Structure",
      desc: "Clean architecture and technical SEO foundations that make it easier for search engines to understand and rank your site.",
      icon:  SEO ,
    },
    {
      title: "Scalable Architecture",
      desc: "Engineered for growth. Perfect for B2B website development, supporting complex features like CRM Development and Mobile App Development APIs.",
      icon:  Scalable ,
    },
    {
      title: "Secure Development",
      desc: "Strong security practices protect your data and users, reducing risks for law firm website development and finance sectors.",
      icon:  Secure ,
    },
    {
      title: "Mobile‑First Responsive Design",
      desc: "We are a mobile website development company at heart. We ensure a seamless experience across all devices, capturing traffic from Social Media Marketing.",
      icon:  Mobile ,
    },
  ];
  return (
    <div>
      <Hero
        title="Strategy First, Execution Second, and"
        highlightWord="Growth"
        titlelast="in Mind."
        description="As a premier responsive website development company, focused on UX, speed, and security. Whether you need small business website development services or enterprise SAP integrations, we build to support real business growth."
        image={herorocket}
        trustedbadge="Trusted by startups and enterprises for custom website development services done right from day one."
      />

      <Performance title="Performance Overview" featuresList={webFeatures} />
    </div>
  );
};

export default WebDevelopment;
