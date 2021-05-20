import "../css/styles.css";

function NoMetamask(props) {
  return (
    <div>
      <header class="masthead bg-white text-white text-center">
        <div class="container d-flex align-items-center flex-column">
          <img class="masthead-avatar mb-5" src={props.image} alt="..." />
          <h1 class="masthead-heading text-uppercase mb-0 text-black">
            {props.text}
          </h1>
          <p class="masthead-subheading font-weight-light mb-0 text-black">
            {props.para}
          </p>
          <div class="text-center mt-4">
            <a
              class="btn btn-xl btn-outline-primary"
              href="https://metamask.io/"
              target="_blank"
            >
              CONNECT TO METAMASK
            </a>
          </div>
          <div class="text-center mt-4 text-black">
            Don't have metamask?{" "}
            <a href="https://metamask.io/" target="_blank" className="refText">
              Download here
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
export default NoMetamask;
