

const NavMenu = () => {


  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Pages", href: "#" },
    { name: "Blog", href: "#" },
  ];


  return (
   <div className="hidden md:flex items-center gap-8 text-[#B5B5C8] font-body text-md font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
  )
}

export default NavMenu
