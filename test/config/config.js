require('dotenv').config();

/*
* Returns the default Pirate address.
* @return {String} Default Pirate address.
*/
function getDefaultPirateAddress() {
  if (!process.env.SENDER_ADDRESS) {
    throw Error('Must have SENDER_ADDRESS in .env');
  }
  return String(Buffer.from(process.env.SENDER_ADDRESS));
}

/*
* Returns the Pirate network RPC url.
* @return {String} The Pirate network RPC url.
*/
function getPirateRPCAddress() {
  if (!process.env.PIRATE_RPC_ADDRESS) {
    throw Error('Must have PIRATE_RPC_ADDRESS in .env');
  }
  return String(Buffer.from(process.env.PIRATE_RPC_ADDRESS));
}

/*
* Returns the wallet passphrase to unlock the encrypted wallet.
* @return {String} The wallet passphrase.
*/
function getWalletPassphrase() {
  return process.env.WALLET_PASSPHRASE ? String(Buffer.from(process.env.WALLET_PASSPHRASE)) : '';
}

module.exports = {
  getPirateRPCAddress,
  getDefaultPirateAddress,
  getWalletPassphrase,
};
