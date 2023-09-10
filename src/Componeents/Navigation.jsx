import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigationColor navbar sticky-top navbar-expand-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/home"  className="nav-link navHover text-white active1">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white navHover">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link text-white navHover">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfilio" className="nav-link text-white navHover">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
