import { useParams } from "react-router-dom";
import { BlogData } from "../FakeDb/Blog";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BlogDetailsBanner } from "../Components/BlogDetails/BlogDetailsBanner";
import { Categories } from "../Components/BlogDetails/Categories";
import { Help } from "../Components/BlogDetails/Help";
import { GetinTouch } from "../Components/BlogDetails/GetinTouch";
import { BlogBody } from "../Components/BlogDetails/BlogBody";

export const BlogDetails = () => {
  const { id } = useParams();
  const blogId = Number(id);
  const blog = BlogData.find((blog) => blog.id === blogId);

  return (
    <div>
      <BlogDetailsBanner blog={blog} />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <BlogBody blog={blog} />
        </div>
        <div className="flex flex-col gap-6 p-6 md:p-8 max-w-md mx-auto">
          <Categories />
          <Help />
          <GetinTouch />
        </div>
      </div>
    </div>
  );
};
