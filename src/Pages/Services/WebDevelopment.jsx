import Hero from "../../Components/Hero";
import herorocket from "../../assets/Images/rocket.png";

const WebDevelopment = () => {
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
    </div>
  );
};

export default WebDevelopment;
