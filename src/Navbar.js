import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Fjólskyldu Róður</h1>
      <div className="links">
        <Link to="/">Heim</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "var(--primary)",
            borderRadius: "8px",
          }}
        >
          Nýtt Róður
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
