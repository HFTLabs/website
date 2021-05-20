import "../css/styles.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Link className="navbar-brand js-scroll-trigger logo" to="/">
            MEEBIT avatars
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-secondary text-white rounded"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  to="/"
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                >
                  Home
                </Link>
              </li>
              {/* <li className="nav-item mx-0 mx-lg-1">
                <Link
                  to="/Overview"
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                >
                  Overview
                </Link>
              </li> */}
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  to="/Gallery"
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  to="/Wallet"
                >
                  My Wallet
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  to="/WalletHistory"
                >
                  Wallet History
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
