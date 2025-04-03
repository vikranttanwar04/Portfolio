import { Link } from "react-router-dom";

export default function Navbar() {
  return(
    <nav className="navbar navbar-expand-lg navbar-success px-3" style={{backgroundColor: "#000"}}>
      <button
        className="navbar-toggler text-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse text-light  justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav" style={{paddingRight: "5rem"}}>
            <Link className="nav-item nav-link text-light pe-4" to='/'>Home</Link>
            <Link className="nav-item nav-link text-light pe-4" to="/resume">Resume</Link>
            <Link className="nav-item nav-link text-light pe-4" to="/qualifications">Qualifications</Link>
            <Link className="nav-item nav-link text-light pe-4" to="/contact">Contact</Link>
            <Link className="nav-item nav-link text-light " to="/work">Work</Link>
          </div>
        </div>
    </nav>
  )
}