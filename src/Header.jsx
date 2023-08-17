import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { Signup } from "./Signup";

export function Header() {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    authenticationLinks = (
      <>
        <li>
          <a className="dropdown-item" href="/signup">
            Signup
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/login">
            Login
          </a>
        </li>
      </>
    );
  } else {
    authenticationLinks = (
      <li>
        <LogoutLink />
      </li>
    );
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            MyTravels
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More Stuff
                </a>
                <ul className="dropdown-menu">
                  {authenticationLinks}
                  <li>
                    <a className="dropdown-item" href="#posts-index">
                      All Posts
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      All Pics
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a> */}
    </header>
  );
}
