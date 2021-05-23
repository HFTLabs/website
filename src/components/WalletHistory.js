import React, { useEffect, Component } from "react";
import ReactDOM from "react-dom";
import LazyLoad from "react-lazy-load";
import "../css/styles.css";
import MeebitAvatars from "../abis/MeebitAvatars.json"
import Web3 from "web3";
import { Link } from "react-router-dom";

var images = [];
class WalletHistory extends React.Component {
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

	  this.check();
    await this.loadBlockchainData();
    images = [];
    await this.showImages();
  }

  async loadBlockchainData() {
    this.state.tokens.length = 0;
    const web3 = window.web3;
    if (web3) {
      const accounts = await web3.eth.getAccounts();
      this.setState({ account: accounts[0] });
      const networkId = await web3.eth.net.getId();
      const networkData = MeebitAvatars.networks[networkId];
      if (networkData)
      {
        const abi = MeebitAvatars.abi;
        const address = networkData.address;
        const contract = new web3.eth.Contract(abi, address);
        this.setState({ contract });
        
        const tempTokens = await  this.state.contract.methods.tokensOfOwner(this.state.account).call();
        this.setState({ tokens: tempTokens })
        console.log("Tot Supply: " + tempTokens)
      } else
      {
        window.alert("Smart contract not deployed to detected network.");
        this.setState({ network: 0 });
      }
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      contract: null,
      tokens: [],
      images: [],
      noOfAvatars: 1,
      accountInterval: 0,
      network: 1
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
        await this.loadBlockchainData();
      }
      if (window.ethereum.networkVersion !== "4") {
        this.setState({ network: 0 });
      } else {
        this.setState({ network: 1 });
      }
    }, 1500);
  }

  async showImages() {
    if (this.state.tokens.length > 0) {
      var file = require("../assets/json/metadata.json");
      console.log(file[4947]);
      for (var i = 0; i < this.state.tokens.length; i++) {
        images.push(
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal1"
            >
              <p className="lead text-black text-center">
                <img className="img-fluid" src={file[i].image} alt="..." />
                <h4>MeebitAvatar #{tokens[i]}</h4>
                <a href={file[i].image} target="_blank">
                  View your token
                </a>
              </p>
            </div>
          </div>
        );
      }
    } else {
      images.push(
        <div className="col-md-6 col-lg-4 mb-5">
          <div
            className="portfolio-item mx-auto"
            data-toggle="modal"
            data-target="#portfolioModal1"
          >
            <p className="lead text-black text-center">
              You have no collections yet <span>&#9785;</span>.
            </p>
            <p className="lead text-black text-center">
              Click on Mint to add collections.
            </p>
            <div className="text-center mt-4">
              <Link
                className="btn btn-xl btn-outline-primary"
                to="/Wallet"
                key="payment"
              >
                MINT
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={{ background: "" }}>
        <br />
        <br />
        <section className="page-section portfolio" id="portfolio">
          <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              My Collections
            </h2>

            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            <div className="row justify-content-center">{images}</div>
          </div>
        </section>
      </div>
    );
  }
}
export default WalletHistory;
