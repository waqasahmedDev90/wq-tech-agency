import Button from "../Common/Button.jsx";
import HeaoHeading from "./HeaoHeading.jsx";
import HeroDes from "./HeroDes.jsx";

const HeroLeft = () => {
  return (
    <div className="md:w-[60%] w-full">
      <HeaoHeading />
      <HeroDes />
      <div className="flex gap-4">
        <Button text="Start a Project" variant="primary" />
        <Button text="Book Free Consultation" variant="outline" />
      </div>
      <p className="mt-8 text-sm text-gray-400  tracking-widest max-w-lg">
        Trusted by startups and enterprises for custom website development
        services done right from day one.{" "}
      </p>
    </div>
  );
};

export default HeroLeft;
