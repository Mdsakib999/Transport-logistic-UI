import { Link } from "react-router-dom";
import { BlogData } from "../../FakeDb/Blog";
import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import { FaRegCalendarAlt } from "react-icons/fa";

export const AllBlog = () => (
  <div className="px-4 md:px-8 lg:px-12 py-12 max-w-7xl mx-auto">
    <HeadingInfo>Our Blog</HeadingInfo>
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
      Our Latest News
    </h2>

    {/* Blog list */}
    <div className="max-w-5xl mx-auto flex flex-col">
      {BlogData.map((blog) => (
        <div key={blog.id}>
          {/* TOP BORDER  */}
          <hr className="border-gray-400" />

          {/* CARD  */}
          <div className="py-8 flex flex-col md:flex-row gap-6">
            {/* image */}
            <div className="w-full md:w-[45%] h-60 shrink-0">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* date */}
            <div className="flex flex-col items-center min-w-[60px]">
              <div className="bg-orange-500 text-white p-2 rounded-md">
                <FaRegCalendarAlt className="w-6 h-6" />
              </div>
              <p className="text-lg font-bold mt-2 leading-none">
                {blog.publishedDate}
              </p>
            </div>

            {/* vertical divider */}
            <div className="border-l border-gray-400" />

            {/* text */}
            <div className="flex flex-col gap-2 md:w-[50%]">
              <h3 className="text-2xl font-bold">{blog.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {blog.desc}
              </p>
              <ul className="list-disc list-inside text-sm font-medium mt-2 ">
                {blog.points?.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              <Link
                to={`/blog/${blog.id}`}
                className="flex justify-end items-center"
              >
                <p className="text-blue-600 hover:underline text-sm font-medium">
                  {blog.readingTime}
                  {" >>"}
                </p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
