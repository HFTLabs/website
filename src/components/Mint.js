import "../css/styles.css";
import Select from "react-select";
import image1 from "../assets/img/ethereum.svg";
import { Component } from "react";
import Payment from "../components/Payment";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

const count = [];
var cost = null;
var optionValue = 1;
var collectibleValue = null;
for (var i = 1; i <= 50; i++) {
  count.push({ label: i, value: i });
}
class Mint extends Component {
  async componentWillMount() {
    window.scrollTo(0, 0);
    // var ethereum = window.ethereum;
    // var [addr, setAddr] = useState("");
    // if (ethereum) {
    //   ethereum.on("accountsChanged", function (accounts) {
    //     setAddr(accounts[0]);
    //   });
    // }
    cost = null;
    optionValue = 1;
    collectibleValue = 2;
  }
  state = {
    selectedOption: 1
  };
  state = {
    value: { label: this.props.val, value: this.props.val }
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption.value);
    optionValue = selectedOption.value;
  };
  render() {
    const blockchain = () => {
      console.log("inside blockchain");
      this.props.history.push("/Payment");
    };
    const showCost = () => {
      cost = optionValue * collectibleValue;
      if (cost > 0) {
        return (
          <span class="text-black">
            <b>Total Cost to mint: {cost} ETH</b>
          </span>
        );
      }
    };
    const { selectedOption } = this.state;
    return (
      <div>
        <header class="masthead bg-white text-white text-center">
          <div class="container d-flex align-items-center flex-column">
            <h1 class="masthead-heading text-uppercase mb-0 text-black">
              Its time to mint some Avatars{" "}
            </h1>
            <br />
            <img class="masthead-avatar mb-5" src={image1} alt="..." />
            <p class="masthead-subheading font-weight-light mb-0 text-black">
              Choose required quantity to mint and click on mint button to
              generate NFTs.
            </p>
            <br />
            {console.log(count[0].value)}
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={count}
              defaultValue={{ label: 1, value: 1 }}
              className="select text-black"
            />
            <br />
            {showCost()}
            <div class="text-center mt-4">
              <Link class="btn btn-xl btn-outline-primary" onClick={blockchain}>
                MINT
              </Link>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default withRouter(Mint);
