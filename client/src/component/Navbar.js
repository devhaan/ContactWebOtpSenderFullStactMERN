import React from "react";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark" >
        <Link
          to="/"
          className="navbar-brand active text-warning"
          aria-current="page"
        >
          Contact Web Solutions
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active border border-warning m-2 text-center">
              <Link
                to="/"
                className="nav-link active text-warning text "
                aria-current="page"
              >
                Contact List
              </Link>
            </li>
            <li class="nav-item border border-warning m-2 text-center">
              <Link
                to="/contactmessagelogs"
                className="nav-link active text-warning"
                aria-current="page"
              >
                Message Logs
              </Link>
            </li>
            <li class="nav-item border border-warning m-2 text-center">
              <Link
                to="/contactadd"
                className="nav-link active text-warning"
                aria-current="page"
              >
                Add Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
