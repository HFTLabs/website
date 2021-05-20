import "../css/styles.css";
import { Link } from "react-router-dom";
import image1 from "../assets/img/1.jpg";
import React, { Component } from "react";
import FadeIn from "react-fade-in";
import ScrollAnimation from "react-animate-on-scroll";

var images = [];
class Portfolio extends Component {
  async componentWillMount() {
    images = [];
    await this.showImages();
  }
  async showImages() {
    for (var i = 1; i <= 6; i++) {
      var pic = "/images/" + i + ".gif";
      images.push(
        <div class="col-md-6 col-lg-4 mb-5">
          <div
            class="portfolio-item mx-auto"
            data-toggle="modal"
            data-target="#portfolioModal1"
          >
            <img class="img-fluid" src={pic} alt="..." />
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div style={{ background: "#8577fb" }}>
        <section class="page-section portfolio" id="portfolio">
          <div class="container">
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
              avatars
            </h2>
            <div class="divider-custom">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon">
                <i class="fas fa-star"></i>
              </div>
              <div class="divider-custom-line"></div>
            </div>
            <ScrollAnimation
              animateIn="fadeIn"
              animateOnce="true"
              duration={1.5}
            >
              <div class="row justify-content-center">{images}</div>

              <div class="text-center mt-4">
                <Link class="btn btn-xl btn-outline-light" to="/Gallery">
                  VIEW MORE
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    );
  }
}
export default Portfolio;
