import { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import { PrimaryButton } from "../SharedComponent/Button/PrimaryButton";
import { GradientButton } from "../SharedComponent/Button/GradientButton";

export const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    affiliation: "",
    email: "",
    number: "",
    website: "",
    inquiryDepartment: "",
    topic: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="px-4 md:px-8 lg:px-12 py-20 max-w-7xl mx-auto">
      <HeadingInfo>Get in Touch</HeadingInfo>
      <div className="grid lg:grid-cols-2 gap-12 mt-8">
        {/* Left side - Contact Form */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Need to make an Inquiry?
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* First Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-none rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="affiliation"
                  placeholder="Affiliation *"
                  value={formData.affiliation}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-none rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-none rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="number"
                  placeholder="Number *"
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-none rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Third Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="url"
                  name="website"
                  placeholder="Website *"
                  value={formData.website}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-none rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <select
                  name="inquiryDepartment"
                  value={formData.inquiryDepartment}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-none rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
                >
                  <option value="">Inquiry Department</option>
                  <option value="sales">Sales</option>
                  <option value="support">Customer Support</option>
                  <option value="logistics">Logistics</option>
                  <option value="billing">Billing</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
            </div>

            {/* Topic */}
            <div>
              <input
                type="text"
                name="topic"
                placeholder="Topic *"
                value={formData.topic}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-100 border-none rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 bg-gray-100 border-none rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
              />
            </div>

            {/* Submit Button */}
            <GradientButton type="submit" className="w-fit">
              Send Message
            </GradientButton>
          </form>
        </div>

        {/* Right side - Company Info */}
        <div className="flex flex-col gap-8 order-1 lg:order-2">
          <div>
            <p className="text-sm text-gray-600 mb-2">Get in Touch With Us</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              We take care about transportation for your business.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              <span className="font-bold">Transit</span> has experience in
              handling the formalities and documentation required for your
              imports and exports. We work with all international station to
              guarantee that your load will safely reach without any delays.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-6">New York</h4>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <span className="text-gray-600">
                  2405 Beverley Rd Brooklyn, New York 11226 United States.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <span className="text-gray-600">office@moovit.com</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <FaPhone className="text-white text-sm" />
                </div>
                <span className="text-gray-600">+1 212 425 8617</span>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-wrap gap-6 pt-8">
            <a
              href="#"
              className="flex items-center gap-2 text-gray-600 hover:text-[#1877F2] transition-colors duration-200"
            >
              <FaFacebook className="text-lg" />
              <span className="text-sm">Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-600 hover:text-[#1DA1F2] transition-colors duration-200"
            >
              <FaTwitter className="text-lg" />
              <span className="text-sm">Twitter</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-600 hover:text-[#0A66C2] transition-colors duration-200"
            >
              <FaLinkedin className="text-lg" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
