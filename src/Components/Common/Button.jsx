const Button = ({ text, variant = "primary" }) => {
  const baseStyles = "px-6 py-2.5 rounded-md font-medium transition-all duration-300 border cursor-pointer font-body";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#4EC1FF]/52 from-5% via[#AB8EFF]/52 via-[44%]/52 to-[#FF47F9]/52 to-74% text-white border-transparent outline-0 hover:opacity-90",
    outline: "bg-transparent text-white border-gray-600 hover:border-purple-500 hover:bg-white/5"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      {text}
    </button>
  );
};

export default Button;