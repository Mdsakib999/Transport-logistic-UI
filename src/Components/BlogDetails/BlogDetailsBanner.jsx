import { FaRegCalendarAlt } from "react-icons/fa";

export const BlogDetailsBanner = ({ blog }) => {
  return (
    <div
      className="relative bg-no-repeat bg-cover bg-center h-[70vh] flex items-center"
      style={{ backgroundImage: `url(${blog.image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-[#213E89]/50 to-[#081023]/80 "></div>

      <div className="relative z-10 px-4 md:px-8 w-full max-w-7xl mx-auto md:pt-24">
        {/* date */}
        <div className="flex items-center gap-3  text-white">
          <div className="bg-orange-500 p-2 rounded-md">
            <FaRegCalendarAlt className="w-6 h-6" />
          </div>
          <p className="text-3xl font-bold mt-2 leading-none">
            {blog.publishedDate}
          </p>
        </div>
        {/* heading */}
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white my-5 leading-tight">
          {blog.title}
        </h1>
      </div>
    </div>
  );
};
