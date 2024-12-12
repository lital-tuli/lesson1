import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <NavLink to '/' Home </NavLink> */}
        <NavLink className="navbar-brand" to='/'>
          My react app
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link active" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
            <NavLink className="nav-item nav-link" to="/product">
              products
            </NavLink>
            <NavLink className="nav-item nav-link" to="/users">
              users
            </NavLink>
            <NavLink className="nav-item nav-link" to="/newuser">
              register
            </NavLink>
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>
           
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;