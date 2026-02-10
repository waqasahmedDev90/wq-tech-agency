const Performance = ({ title, featuresList }) => {
  return (
    <section className="px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Dynamic Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16 font-heading">
          {title}
        </h2>

        <div className="flex gap-5 justify-center flex-wrap relative">
          {featuresList.map((f, index) => (

            <div
              key={index}
              className="w-100  shadow-[inset_-10px_-9px_23px_rgba(255,255,255,0.25),inset_9px_10px_23px_rgba(255,255,255,0.25)] bg-white/5 border  p-10 pt-10 rounded-[40px] flex flex-col items-center text-center px-15 hover:border-purple-500/50 transition-all group backdrop-blur-md mt-10 z-10"
            >
              <div className="absolute -top-26 ">
                <img
                  src={f.icon}
                  alt={f.title}
                  className="w-50 "
                />
              </div>
              <h3 className="text-[#F488FC] text-[28px] font-heading mb-4  leading-tight z-40">
                {f.title}
              </h3>
              <p className="text-[#FFFFFF]/75 text-[18px] leading-relaxed font-body">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performance;
