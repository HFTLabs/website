import React, { Component } from "react";
import ReactDOM from "react-dom";
import LazyLoad from "react-lazy-load";
import "../css/styles.css";
import image1 from "../assets/img/1.jpg";
import ScrollAnimation from "react-animate-on-scroll";

var images = [];
class Gallery extends React.Component {
  async componentWillMount() {
    images = [];
    await this.showImages();
  }

  async showImages() {
    for (var i = 1; i <= 27; i++) {
      var pic = "/images/" + (i % 9) + ".gif";
      if (i % 9) {
        images.push(
          <div class="col-md-6 col-lg-4 mb-5">
            <div
              class="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal1"
            >
              <div className="skeleton">
                {" "}
                <LazyLoad height={300} once>
                  <img class="img-fluid" src={pic} alt="..." />
                </LazyLoad>{" "}
              </div>
            </div>
          </div>
        );
      }
    }
  }
  render() {
    return (
      <div style={{ background: "" }}>
        <section class="page-section portfolio" id="portfolio">
          <div class="container">
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
              Gallery
            </h2>

            <div class="divider-custom">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon">
                <i class="fas fa-star"></i>
              </div>
              <div class="divider-custom-line"></div>
            </div>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true" duration={2}>
              <div class="row justify-content-center">{images}</div>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    );
  }
}
export default Gallery;
