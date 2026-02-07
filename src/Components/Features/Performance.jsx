const Performance = ({ title, featuresList }) => {
  return (
    <section className="px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Dynamic Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16 font-heading">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresList.map((f, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-10 rounded-[40px] flex flex-col items-center text-center hover:border-purple-500/50 transition-all group backdrop-blur-sm"
            >
              <div className="">
                <img
                  src={f.icon}
                  alt={f.title}
                  className="w-full "
                />
              </div>
              <h3 className="text-[#F488FC] text-xl font-bold mb-4 font-heading leading-tight">
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-body">
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
