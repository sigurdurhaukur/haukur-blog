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
              <p>
                {blog.author} réri {blog.distance}km á {blog.time}
              </p>
              <p>{blog.blogClock}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
