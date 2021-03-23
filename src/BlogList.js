import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog, i) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <div className="left">
              <img className="images" src={blog.image} alt="about the blog" />
            </div>
            <div className="right">
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
