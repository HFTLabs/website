import "../css/styles.css";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import ScrollAnimation from "react-animate-on-scroll";

function Header(props) {
  return (
    <div>
      <header class="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column">
          {(() => {
            if (props.changeBackground === "true") {
              return (
                <img
                  class="masthead-avatar mb-5 hari"
                  src={props.image}
                  alt="..."
                />
              );
            } else {
              return (
                <img class="masthead-avatar mb-5" src={props.image} alt="..." />
              );
            }
          })()}
          <ScrollAnimation
            animateIn="bounceInLeft"
            animateOnce="true"
            duration={1}
          >
            <h1 class="masthead-heading text-uppercase mb-0 yellow">
              {props.text}
            </h1>
            <p class="masthead-subheading font-weight-light mb-0 yellow1">
              {props.para}
            </p>
            <div class="text-center mt-4">
              {(() => {
                if (props.page === "noMetamask") {
                  return (
                    <a
                      class="btn btn-xl btn-outline-light"
                      href="https://metamask.io/"
                      target="_blank"
                    >
                      DOWNLOAD METAMASK
                    </a>
                  );
                } else {
                  return (
                    <Link class="btn btn-xl btn-outline-light" to="/Wallet">
                      GET YOUR AVATAR
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
