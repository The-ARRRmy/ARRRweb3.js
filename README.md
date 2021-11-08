# ARRRweb3.js - Web3.js for PirateChain

ARRRweb3 is a library to interract with Pirate network. Behind the scenes, ARRRweb3 communicates to a local Pirate node through Pirate-cli RPC calls.

https://www.npmjs.com/package/ARRRweb3

## Get Started
Run the following in your project folder:

	npm install arrrweb3 --save

## Running Tests

assuming you have nvm installed: https://github.com/nvm-sh/nvm
```
nvm i 16
nvm use 16
```

clone the repository
```
git clone https://github.com/The-ARRRmy/ARRRweb3.js
``` 

install all the packages
```
cd ARRRweb3.js
npm i
``` 

You need to create a `.env` file in the root folder with the following variables in the following formats. Change it to how your environment is setup.
```
PIRATE_RPC_ADDRESS='http://pirate:pirate@localhost:7771'
SENDER_ADDRESS='zs18y685qy9yeskqgpthzu2wr7hcvqpzzwesnrg3d2udrxq90st53elg07qmx4j5hnnv6mjwaap7yy'
WALLET_PASSPHRASE='pirate'
``` 

edit .komodo/PIRATE/PIRATE.conf 
```
rpcuser=pirate
rpcpassword=pirate
server=1
txindex=1
rpcworkqueue=256
rpcallowip=127.0.0.1
rpcbind=127.0.0.1
```

Run pirate full node
```
./pirated &
```

Run pirate full node
```
npm run test
``` 

## ARRRweb3.js
Instantiate a new instance of `ARRRweb3`: 
```
const { ARRRweb3 } = require('rweb3');

// Pass in the path of your local Pirate node rpc port with username/password
// In our case, username=pirate, password=pirate, port=7771
const arrrClient = new ARRRweb3('http://pirate:pirate@localhost:7771');

// Default Pirate RPC ports:
// testnet=17771
// mainnet=7771
```

### isConnected()
Checks if you are connected properly to the local pirate node.
```
async function isConnected() {
  return await arrrClient.isConnected();
}
```

### getBlockCount()
Gets the current block height of your local Pirate node.
```
async function getBlockCount() {
  return await arrrClient.getBlockCount();
}
```

### getTransaction(txid)
Gets the transaction details of the transaction id.
```
async function getTransaction(args) {
  const {
    transactionId, // string
  } = args;

  return await arrrClient.getTransactionReceipt(transactionId);
}
```

### getTransactionReceipt(txid)
Gets the transaction receipt of the transaction id.
```
async function getTransactionReceipt(args) {
  const {
    transactionId, // string
  } = args;

  return await arrrClient.getTransactionReceipt(transactionId);
}
```

### listUnspent()
Gets the unspent outputs that can be used.
```
async function listUnspent() {
  return await arrrClient.listUnspent();
}
```
