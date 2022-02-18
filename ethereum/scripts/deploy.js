const {ethers} = require('hardhat');


async function main() {

    const deployer = await ethers.getSigner();
    console.log("Deployer address: ", deployer.address);
    console.log("Deployer balance: ", await deployer.getBalance());

    const LuckyNumber = await ethers.getContractFactory("LuckyNumber");
    const luckyNumber = await LuckyNumber.deploy();

    await luckyNumber.deployed();
  
    console.log("LuckyNumber deployed to:", luckyNumber.address);
  }
  
  // address: 0x728f7cb1de3C0b85a1D3D0db5568B6b328182f37
  // mnemonic: dumb advice drill sport rose file random parent crime nurse inquiry noodle


  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });