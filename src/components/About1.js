import "../css/styles.css";
import { Link } from "react-router-dom";
import image1 from "../assets/img/Collage.png";
import image2 from "../assets/img/Collage1.png";
import image3 from "../assets/img/Collage2.png";
import ScrollAnimation from "react-animate-on-scroll";
function About1() {
  return (
    <div>
      <section class="page-section bg-white text-white mb-0" id="about">
          <div class="container">
            <h2 class="page-section-heading text-center text-uppercase text-black">
              discover the universe of meebit avatars
            </h2>
            <div class="divider-custom">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon">
                <i class="fas fa-star"></i>
              </div>
              <div class="divider-custom-line"></div>
            </div>

            <div class="row">
              <div class="ml-auto">
                <p class="lead text-black text-center">
                  Meebit Avatars exist in many shapes and colours, each
                  differing in unique looks and individual rarity. There are
                  also ultra-rare variants waiting for you to discover.
                </p>
              </div>
            </div>
          </div>
     <ScrollAnimation
          animateIn="bounceInLeft"
          animateOnce="true"
          duration={1.5}
        >
          <div class="collageRow">
            <div class="collageColumn">
              <img
                src={image1} alt="1"
              />
            </div>
            <div class="collageColumn">
               <img
                src={image2} alt="2"
              />
            </div>
            <div class="collageColumn">
               <img
                src={image3} alt="3"
              />
            </div>
          </div>
          </ScrollAnimation>
          <br />
          <br />
          <div class="text-center mt-4">
            <Link class="btn btn-xl btn-outline-primary" to="/Wallet">
              GET YOUR AVATAR
            </Link>
          </div>
       
      </section>
    </div>
  );
}
export default About1;
