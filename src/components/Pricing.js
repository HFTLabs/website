import "../css/styles.css";
// import image1 from "../assets/img/pricing.png";
function Pricing() {
  return (
    <div>
      <section class="page-section" id="contact">
        <div class="container">
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
            Pricing Structure
          </h2>
          <br />
          {/* <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
              <i class="fas fa-star"></i>
            </div>
            <div class="divider-custom-line"></div>
          </div> */}
          {/* <img
            src="https://lh3.googleusercontent.com/SM2IWjqzQli_xEdTVIyK6VpbpJSswg-sNcv6vIUJm0y-OqFhtoAfhsUfEIJVmA6JlwzslzhHHldCu77OdGZH6cew8ZD14yOtb-_31TsIM2sx2uVqc47tO18niZzeqthhNkYps4HE=w2400"
            alt="/"
            className="pricing"
          /> */}
          {/* <img
            src="https://lh3.googleusercontent.com/6nmqesaXRiMAquP5BddoYa7wqrre0AX2aODiDlfb3K7dnAH_ywlKowmtBjl2wSNM3uykVGyQz6Z8BZbyoD3bwSngaQLefw-BWGlkn9rz8O3Xkmu5wfZhSueTngQ5V77m0V0Lyn9g=w2400"
            alt="/"
            className="pricing"
          /> */}

          <div class="pricingContainer">
            <div class="pricingWrapper">
              <ul class="pricingSessions">
                <li>
                  <div class="pricingTime">#1 - #499</div>
                  <p>0.02 ETH</p>
                </li>
                <li>
                  <div class="pricingTime">#500 - #999</div>
                  <p>0.04 ETH</p>
                </li>
                <li>
                  <div class="pricingTime">#1000 - #1499</div>
                  <p>0.06 ETH</p>
                </li>
                <li>
                  <div class="pricingTime">#1500 - #1999</div>
                  <p>0.08 ETH</p>
                </li>
                <li>
                  <div class="pricingTime">#2000 - #2499</div>
                  <p>0.1 ETH</p>
                </li>
                <li>
                  <div class="pricingTime">#2500 - #2999</div>
                  <p>0.15 ETH</p>
                </li>
                <li>
                  <div class="pricingTime">#3000 - #3499</div>
                  <p>0.2 ETH</p>
                </li>
                <li>
                  <div class="pricingTime">#3500 - #3999</div>
                  <p>0.5 ETH</p>
                </li>
                <li>
                  <div class="pricingTime">#4000 - #4089</div>
                  <p>1 ETH</p>
                </li>
                <li>
                  <div class="pricingTime">#4090 - #4096</div>
                  <p>AUCTIONED</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Pricing;
