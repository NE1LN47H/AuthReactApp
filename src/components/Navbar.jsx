
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          MyApp
        </Link>

        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/register">
            Register
          </Link>

          <Link className="nav-link" to="/login">
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
