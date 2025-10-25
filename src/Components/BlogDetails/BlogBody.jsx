import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export const BlogBody = ({ blog }) => {
  const icons = {
    instagram: <FaInstagram />,
    facebook: <FaFacebookF />,
    x: <FaXTwitter />,
    linkedin: <FaLinkedinIn />,
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-semibold">{blog.title}</h1>

      {/* Description */}
      <p className="text-sm text-gray-600">{blog.desc}</p>

      {/* Highlight Box */}
      <div className="bg-[#1f3584] text-white text-center px-6 py-6 my-6 font-medium">
        “{blog.highlight}”
      </div>
      {/* Second Image */}
      {blog.image2 && (
        <div className="my-6">
          <img src={blog.image2} alt="blog detail" className="w-full rounded" />
        </div>
      )}
      {/* Body */}
      {blog.body.map((paragraph, i) => (
        <p key={i} className="text-sm text-gray-700 leading-relaxed">
          {paragraph}
        </p>
      ))}

      {/* Footer */}
      <div className="flex justify-between items-center mt-10 border-t pt-4">
        <div className="flex gap-4 text-lg text-gray-700">
          {blog.footerIcons.map((icon, i) => (
            <span key={i} className="hover:text-blue-600 transition">
              {icons[icon]}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-500">Category: {blog.category}</p>
      </div>
    </div>
  );
};
