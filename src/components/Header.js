import "../css/styles.css";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import ScrollAnimation from "react-animate-on-scroll";

function Header(props) {
  return (
    <div>
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          {(() => {
            if (props.changeBackground === "true") {
              return (
                <img
                  className="masthead-avatar mb-5 hari"
                  src={props.image}
                  alt="..."
                />
              );
            } else {
              return (
                <img
                  className="masthead-avatar mb-5"
                  src={props.image}
                  alt="..."
                />
              );
            }
          })()}
          <ScrollAnimation
            animateIn="bounceInLeft"
            animateOnce={true}
            duration={1}
          >
            <h1 className="masthead-heading text-uppercase mb-0 yellow">
              {props.text}
            </h1>
            <p className="masthead-subheading font-weight-light mb-0 yellow1">
              {props.para}
            </p>
            <div className="text-center mt-4">
              {(() => {
                if (props.page === "noMetamask") {
                  return (
                    <a
                      className="btn btn-xl btn-outline-light"
                      href="https://metamask.io/"
                      target="_blank"
                    >
                      DOWNLOAD METAMASK
                    </a>
                  );
                } else {
                  return (
                    <Link className="btn btn-xl btn-outline-light" to="/Wallet">
                      MINT AVATARS
                    </Link>
                  );
                }
              })()}
            </div>
          </ScrollAnimation>
        </div>
      </header>
    </div>
  );
}
export default Header;
