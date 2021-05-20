import "../css/styles.css";
function Footer() {
  return (
    <div>
      <footer class="footer text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="text-uppercase mb-4"></h4>
              <p class="lead mb-0">
                <br />
              </p>
            </div>
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="text-uppercase mb-4">Around the Web</h4>
              <a
                class="btn btn-outline-light btn-social mx-1"
                href="https://twitter.com/meebit_avatars"
                target="_blank"
              >
                <i class="fab fa-fw fa-twitter"></i>
              </a>
              <a class="btn btn-outline-light btn-social mx-1" href="#!">
                <i class="fab fa-fw fa-discord"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
