import web3 from "./web3.js";

const address = "0xb55DCA82178af86640cd2a554758Bb21E9b105Da";

const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
    signature: "constructor",
  },
  {
    inputs: [],
    name: "WinnerA",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
    signature: "0xa8cf61a0",
  },
  {
    inputs: [],
    name: "WinnerB",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
    signature: "0x26f93493",
  },
  {
    inputs: [],
    name: "enterA",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
    signature: "0x33e9cb12",
  },
  {
    inputs: [],
    name: "enterB",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
    signature: "0xddb972f5",
  },
  {
    inputs: [],
    name: "getPlayers",
    outputs: [
      { internalType: "address payable[]", name: "", type: "address[]" },
      { internalType: "address payable[]", name: "", type: "address[]" },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0x8b5b9ccc",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [{ internalType: "address payable", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0x481c6a75",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "playersA",
    outputs: [{ internalType: "address payable", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0x9a37ee81",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "playersB",
    outputs: [{ internalType: "address payable", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0xb651878d",
  },
];
//web3.eth.contract(props.catalog.abi).at(props.catalog.address);
export default new web3.eth.Contract(abi, address);
