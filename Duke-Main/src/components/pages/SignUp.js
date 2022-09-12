import React, { Component } from "react";
import Web3 from "web3";
import { Home } from "./Home";
import { Redirect } from "react-router-dom";
import "../../App.css";

class SignUp extends React.Component {
  async componentWillMount() {
    await this.loadWeb3();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  state = {
    redirect: false,
  };
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };
  render() {
    return (
      <div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>
          Please Login with Metamask Thank you!
        </button>
      </div>
    );
  }
}

export default SignUp;
