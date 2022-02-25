import Web3 from "web3";

// window.ethereum.request({ method: "eth_requestAccounts" });
// const web3 = new Web3(window.ethereum);

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

export default web3;