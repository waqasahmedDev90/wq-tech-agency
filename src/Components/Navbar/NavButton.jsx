import { useState } from "react";
import { Menu, X } from "lucide-react";


const NavButton = () => {
      const [isOpen, setIsOpen] = useState(false);
    
  return (
    <div className="flex items-center ">
              <button className="hidden sm:block bg-linear-to-r from-[#6092F2] to-[#D84BCE] text-white font-body font-semibold px-6 py-2 rounded  hover:scale-105 transition-transform">
                Lets Talk
              </button>

              <button
                className="md:hidden text-white p-1"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
  )
}

export default NavButton
