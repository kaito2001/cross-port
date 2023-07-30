const getGasPrice = async () => {
  try {
    const gasPrice = await web3.eth.getGasPrice();
    return gasPrice;
  } catch (error) {
    console.error('Error while fetching gas price:', error);
    throw error;
  }
};

const getNonce = async () => {
  try {
    const { address: dev_address } = web3.eth.accounts.privateKeyToAccount(
      process.env.PRIVATE_KEY
    );
    const nonce = await web3.eth.getTransactionCount(
      web3.utils.toChecksumAddress(dev_address)
    );
    return nonce;
  } catch (error) {
    console.error('Error while fetching nonce:', error);
    throw error;
  }
};

const checkTransactionStatus = async (transactionHash) => {
  try {
    const receipt = await web3.eth.getTransactionReceipt(transactionHash);
    if (receipt && receipt.status) {
      console.log('Transaction was successful!');
    } else {
      console.log('Transaction failed.');
    }
  } catch (error) {
    console.error('Error while checking transaction status:', error);
    throw error;
  }
};


module.exports ={ 
  getGasPrice: getGasPrice,
  getNonce: getNonce,
  checkTransactionStatus: checkTransactionStatus
}