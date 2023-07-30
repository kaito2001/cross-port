const Web3 = require('web3');
const fs = require('fs');
require('dotenv').config();
const path = require('path');

const filePath = path.join(__dirname, '../abis/soulbound.json');
const contractSoulJson = fs.readFileSync(filePath);
const SoulAbi = JSON.parse(contractSoulJson);
const { getGasPrice, getNonce } = require('./utils.js');
const web3 = new Web3('https://rpc.testnet.fantom.network/');

const createSoulBoundContract = () => {
  const contract = new web3.eth.Contract(SoulAbi, process.env.CONTRACT_SOUL);

  return contract;
};
let token_id = 1002;
const mintSoul = async () => {
  const SoulContract = createSoulBoundContract();
  const encodedTransaction = await SoulContract.methods
    .mint(
      token_id++, // token id of nft
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
    to: process.env.CONTRACT_SOUL,
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
let soul_id = 5;
const bondSoul = async (userAddress) => {
  const SoulContract = createSoulBoundContract();
  const encodedTransaction = await SoulContract.methods
    .bond(
      soul_id++, // soul id // auto từ 1
      userAddress, // parameter từ frontend
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
    to: process.env.CONTRACT_SOUL,
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

const checkSoulBoundExist = async (userAddress) => {
  const contract = new web3.eth.Contract(SoulAbi, process.env.CONTRACT_SOUL);

  try {
    // Call the method on the contract
    const result = await contract.methods['checkOwnerSbt'](userAddress).call({
      gas: 480000,
    });
    console.log(result);
    return result;
  } catch (error) {
    console.error('Error while querying contract method:', error);
  }

  return false;
};

module.exports = { mintSoul, bondSoul, checkSoulBoundExist };
