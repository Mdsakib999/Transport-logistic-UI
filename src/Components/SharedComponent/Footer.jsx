import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import Logo from "/assets/Logo.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-white text-sm">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between md:gap-32">
        {/* Left Side: Logo & Social */}
        <div className="flex flex-col items-center md:items-start">
          <img src={Logo} alt="Transit Logo" className="w-40 h-auto" />
          <div className="flex gap-3">
            {[FaFacebookF, FaXTwitter, FaInstagram, FaYoutube].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center 
                 text-white/80 hover:bg-white hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  <Icon />
                </div>
              )
            )}
          </div>
        </div>

        {/* Right Side: Newsletter + Links */}
        <div className="flex-1 flex flex-col gap-6 mt-10 md:mt-0">
          {/* Newsletter */}
          <div className="grid lg:grid-cols-2 items-center gap-6">
            <h2 className="text-2xl font-semibold leading-snug text-center md:text-left">
              Subscribe to <br />
              Our Newsletter
            </h2>
            <div className="md:flex justify-center md:justify-start hidden">
              <div className="relative">
                <div className="flex bg-white rounded-2xl shadow-lg ">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="flex-1 px-7 text-gray-700 placeholder-gray-500 bg-white rounded-l-full"
                  />
                  <button className="px-8 py-3 text-white font-semibold rounded-l-xl  bg-blue-500">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-b border-white/20"></div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Useful Links */}
            <div>
              <h3 className="font-semibold text-blue-500 mb-3 text-xl">
                Useful Links
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Home", to: "/" },
                  { label: "About us", to: "/about" },
                  { label: "Services", to: "/services" },
                  { label: "Pricing", to: "/pricing" },
                  { label: "Contact", to: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `group relative inline-block transition-colors duration-300 ${
                          isActive ? "text-secondary" : "text-white"
                        }`
                      }
                    >
                      {link.label}
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="font-semibold text-white mb-3">Working Hours</h3>
              <ul className="space-y-1">
                <li>Mon to Fri: 9:00 AM - 5:00 PM</li>
                <li>Saturday: 10:00 AM - 6:00 PM</li>
                <li>Sunday Closed</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-white mb-3">Say Hello</h3>
              <p>contact@transit.com</p>
              <p>+1 212 425 8617</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 text-white/60 text-xs py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <p className="cursor-pointer hover:text-white transition-colors">
            Terms and Condition
          </p>
          <p className="cursor-default text-white/40">
            © 2025 SM IT || All rights reserved
          </p>
          <p className="cursor-pointer hover:text-white transition-colors">
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
