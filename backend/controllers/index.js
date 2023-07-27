const {mintSoul, bondSoul} = require('./soulboundController');
const {mint} = require('./nftController');
const Web3 = require('web3');
require('dotenv').config();

const web3 = new Web3("https://rpc.testnet.fantom.network/");

async function generateMint(req, res, next) {
    try {
        await mint().then(
            (receipt) => {
                console.log(receipt);
                mintSoul.then(
                    (receipt) => { 
                        console.log(receipt);
                        bondSoul(req.address).then((receipt) => {console.log(receipt)},
                    (error) => {
                        console.error(error);
                    });
            },
            (error) => {
                console.error(error);
            })}

        );
    } catch (error) {
        console.log(error);
    }
}

module.exports = {generateMint}