import Button from "../Common/Button.jsx";

const HeroLeft = () => {
  return (
    <div className="md:w-[60%] w-full">
     <h1 className="text-4xl md:text-[48px] lg:text-[59px] font-bold text-white leading-tight mb-6 font-heading">
            Strategy First, Execution Second, and {" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF47F9] from-16% to-[#99DBFF] to-88%">
              Growth
            </span>{" "}
            in Mind.
          </h1>
       <p className="text-white text-[22px] mb-8 ">
            As a premier responsive website development company, focused on UX,
            speed, and security. Whether you need small business website
            development services or enterprise SAP integrations, we build to
            support real business growth.
          </p>
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
