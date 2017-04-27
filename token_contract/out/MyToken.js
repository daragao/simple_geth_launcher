var tokenBIN = "0x6060604052341561000c57fe5b60405160208061030c8339810160405" 
	+ "28080519060200190919050505b80600060003373ffffffffffffffffffffffff" 
	+ "ffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815" 
	+ "2602001908152602001600020819055505b505b61028d8061007f6000396000f3" 
	+ "0060606040526000357c010000000000000000000000000000000000000000000" 
	+ "0000000000000900463ffffffff16806370a0823114610046578063a9059cbb14" 
	+ "610090575bfe5b341561004e57fe5b61007a600480803573fffffffffffffffff" 
	+ "fffffffffffffffffffffff169060200190919050506100cf565b604051808281" 
	+ "5260200191505060405180910390f35b341561009857fe5b6100cd60048080357" 
	+ "3ffffffffffffffffffffffffffffffffffffffff169060200190919080359060" 
	+ "200190919050506100e7565b005b6000602052806000526040600020600091509" 
	+ "0505481565b80600060003373ffffffffffffffffffffffffffffffffffffffff" 
	+ "1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602" 
	+ "0016000205410156101345760006000fd5b600060008373ffffffffffffffffff" 
	+ "ffffffffffffffffffffff1673fffffffffffffffffffffffffffffffffffffff" 
	+ "f1681526020019081526020016000205481600060008573ffffffffffffffffff" 
	+ "ffffffffffffffffffffff1673fffffffffffffffffffffffffffffffffffffff" 
	+ "f168152602001908152602001600020540110156101c25760006000fd5b806000" 
	+ "60003373ffffffffffffffffffffffffffffffffffffffff1673fffffffffffff" 
	+ "fffffffffffffffffffffffffff16815260200190815260200160002060008282" 
	+ "54039250508190555080600060008473fffffffffffffffffffffffffffffffff" 
	+ "fffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190" 
	+ "8152602001600020600082825401925050819055505b50505600a165627a7a723" 
	+ "058206f83056a40dd5b048582c318fbdfeae6d70cf27a9c44fa6a3c26f7283464" 
	+ "bb560029";

var tokenABI = [
  {
    "constant": true,
    "inputs": [ { "name": "", "type": "address" } ],
    "name": "balanceOf",
    "outputs": [ { "name": "", "type": "uint256" } ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [ 
	    { "name": "_to", "type": "address" },
	    { "name": "_value", "type": "uint256" }
    ],
    "name": "transfer",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "inputs": [ { "name": "initialSupply", "type": "uint256" } ],
    "payable": false,
    "type": "constructor"
  }
];

//Script to create contract
var TokenContract = eth.contract(tokenABI);
var txObj = {
	from: eth.coinbase,
	data: tokenBIN,
	gas: 1000000
};
var deployCallback = function(err,contract) {
	if(!err) {
		console.log(contract.address);
	} else {
		console.log(err,contract);
	}
};
var tokenContractInstance = TokenContract.new(100000,txObj,deployCallback);
