import "../css/styles.css";
// import image1 from "../assets/img/pricing.png";
import ScrollAnimation from "react-animate-on-scroll";
function Pricing() {
  return (
    <div>
      <section className="page-section" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Pricing Structure
          </h2>
          <br />
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5}>
          <div className="pricingContainer">
            <div className="pricingWrapper">
              <ul className="pricingSessions">
                <li>
                  <div className="pricingTime">#1 - #499</div>
                  <p>0.05 ETH</p>
                </li>
                <li>
                  <div className="pricingTime">#500 - #999</div>
                  <p>0.10 ETH</p>
                </li>
                <li>
                  <div className="pricingTime">#1000 - #1499</div>
                  <p>0.15 ETH</p>
                </li>
                <li>
                  <div className="pricingTime">#1500 - #1999</div>
                  <p>0.20 ETH</p>
                </li>
                <li>
                  <div className="pricingTime">#2000 - #2499</div>
                  <p>0.25 ETH</p>
                </li>
                <li>
                  <div className="pricingTime">#2500 - #2999</div>
                  <p>0.30 ETH</p>
                </li>
                <li>
                  <div className="pricingTime">#3000 - #3499</div>
                  <p>0.35 ETH</p>
                </li>
                <li>
                  <div className="pricingTime">#3500 - #3999</div>
                  <p>0.40 ETH</p>
                </li>
                <li>
                  <div className="pricingTime">#4000 - #4499</div>
                  <p>0.45 ETH</p>
                </li>
                <li>
                  <div className="pricingTime">#4500 - #4999</div>
                  <p>0.50 ETH</p>
                </li>
                 <li>
                  <div className="pricingTime">#5000 - #5499</div>
                  <p>0.55 ETH</p>
                </li>
                 <li>
                  <div className="pricingTime">#5500 - #5999</div>
                  <p>0.60 ETH</p>
                </li>
                <li>
                  <div className="pricingTime">#6000 - #6099</div>
                  <p>1.2 ETH</p>
                </li>
                 <li>
                  <div className="pricingTime">#6100 - #6196</div>
                  <p>2.4 ETH</p>
                </li>
              </ul>
            </div>
          </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
export default Pricing;
