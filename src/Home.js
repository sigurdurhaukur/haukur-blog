import React, { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import SearchBar from "./SearchBar";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch(
    "https://rower.netlify.app/blogs"
  );

  const [input, setInput] = useState("");
  const [blogList, setBlogList] = useState(blogs);

  const updateInput = async (input) => {
    const filtered = blogs.filter((blog) => {
      return blog.title.toLowerCase().includes(input.toLowerCase());
    });
    setBlogList(filtered);
    setInput(input);
    console.log(filtered);
    console.log(blogList);
  };

  return (
    <>
      <div className="home">
        <h1 className="title">
          Allar róðrar æfingar fjölskyldunar á Skúlagötu 10.
        </h1>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <SearchBar input={input} onChange={updateInput} />}
        {blogs && <BlogList blogs={blogList || blogs} />}
      </div>
    </>
  );
};

export default Home;
