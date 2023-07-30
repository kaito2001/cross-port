const { mintSoul, bondSoul } = require('./soulboundController');
const { mint } = require('./nftController');
const Web3 = require('web3');
const { checkSoulBoundExist } = require('./soulboundController.js');
const { transfer } = require('./faucetcontroller.js');
require('dotenv').config();

const web3 = new Web3('https://rpc.testnet.fantom.network/');

async function generateMint(req, res, next) {
  try {
    // Mint NFT
    const mintReceipt = await mint();
    console.log('Mint Receipt:', mintReceipt);

    // Mint Soulbound NFT
    const soulMintReceipt = await mintSoul();
    console.log('Soul Mint Receipt:', soulMintReceipt);

    // Bond Soulbound NFT
    const bondSoulReceipt = await bondSoul(req.params.address);
    console.log('Bond Soul Receipt:', bondSoulReceipt);
    res.json({ message: 'NFT mint and soulbound successfully' });
  } catch (error) {
    console.log(error);
  }
}

const faucet = async (req, res) => {
  try {
    const isSoubound = checkSoulBoundExist(req.params.address);
    if (isSoubound) {
      const faucetReceipt = await transfer(req.params.address);
      if (faucetReceipt && faucetReceipt.status == true) {
        res.json({ message: 'faucet successfully' });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { generateMint, faucet };
