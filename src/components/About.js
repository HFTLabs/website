import "../css/styles.css";
import { Link } from "react-router-dom";
import image1 from "../assets/img/1.gif";
import FadeIn from "react-fade-in";
import ScrollAnimation from "react-animate-on-scroll";
import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <section class="page-section bg-white text-white mb-0" id="about">
          <div class="container">
            <h2 class="page-section-heading text-center text-uppercase text-black">
              we are meebit avatars!
            </h2>
            <div class="divider-custom">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon">
                <i class="fas fa-star"></i>
              </div>
              <div class="divider-custom-line"></div>
            </div>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOnce="true"
              duration={1}
            >
              <div class="row">
                <div class="col-lg-4 ml-auto">
                  <p class="lead text-black">
                    Meebit Avatars is a digital art project on the Ethereum
                    Blockchain paying homage to Meebits. They are unique and
                    single edition 1/1 NFTs. Only 4096 unique Meebit Avatars
                    will be created. This project is inspired by Meebits and is
                    not affiliated with Larva Labs. The Avatars are stored as
                    ERC-721 tokens on the Ethereum blockchain and hosted on
                    IPFS.
                  </p>
                </div>
                <div class="col-lg-4 ml-auto">
                  <p class="lead">
                    <img src="/images/4.gif" alt="/" class="hari1" />
                  </p>
                </div>
                <div class="col-lg-4 ml-auto">
                  <p class="lead text-black">
                    Each Avatar is unique and programmatically generated from
                    over 60 possible animations. All avatars are rarer than
                    others. Meebit Avatars were inspired by the original
                    Meebits. They follow the archetype of different types(Male,
                    Female) and have similar attributes...but they're animated
                    and there will only ever be a 4096 of them!
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div class="text-center mt-4">
            <Link class="btn btn-xl btn-outline-primary" to="/Wallet">
              GET YOUR AVATAR
            </Link>
          </div>
        </section>
      </div>
    );
  }
}
export default About;
