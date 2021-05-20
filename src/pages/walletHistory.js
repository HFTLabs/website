import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NoMetamask from "../components/NoMetamask";
import WalletHistory from "../components/WalletHistory";
import image1 from "../assets/img/metamask.png";
import Web3 from "web3";

var flag = 0;
class WalletHistoryPage extends Component {
  async componentWillMount() {
    window.scrollTo(0, 0);
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      flag = 1;
    }
  }

  async loadBlockchainData() {
    const variable = 0;
    /*const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    const networkId = await web3.eth.net.getId();
    const networkData = Color.networks[networkId];
    if (networkData) {
      const abi = Color.abi;
      const address = networkData.address;
      const contract = new web3.eth.Contract(abi, address);
      this.setState({ contract });
      const totalSupply = await contract.methods.totalSupply().call();
      this.setState({ totalSupply });
      // Load Colors
      for (var i = 1; i <= totalSupply; i++) {
        const color = await contract.methods.colors(i - 1).call();
        this.setState({
          colors: [...this.state.colors, color]
        });
      }
    } else {
      window.alert("Smart contract not deployed to detected network.");
    }*/
  }

  mint = (color) => {
    this.state.contract.methods
      .mint(color)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({
          colors: [...this.state.colors, color]
        });
      });
  };
  render() {
    const renderBody = () => {
      if (flag === 0) {
        return (
          <NoMetamask
            image={image1}
            text=""
            para="Ethereum Wallet Not Detected"
          />
        );
      } else if (flag === 1) {
        return <WalletHistory />;
      }
    };
    return (
      <>
        <Navbar />
        {renderBody()}
        <Footer />
      </>
    );
  }
}

export default WalletHistoryPage;
