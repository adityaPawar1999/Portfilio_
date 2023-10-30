import { NavLink } from "react-router-dom";

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
              <NavLink
                to="/home"
                className="nav-link navHover text-white "
                activeClassName="active1"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link text-white navHover"
                activeClassName="active1"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className="nav-link text-white navHover"
                activeClassName="active1"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfilio"
                className="nav-link text-white navHover"
                activeClassName="active1"
              >
                Portfolio
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
