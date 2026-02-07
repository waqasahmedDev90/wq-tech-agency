import { useState } from "react";
import Logo from "./Navbar/Logo.jsx";
import NavMenu from "./Navbar/NavMenu.jsx";
import NavButton from "./Navbar/NavButton.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Pages", href: "#" },
    { name: "Blog", href: "#" },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-3 md:px-6 ">
      <div className="max-w-7xl mx-auto relative p-px rounded-2xl bg-linear-to-r from-[#F268FF] from-0% via-[#4E3D73] via-33%  to-[#4EC1FF] to-96%">
        <div className="bg-[#0a0516]/90  backdrop-blur-md rounded-2xl  ">

          <div className="flex items-center justify-between px-4 py-3">

           <Logo />

          <NavMenu />

            <NavButton />

          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2 p-4 bg-[#0a0516]/95 backdrop-blur-xl border border-white/10 rounded-2xl animate-in fade-in zoom-in duration-300">
              <div className="flex flex-col gap-4 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 font-satoshi text-lg py-2 border-b border-white/5 last:border-0"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white font-satoshi font-semibold py-3 rounded-xl mt-2">
                  Lets Talk
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
