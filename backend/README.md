
[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][build-image]][build-url]
<!-- [![Build coverage][coverage-image]][coverage-url] -->
<!-- [![License][license-image]][license-url] -->

# API Functionality Description

This API provides functionalities related to creating and managing Non-Fungible Tokens (NFTs) on the Ethereum blockchain. NFTs are unique tokens with distinct values, often used to represent non-interchangeable digital assets or objects in blockchain-based applications.

## Features

1. Create and Mint New NFTs
   - Create a new NFT by sending a request to the API along with information about the NFT such as name, description, image, and other relevant details.
   - This request triggers the process of minting a unique NFT on the Ethereum blockchain and stores information about the NFT in the database.

2. View the List of Created NFTs
   - Returns a list of previously created NFTs, including information about each NFT such as name, description, and image.

3. View NFT Details
   - Returns detailed information about a specific NFT based on its ID or NFT address.
   - NFT details include name, description, image, and other relevant information.

4. Buy and Transfer NFTs
   - Allows users to buy and transfer NFTs that have been created or owned on the blockchain.
   - This requires transaction confirmation from the user and updates ownership information of the NFT after a successful transaction.

5. Check NFT Transaction Status
   - Provides the ability to check the transaction status of a minted or transferred NFT.
   - Supports determining whether the transaction was successful or not.

## How to Use the API

1. Install and configure Node.js and MongoDB to run the API.
2. Install additional dependencies such as Express, Mongoose, Web3, and related packages.
3. Establish a connection to the Ethereum node through Web3 and initialize a connection to MongoDB for NFT data storage.
4. Implement routes in Express to handle requests related to NFTs.
5. Provide request-handling methods from users and interact with the Ethereum blockchain to create and manage NFTs.
6. Ensure security and authentication of user requests to prevent fraudulent activities.

## Source Code Organization

- `config`: Contains configurations such as secret keys, Ethereum node addresses, MongoDB configurations, etc.
- `models`: Defines models for MongoDB to store NFT information.
- `services`: Contains helper functions such as NFT creation, transaction status check, etc.
- `controllers`: Defines request-handling functions, combining functionalities from `services`.
- `routes`: Defines routes in Express and attaches corresponding handling functions from `controllers`.

## Requirements

- Node.js and npm
- MongoDB
- Dependencies such as Express, Mongoose, Web3, etc.

## How to Run the API

1. Clone the repository and install dependencies using `npm install`.
2. Configure MongoDB connection information and Ethereum node in the `config` directory.
3. Run `node server.js` to start the server and listen to user requests.
4. Use HTTP requests to access the API's functionalities.

**Note**: This API should be deployed in a secure environment, ensuring proper authentication and authorization mechanisms to protect sensitive data and operations.

[npm-image]: https://img.shields.io/npm/v/path-to-regexp
[npm-url]: https://npmjs.org/package/path-to-regexp
[downloads-image]: https://img.shields.io/npm/dm/path-to-regexp
[downloads-url]: https://npmjs.org/package/path-to-regexp
[build-image]: https://img.shields.io/github/workflow/status/pillarjs/path-to-regexp/CI/master
[build-url]: https://github.com/kaito2001/cross-port/tree/81f160546c4c0041e30e8c902bb0103bdcae3f18/backend
<!-- [coverage-image]: https://img.shields.io/codecov/c/gh/pillarjs/path-to-regexp -->
<!-- [coverage-url]: https://codecov.io/gh/pillarjs/path-to-regexp -->
<!-- [license-image]: http://img.shields.io/npm/l/path-to-regexp.svg?style=flat -->
<!-- [license-url]: LICENSE.md -->
