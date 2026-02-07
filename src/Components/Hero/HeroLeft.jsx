import Button from "../Common/Button.jsx";

const HeroLeft = ({title, description,  highlightWord , titlelast , trustedbadge} ) => {
  return (
    <div className="md:w-[60%] w-full">
     <h1 className="text-4xl md:text-[48px] lg:text-[59px] font-bold text-white leading-tight mb-6 font-heading">
            {title} {' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF47F9] from-16% to-[#99DBFF] to-88%">
            {highlightWord}
            </span>{" "}
            {titlelast}
          </h1>
       <p className="text-white text-[22px] mb-8 ">
           
            {description}
          </p>
      <div className="flex gap-4">
        <Button text="Start a Project" variant="primary" />
        <Button text="Book Free Consultation" variant="outline" />
      </div>
      <p className="mt-8 text-sm text-gray-400  tracking-widest max-w-lg">
        {trustedbadge}
      </p>
    </div>
  );
};

export default HeroLeft;
