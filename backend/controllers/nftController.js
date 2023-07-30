const Web3 = require('web3');
const fs = require('fs');
require('dotenv').config();

const web3 = new Web3('https://rpc.testnet.fantom.network/');
const path = require('path');

const filePath = path.join(__dirname, '../abis/nft.json');
const contractNFTJson = fs.readFileSync(filePath);
const NFTAbi = JSON.parse(contractNFTJson);
const { getGasPrice, getNonce } = require('./utils.js');

const createNFTContract = () => {
  const contract = new web3.eth.Contract(NFTAbi, process.env.CONTRACT_NFT);

  return contract;
};

let token_id = 1002;
const mint = async () => {
  const NFTContract = createNFTContract();

  const encodedTransaction = await NFTContract.methods
    .mint(
      process.env.ACCOUNT_OWNER,
      token_id++, // token_id of nft
    )
    .encodeABI();

  const gas = 480000;
  const gasPrice = web3.utils.toHex(await getGasPrice());
  const nonce = web3.utils.toHex(await getNonce());
  const { address, privateKey } = web3.eth.accounts.privateKeyToAccount(
    process.env.PRIVATE_KEY,
  );

  let txParams = {
    from: web3.utils.toChecksumAddress(address),
    gas,
    gasPrice,
    nonce,
    data: encodedTransaction,
    to: process.env.CONTRACT_NFT,
  };

  const signedTransaction = await web3.eth.accounts.signTransaction(
    txParams,
    privateKey,
  );

  return new Promise(async (resolve, reject) => {
    const receipt = await web3.eth.sendSignedTransaction(
      signedTransaction.raw || signedTransaction.rawTransaction,
    );
    if (receipt && receipt.status) {
      resolve(receipt);
    } else {
      reject('Transaction failed to be signed');
    }
  });
};

module.exports = { mint };
