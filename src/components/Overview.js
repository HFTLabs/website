import "../css/styles.css";
import { Link } from "react-router-dom";
import image1 from "../assets/img/1.gif";
import FadeIn from "react-fade-in";
import ScrollAnimation from "react-animate-on-scroll";
function Overview() {
  return (
    <div>
      <section class="page-section bg-white text-white mb-0" id="about">
        <div class="container">
          <h2 class="page-section-heading text-center text-uppercase text-black">
            Overview
          </h2>
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
              <i class="fas fa-star"></i>
            </div>
            <div class="divider-custom-line"></div>
          </div>
          <ScrollAnimation
            animateIn="bounceInLeft"
            animateOnce="true"
            duration={1}
          >
            <div class="row">
              <div class="col-lg-4 ml-auto">
                <p class="lead text-black">
                  BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
                  collectibles living on the Ethereum blockchain. Your Bored Ape
                  doubles as your Yacht Club membership card, and grants access
                  to members-only benefits, the first of which is access to THE
                  BATHROOM, a collaborative graffiti board. Future areas and
                  perks can be unlocked by the community through roadmap
                  activation.
                </p>
              </div>

              <div class="col-lg-4 ml-auto">
                <p class="lead">
                  <img src={image1} alt="/" class="hari1" />
                </p>
              </div>

              <div class="col-lg-4 ml-auto">
                <p class="lead text-black">
                  BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
                  collectibles living on the Ethereum blockchain. Your Bored Ape
                  doubles as your Yacht Club membership card, and grants access
                  to members-only benefits, the first of which is access to THE
                  BATHROOM, a collaborative graffiti board. Future areas and
                  perks can be unlocked by the community through roadmap
                  activation.
                </p>
              </div>

              <div class="col-lg-4 mr-auto">
                <p class="lead text-black">
                  BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
                  collectibles living on the Ethereum blockchain. Your Bored Ape
                  doubles as your Yacht Club membership card, and grants access
                  to members-only benefits, the first of which is access to THE
                  BATHROOM, a collaborative graffiti board. Future areas and
                  perks can be unlocked by the community through roadmap
                  activation.
                </p>
              </div>

              <div class="col-lg-4 ml-auto">
                <p class="lead">
                  <img src="/images/4.gif" alt="/" class="hari1" />
                </p>
              </div>

              <div class="col-lg-4 mr-auto">
                <p class="lead text-black">
                  BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
                  collectibles living on the Ethereum blockchain. Your Bored Ape
                  doubles as your Yacht Club membership card, and grants access
                  to members-only benefits, the first of which is access to THE
                  BATHROOM, a collaborative graffiti board. Future areas and
                  perks can be unlocked by the community through roadmap
                  activation.
                </p>
              </div>
            </div>
            <div class="text-center mt-4">
              <Link class="btn btn-xl btn-outline-primary" to="/Wallet">
                GET YOUR MEMEBITS
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
export default Overview;
