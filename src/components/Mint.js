import "../css/styles.css";
import Select from "react-select";
import image1 from "../assets/img/ethereum.svg";
import { useEffect, Component } from "react";
import Payment from "../components/Payment";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import MeebitAvatars from "../abis/MeebitAvatars.json"
import Web3 from "web3";

const count = [];
var optionValue = 1;
var collectibleValue = null;
for (var i = 1; i <= 50; i++) {
  count.push({ label: i, value: i });
}

class Mint extends Component {
  async componentWillUnmount() {
    clearInterval(this.state.accountInterval);
  }

  async componentDidMount() {
    window.scrollTo(0, 0);

    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    }

    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    const networkId = await web3.eth.net.getId();
    const networkData = MeebitAvatars.networks[networkId];
    if (networkData) {
      const abi = MeebitAvatars.abi;
      const address = networkData.address;
      const contract = new web3.eth.Contract(abi, address);
      this.setState({ contract });
    } else {
      window.alert("Smart contract not deployed to detected network.");
    }

    optionValue = 1;
    let etherCost = await this.state.contract.methods.calculatePrice(optionValue).call();
    etherCost = web3.utils.fromWei(etherCost, 'ether');
    this.setState({ ethCost: etherCost });
    collectibleValue = 2;
    this.check();
  }

  // window.ethereum.on('accountsChanged', function (accounts) {
  //   // Time to reload your interface with accounts[0]!
  // });

  // window.ethereum.on('networkChanged', function (networkId) {
  //   // Time to reload your interface with the new networkId
  // });

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      contract: null,
      totalSupply: 0,
      noOfAvatars: 1,
      accountInterval: 0,
      network: 1,
      ethCost: null
    };
  }

  async check() {
    this.state.accountInterval = setInterval(async () => {
      const accounts = await window.web3.eth.getAccounts();
      if (accounts.length === 0) {
        window.location.reload();
      }
      if (accounts[0] !== this.state.account) {
        this.setState({ account: accounts[0] });
      }
      if (window.ethereum.networkVersion !== "4") {
        this.setState({ network: 0 });
      } else {
        this.setState({ network: 1 });
      }
    }, 1500);
  }

  mint = (number) => {
    this.state.contract.methods
      .createAvatar(number)
      .send(
        {
          from: this.state.account, value: web3.utils.toWei(this.state.ethCost, 'ether')
        })
      .once("receipt", (receipt) => {
        window.alert("Transaction Successful!! Redirecting to your collection.");
        this.props.history.push("/WalletHistory");
      })
      .once("error", (receipt) => {
        window.alert("Transaction Failed!!! Please try again.");
        this.props.history.push("/Wallet");
      });
    this.props.history.push("/Payment");
  };

  state = {
    selectedOption: 1
  };

  state = {
    value: { label: this.props.val, value: this.props.val }
  };

  handleChange = async (selectedOption) => {
    this.setState({ selectedOption });
    optionValue = selectedOption.value;
    let ethereumCost = await this.state.contract.methods.calculatePrice(optionValue).call();
    ethereumCost = web3.utils.fromWei(ethereumCost, 'ether')
    this.setState({ ethCost: ethereumCost });
    console.log(`Ethereum Cost:`, this.state.ethCost);
    console.log(`Option selected:`, selectedOption.value);
  };

  render() {
    const blockchain = () => {
      console.log("inside blockchain");
      this.props.history.push("/Payment");
    };
    
    const { selectedOption } = this.state;
    return (
      <div>
        <header className="masthead bg-white text-white text-center">
          <div className="container d-flex align-items-center flex-column">
            <h1 className="masthead-heading text-uppercase mb-0 text-black">
              Its time to mint some Avatars{" "}
            </h1>
            <br />
            <img className="masthead-avatar mb-5" src={image1} alt="..." />
            <p className="masthead-subheading font-weight-light mb-0 text-black">
              Choose required quantity and click on mint to create Avatars.
            </p>
            <br />
            {console.log(count[0].value)}
            <br />
            {this.state.network === 1 ? (
              <div>
                <br />
                <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={count}
                defaultValue={{ label: 1, value: 1 }}
                className="select text-black"
                />
                <br />
                <span className="text-black">
                <h2> Cost of Avatar(s): {this.state.ethCost} ETH </h2>
                </span>
                <div className="text-center mt-4">
                  <Link
                    className="btn btn-xl btn-outline-primary"
                    onClick={(event) => {
                      event.preventDefault();
                      this.mint(optionValue);
                    }}
                  >
                    MINT
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center mt-4">
                <p className="masthead-subheading font-weight-light mb-0 text-red">
                  Please connect to Ethereum Mainnet for minting NFTs
                </p>
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}
export default withRouter(Mint);
