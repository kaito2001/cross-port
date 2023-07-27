const getGasPrice = async () => {
    return await web3.eth.getGasPrice();
};

const getNonce = async () => {
    const { address: dev_address } = web3.eth.accounts.privateKeyToAccount(
        process.env.PRIVATE_KEY
    );


    return await web3.eth.getTransactionCount(
        web3.utils.toChecksumAddress(dev_address)
    );
};

async function checkTransactionStatus(transactionHash) {
    try {
      const receipt = await web3.eth.getTransactionReceipt(transactionHash);
  
      if (receipt && receipt.status) {
        // Transaction successful
        console.log('Transaction was successful!');
      } else {
        // Transaction failed
        console.log('Transaction failed.');
      }
    } catch (error) {
      console.error('Error while checking transaction status:', error);
    }
  }