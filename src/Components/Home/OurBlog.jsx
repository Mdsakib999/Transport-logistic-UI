import { LuArrowUpRight } from "react-icons/lu";
import { BlogData } from "../../FakeDb/Blog";
import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import { FaClock, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GradientButton } from "../SharedComponent/Button/GradientButton";

export const OurBlog = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 py-20 max-w-7xl mx-auto relative flex flex-col gap-8">
      <HeadingInfo> Our Blog </HeadingInfo>

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
        Our Latest News
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BlogData.slice(0, 3).map((blog) => (
          <Link
            to={`/blog/${blog.id}`}
            key={blog.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 flex flex-col gap-3">
              <div className="flex items-center text-sm text-gray-500 gap-4">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-gray-600 w-3.5 h-3.5" />
                  {blog.publishedDate}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock className="text-gray-600 w-3.5 h-3.5" />
                  {blog.readingTime}
                </span>
              </div>
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-gray-600 text-sm">{blog.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-end mt-6">
        <GradientButton>
          <Link to={"/blog"} className="flex items-center gap-2">
            More Blog <span>|</span> <LuArrowUpRight className="w-5 h-5" />
          </Link>
        </GradientButton>
      </div>
    </div>
  );
};
