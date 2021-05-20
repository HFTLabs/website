import "../css/styles.css";
import { Link } from "react-router-dom";
import image1 from "../assets/img/metamask.png";
import image2 from "../assets/img/ethereum.svg";
import image3 from "../assets/img/buy.svg";
import ScrollAnimation from "react-animate-on-scroll";
function How() {
  return (
    <div style={{ background: "#8577fb" }}>
      <section class="page-section text-white mb-0" id="about">
        <div class="container">
          <h2 class="page-section-heading text-center text-uppercase text-black">
            how do i get an avatar?
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
            duration={1.5}
          >
            <div class="row">
              <div class="col-lg-4 ml-auto">
                <p class="lead text-black text-center">
                  <img src={image1} alt="/" class="ethereum" />
                  Download and install a Chrome browser plugin called MetaMask.
                  This will allow websites (that you authorize) access to your
                  Ethereum account.
                </p>
              </div>
              <div class="col-lg-4 ml-auto">
                <p class="lead text-black text-center">
                  <img src={image2} alt="/" class="ethereum1" />
                  If you made a new account, buy some Ether. The MetaMask plugin
                  has a button that will allow you to buy Ether from Coinbase.
                </p>
              </div>
              <div class="col-lg-4 ml-auto">
                <p class="lead text-black text-center">
                  <img src={image3} alt="/" class="hari1" />
                  Once you have the plugin installed, this website will
                  recognize it and add buttons that allow you mint meebit
                  avatars directly in the interface.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
export default How;
