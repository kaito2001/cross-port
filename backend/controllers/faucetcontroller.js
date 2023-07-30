const Web3 = require('web3');
const fs = require('fs');
require('dotenv').config();

const web3 = new Web3('https://rpc.testnet.fantom.network/');
const path = require('path');
const { getGasPrice, getNonce } = require('./utils.js');
const { checkSoulBoundExist } = require('./soulboundController.js');

const faucet = async () => {};

const transfer = async (userAddress) => {
  const gas = 21000;
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
    value: web3.utils.toHex('100000000000000000'),
    to: userAddress,
  };

  const signedTransaction = await web3.eth.accounts.signTransaction(
    txParams,
    privateKey,
  );

  const receipt = await web3.eth.sendSignedTransaction(
    signedTransaction.raw || signedTransaction.rawTransaction,
  );
  return receipt;
};

module.exports = { transfer };
