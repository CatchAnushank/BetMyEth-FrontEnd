import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import web3 from "./web3.js";
import lottery from "./lottery.js";

class App extends React.Component {
  state = {
    manager: "",
    players: [],
    balance: "",
    value: "",
    message: "",
  };

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const manager = await lottery.methods
      .manager()
      .call({ from: accounts[0], gas: "10000000" });
    console.log("Manager is:", manager);
    const players = await lottery.methods
      .getPlayers()
      .call({ from: accounts[0] });
    console.log(players);
    const balance = await web3.eth.getBalance(lottery.options.address);
    console.log(accounts);
    this.setState({ manager, players, balance });
  }

  onSubmit1 = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    this.setState({ message: "Waiting on transaction success..." });
    console.log("WORKED 1");
    await lottery.methods.enterA().send({
      from: accounts[0],
      value: web3.utils.toWei("0.1", "ether"),
    });
    console.log("WORKED 2");

    this.setState({ message: "You have been entered in support of team A!" });
  };

  onSubmit2 = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    this.setState({ message: "Waiting on transaction success..." });
    console.log("WORKED 1");
    await lottery.methods.enterB().send({
      from: accounts[0],
      value: web3.utils.toWei("0.1", "ether"),
    });
    console.log("WORKED 2");

    this.setState({ message: "You have been entered in support of team B!" });
  };

  onClick1 = async (event) => {
    const accounts = await web3.eth.getAccounts();
    this.setState({ message: "Waiting on transaction success..." });
    await lottery.methods.WinnerA().send({ from: accounts[0] });
    this.setState({ message: "A is the winner" });
  };
  onClick2 = async (event) => {
    const accounts = await web3.eth.getAccounts();
    this.setState({ message: "Waiting on transaction success..." });
    await lottery.methods.WinnerB().send({ from: accounts[0] });
    this.setState({ message: "B is the winner" });
  };
  //  console.log{this.state.manager};
  render() {
    ///web3.eth.getAccounts().then(console.log);
    //    this.state.manager.then(console.log)
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by {this.state.manager}. There are currently{" "}
          {this.state.players.length} people entered, competing to win{" "}
          {web3.utils.fromWei(this.state.balance, "ether")} ether!
        </p>
        <hr />
        <form onSubmit={this.onSubmit1}>
          <h4>want to try your luck?</h4>
          <div>
            <label>Bet that A will win</label>
          </div>
          <button>Enter</button>
        </form>
        <hr />
        <form onSubmit={this.onSubmit2}>
          <h4>want to try your luck?</h4>
          <div>
            <label>Bet that B will win</label>
          </div>
          <button>Enter</button>
        </form>
        <hr />
        <h4> Ready to pick a winner?</h4>
        <button onClick={this.onClick1}>pick A as a winner!</button>
        <button onClick={this.onClick2}>pick B as a winner!</button>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
