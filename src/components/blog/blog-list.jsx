"use client";
import BlogListItem from "./BlogListItem";

const BlogList = ({ blogs }) => {
  return (
    <div className="space-y-8 lg:space-y-12">
      {blogs.map((blog, index) => (
        <BlogListItem key={blog._id} blog={blog} index={index} />
      ))}
    </div>
  );
};

export default BlogList;
