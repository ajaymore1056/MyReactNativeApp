import React, { useState } from "react";
const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  // const blogPosts = [{ title: "Blog Post #1" }, { title: "Blog Post #2" }]; // staticaly data
  const [blogPosts, setBlogPosts] = useState([]); // initial value is empaty array

  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` }
    ]);
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
