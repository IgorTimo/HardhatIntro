require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
   rinkeby: {
     url: "https://rinkeby.infura.io/v3/ac8c7f8dd7bb45dc92f90f8391ac0696", 
     accounts: ["97bec7c4ce4e6ded8539f3a2513920638a8be1fd99e5c5c0121059322b0c63c3"] // add the account that will deploy the contract (private key)
    },
  }
};
