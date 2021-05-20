import "../css/styles.css";
import { Link } from "react-router-dom";
import image1 from "../assets/img/1.jpg";
import ScrollAnimation from "react-animate-on-scroll";
function About1() {
  return (
    <div>
      <section class="page-section bg-white text-white mb-0" id="about">
        <ScrollAnimation
          animateIn="bounceInLeft"
          animateOnce="true"
          duration={1.5}
        >
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
              <div class="col-lg-4 ml-auto">
                <p class="lead text-black text-center">
                  {/* <img src={image1} alt="/" class="hari1" />
                  <h4>Colors</h4>
                  Avatars come in a variety of colors, each resembling a
                  different hue of the rainbow. */}
                </p>
              </div>

              {/* <div class="col-lg-4 ml-auto">
                <p class="lead text-black text-center">
                  <img src="/images/4.gif" alt="/" class="hari1" />
                  <h4>Animate</h4>
                  Avatars come in a variety of colors, each resembling a
                  different hue of the rainbow.
                </p>
              </div>
              <div class="col-lg-4 ml-auto">
                <p class="lead text-black text-center">
                  <img src="/images/2.gif" alt="/" class="hari1" />
                  <h4>Ultra rare</h4>
                  Avatars come in a variety of colors, each resembling a
                  different hue of the rainbow.
                </p>
              </div> */}
            </div>
          </div>
          <div class="collageRow">
            <div class="collageColumn">
              <img
                src="https://lh3.googleusercontent.com/ChSFTl3b-GUeTePhZ6YxAKZNo6_39Bf34ckOobKSIsDbBabN8wfp5SRMP_StCimrUCzL7DvajHkMftZJQSWhVNGstKN2YhAsz3KVnVxUyYjRfzMdW2HpEpj8raI6sjujWeX75X5d=w2400"
                alt="1"
              />
            </div>
            <div class="collageColumn">
              <img
                src="https://lh3.googleusercontent.com/ltq9EcmvdPjq8bREZvhACEYx5aLMu9eFDICGOBz4yTpCiRG7-En6wAt2rMax0LQnLkzlvqWdl7XWViU9MsS_T7xjkp7e3UL6ONItG5yMsuOra15DedY5vjgJ6vzA7e8JlyVeRd-j=w2400"
                alt="2"
              />
            </div>
            <div class="collageColumn">
              <img
                src="https://lh3.googleusercontent.com/pvzCxqY-1zJfnMsOATt5dzrQy0g7KbAsADIrdYBIyetjefxOA1wf1qYvkwpCYyxE2P07Te6fNa-wqGPDE3awflVQLAIzZ74mMdex8Md81JhhWQs6MC8YMAt6rU_uV6CKPNTg5Jkl=w2400"
                alt="3"
              />
            </div>
          </div>
          <br />
          <br />
          <div class="text-center mt-4">
            <Link class="btn btn-xl btn-outline-primary" to="/Wallet">
              GET YOUR AVATAR
            </Link>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
export default About1;
