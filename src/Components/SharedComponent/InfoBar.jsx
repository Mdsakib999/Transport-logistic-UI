import { Link } from "react-router-dom";
import { FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Logo from "/assets/Logo.png";

const InfoBar = () => {
  return (
    <div className="bg-primary text-white text-[10px] sm:text-xs md:text-sm">
      <div className="max-w-7xl mx-auto hidden md:flex flex-col md:flex-row justify-between md:items-center px-3 sm:px-4 md:px-6 py-3 md:py-5 md:gap-4">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            src={Logo}
            alt="Transit Logo"
            className="w-24 h-24 md:w-40 md:h-20 object-cover"
          />
        </Link>

        {/* Contact Info */}
        <div className="flex md:justify-end items-center gap-3 sm:gap-4 md:gap-6 w-full md:w-auto">
          {/* Hours */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-tertiary rounded-full w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
              <FaRegClock className="text-secondary w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="leading-tight text-center sm:text-left">
              <p>Mon - Sat 9:00 - 12:00</p>
              <p>Sunday Closed</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-tertiary rounded-full w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
              <IoMdMail className="text-secondary w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="leading-tight text-center sm:text-left">
              <p>Email</p>
              <p>contact@transit.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-tertiary rounded-full w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
              <FaPhoneAlt className="text-secondary w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="leading-tight text-center sm:text-left">
              <p>Call Us</p>
              <p>(00) 123 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
