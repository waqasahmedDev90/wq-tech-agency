const Performance = ({ title, featuresList }) => {
  return (
    <section className="px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Dynamic Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center  font-heading">
          {title}
        </h2>

        <div className="flex gap-8 justify-center flex-wrap relative py-20">
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
      </div>
    </section>
  );
};

export default Performance;
