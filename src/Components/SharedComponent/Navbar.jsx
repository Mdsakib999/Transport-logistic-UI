import { useEffect, useRef, useState } from "react";
import InfoBar from "./InfoBar";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Logo from "/assets/Logo.png";

export default function Navbar() {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const [showInfoBar, setShowInfoBar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 100) {
        if (currentScroll > lastScrollTop) {
          // Scrolling down
          setShowInfoBar(false);
        } else {
          // Scrolling up
          setShowInfoBar(true);
        }
      } else {
        setShowInfoBar(true);
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY < 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Service", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
    { name: "Blogs", path: "/blog" },
  ];

  return (
    <div className="w-full mx-auto fixed z-50 transition-colors duration-300">
      <div
        className={`transition-transform duration-500 ${
          showInfoBar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <InfoBar />
      </div>

      <div
        className={`transition-all duration-200 ${
          showInfoBar ? "mt-0" : "mt-[-120px]"
        }`}
      >
        <nav
          className={`px-4 md:px-6 py-4 transition-all duration-300 ${
            isTransparent
              ? "bg-transparent"
              : "bg-black/50 backdrop-blur-2xl shadow-md"
          }`}
          ref={mobileMenuRef}
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Left: Menu */}
            <ul className="hidden lg:flex items-center text-white text-[17px] space-x-3">
              {menuItems.map((item, index) => (
                <li key={item.name} className="flex items-center space-x-3">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `group relative px-2 transition-all ${
                        isActive ? "font-semibold text-yellow-300 text-xl" : ""
                      }`
                    }
                  >
                    {item.name}
                    <span className="absolute left-0 top-full w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
                  </NavLink>
                  {index !== menuItems.length - 1 && (
                    <span className="text-white">|</span>
                  )}
                </li>
              ))}
            </ul>

            {/* Right: Icons + Button */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-3 text-white text-2xl">
                <span className="hover:text-[#e1306c] transition cursor-pointer">
                  <FaInstagram />
                </span>
                <span className="hover:text-[#1877f2] transition cursor-pointer">
                  <FaFacebook />
                </span>
                <span className="hover:text-gray-400 transition cursor-pointer">
                  <FaXTwitter />
                </span>
                <span className="hover:text-[#0a66c2] transition cursor-pointer">
                  <FaLinkedinIn />
                </span>
              </div>
              <button className="ml-4 bg-white text-black font-medium px-4 py-1.5 rounded-sm hover:bg-secondary hover:text-white transition">
                Request Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center justify-between w-full">
              <div className="hidden md:block"></div>
              {/* Logo */}
              <Link to="/" className="shrink-0 md:hidden">
                <img
                  src={Logo}
                  alt="Transit Logo"
                  className="w-24 h-12 object-cover"
                />
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="text-3xl text-white "
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <ul className="flex flex-col space-y-4 mt-4 lg:hidden text-lg bg-white shadow-lg rounded-md p-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block transition-all duration-300 ${
                        isActive
                          ? "text-primary font-bold"
                          : "text-gray-800"
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              <div className="flex justify-center gap-3 text-xl text-gray-700">
                <FaInstagram />
                <FaFacebook />
                <FaXTwitter />
                <FaLinkedinIn />
              </div>
              <button className="bg-black text-white w-full py-2 mt-2">
                Request Quote
              </button>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
}
