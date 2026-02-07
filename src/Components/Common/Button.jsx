const Button = ({ text, variant = "primary" }) => {
  const baseStyles = "px-6 py-2.5 rounded-md font-medium transition-all duration-300 border cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent hover:opacity-90",
    outline: "bg-transparent text-white border-gray-600 hover:border-purple-500 hover:bg-white/5"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      {text}
    </button>
  );
};

export default Button;