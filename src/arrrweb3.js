// const _ = require('lodash');
const HttpProvider = require('./httpprovider');
const Utils = require('./utils');

class ARRRweb3 {
  constructor(url) {
    this.provider = new HttpProvider(url);
    this.utils = Utils;
  }

  /** ******** MISC ********* */
  /**
   * Checks if the blockchain is connected.
   * @return If blockchain is connected.
   */
  async isConnected() {
    try {
      const res = await this.provider.rawCall('getnetworkinfo');
      return typeof res === 'object';
    } catch (err) {
      return false;
    }
  }

  /** ******** BLOCKCHAIN ********* */
  /**
   * Returns the block info for a given block hash.
   * @param {string} blockHash The block hash to look up.
   * @param {boolean} verbose True for a json object or false for the hex encoded data.
   * @return {Promise} Latest block info or Error.
   */
  getBlock(blockHash, verbose = true) {
    return this.provider.rawCall('getblock', [blockHash, verbose]);
  }

  /**
   * Returns various state info regarding blockchain processing.
   * @return {Promise} Latest block info or Error.
   */
  getBlockchainInfo() {
    return this.provider.rawCall('getblockchaininfo');
  }

  /**
   * Returns the current block height that is synced.
   * @return {Promise} Current block count or Error.
   */
  getBlockCount() {
    return this.provider.rawCall('getblockcount');
  }

  /**
   * Returns the block hash of the block height number specified.
   * @param {number} blockNum The block number to look up.
   * @return {Promise} Block hash or Error.
   */
  getBlockHash(blockNum) {
    return this.provider.rawCall('getblockhash', [blockNum]);
  }

  /**
   * Returns the transaction receipt given the txid.
   * @param {string} txid The transaction id to look up.
   * @return {Promise} Transaction receipt or Error.
   */
  getTransactionReceipt(txid) {
    return this.provider.rawCall('gettransactionreceipt', [txid]);
  }

  /** ******** CONTROL ********* */
  /**
   * Get the blockchain info.
   * @return {Promise} Blockchain info object or Error
   */
  getInfo() {
    return this.provider.rawCall('getinfo');
  }

  /** ******** NETWORK ********* */
  /**
   * Returns data about each connected network node as a json array of objects.
   * @return {Promise} Node info object or Error
   */
  getPeerInfo() {
    return this.provider.rawCall('getpeerinfo');
  }

  /** ******** UTIL ********* */
  /**
   * Validates if a valid Pirate address.
   * @param {string} address Pirate address to validate.
   * @return {Promise} Object with validation info or Error.
   */
  validateAddress(address) {
    return this.provider.rawCall('validateaddress', [address]);
  }

  /** ******** WALLET ********* */
  /**
   * Lists transactions
   * @param {string} * All accounts
   * @param {string} mostRecent Number of most recent transactions
   * @return {Promise} Success or Error.
   */
  listTransactions(mostRecent) {
    return this.provider.rawCall('zs_listtransactions', [0, 0, 0, mostRecent]);
  }

  /**
   * Backs up the wallet.
   * @param {string} destination The destination directory or file.
   * @return {Promise} Success or Error.
   */
  backupWallet(destination) {
    return this.provider.rawCall('backupwallet', [destination]);
  }

  /**
   * Reveals the private key corresponding to the address.
   * @param {string} address The Pirate address for the private key.
   * @return {Promise} Private key or Error.
   */
  dumpPrivateKey(address) {
    return this.provider.rawCall('dumpprivkey', [address]);
  }

  /**
   * Reveals the private key corresponding to the z_address.
   * @param {string} address The Pirate z_address for the private key.
   * @return {Promise} Private key or Error.
   */
  zExportKey(address) {
    return this.provider.rawCall('z_exportkey', [address]);
  }

  /**
   * Encrypts the wallet for the first time. This will shut down the Pirate server.
   * @param {string} passphrase The passphrase to encrypt the wallet with. Must be at least 1 character.
   * @return {Promise} Success or Error.
   */
  encryptWallet(passphrase) {
    return this.provider.rawCall('encryptwallet', [passphrase]);
  }

  /**
   * Gets the account name associated with the Pirate address.
   * @param {string} address The Pirate address for account lookup.
   * @return {Promise} Account name or Error.
   */
  getAccount(address) {
    return this.provider.rawCall('getaccount', [address]);
  }

  /**
   * Gets the Pirate address based on the account name.
   * @param {string} acctName The account name for the address ("" for default).
   * @return {Promise} Pirate address or Error.
   */
  getAccountAddress(acctName = '') {
    return this.provider.rawCall('getaccountaddress', [acctName]);
  }

  /**
   * Gets the Pirate address with the account name.
   * @param {string} acctName The account name ("" for default).
   * @return {Promise} Pirate address array or Error.
   */
  getAddressesByAccount(acctName = '') {
    return this.provider.rawCall('getaddressesbyaccount', [acctName]);
  }

  /**
   * Gets a new Pirate address for receiving payments.
   * @param {string} acctName The account name for the address to be linked to ("" for default).
   * @return {Promise} Pirate address or Error.
   */
  getNewAddress() {
    return this.provider.rawCall('z_getnewaddress');
  }

  /**
   * Get transaction details by txid
   * @param {string} txid The transaction id (64 char hex string).
   * @return {Promise} Promise containing result object or Error
   */
  getTransaction(txid) {
    return this.provider.rawCall('zs_gettransaction', [txid]);
  }

  /**
   * Gets the wallet info
   * @return {Promise} Promise containing result object or Error
   */
  getWalletInfo() {
    return this.provider.rawCall('getwalletinfo');
  }

  /**
   * Gets the total unconfirmed balance.
   * @return {Promise} Unconfirmed balance or Error.
   */
  getUnconfirmedBalance() {
    return this.provider.rawCall('getunconfirmedbalance');
  }

  /**
   * Adds an address that is watch-only. Cannot be used to spend.
   * @param {string} address The hex-encoded script (or address).
   * @param {string} label An optional label.
   * @param {boolean} rescan Rescan the wallet for transactions.
   * @return {Promise} Success or Error.
   */
  importAddress(address, label = '', rescan = true) {
    return this.provider.rawCall('importaddress', [address, label, rescan]);
  }

  /**
   * Adds an address by private key.
   * @param {string} privateKey The private key.
   * @param {string} label An optional label.
   * @param {boolean} rescan Rescan the wallet for transactions.
   * @return {Promise} Success or Error.
   */
  importPrivateKey(privateKey, label = '', rescan = true) {
    return this.provider.rawCall('importprivkey', [privateKey, label, rescan]);
  }

  /**
   * Adds an watch-only address by public key. Cannot be used to spend.
   * @param {string} publicKey The public key.
   * @param {string} label An optional label.
   * @param {boolean} rescan Rescan the wallet for transactions.
   * @return {Promise} Success or Error.
   */
  importPublicKey(publicKey, label = '', rescan = true) {
    return this.provider.rawCall('importpubkey', [publicKey, label, rescan]);
  }

  /**
   * Imports keys from a wallet dump file
   * @param {string} filename The wallet file.
   * @return {Promise} Success or Error.
   */
  importWallet(filename) {
    return this.provider.rawCall('importwallet', [filename]);
  }

  /**
   * Lists groups of addresses which have had their common ownership made public by common use as inputs
   *  or as the resulting change in past transactions.
   * @return {Promise} Array of addresses with Pirate balances or Error.
   */
  listAddressGroupings() {
    return this.provider.rawCall('listaddressgroupings');
  }

  /**
   * Lists temporary unspendable outputs.
   * @return {Promise} Array of unspendable outputs or Error
   */
  listLockUnspent() {
    return this.provider.rawCall('listlockunspent');
  }

  /**
   * Lists unspent transaction outputs.
   * @return {Promise} Array of unspent transaction outputs or Error
   */
  listUnspent() {
    return this.provider.rawCall('listunspent');
  }

  /**
   * Lists unspent transaction outputs.
   * @param {string} address Address to send Pirate to.
   * @param {number} amount Amount of Pirate to send.
   * @param {string} comment Comment used to store what the transaction is for.
   * @param {string} commentTo Comment to store name/organization to which you're sending the transaction.
   * @param {boolean} subtractFeeFromAmount The fee will be deducted from the amount being sent.
   * @param {boolean} replaceable Allow this transaction to be replaced by a transaction with higher fees via BIP 125.
   * @param {number} confTarget Confirmation target (in blocks).
   * @param {string} estimateMode The fee estimate mode, must be one of: "UNSET", "ECONOMICAL", "CONSERVATIVE"
   * @param {string} senderAddress The Pirate address that will be used to send money from.
   * @param {boolean} changeToSender Return the change to the sender.
   * @return {Promise} Transaction ID or Error
   */
  sendToAddress(
    address,
    amount,
    comment = '',
    commentTo = '',
    subtractFeeFromAmount = false,
    replaceable = true,
    confTarget = 6,
    estimateMode = 'UNSET',
    senderAddress,
    changeToSender = false,
  ) {
    return this.provider.rawCall('sendtoaddress', [
      address,
      amount,
      comment,
      commentTo,
      subtractFeeFromAmount,
      replaceable,
      confTarget,
      estimateMode,
      senderAddress,
      changeToSender,
    ]);
  }

  /**
   * Set the transaction fee per kB. Overwrites the paytxfee parameter.
   * @param {bumber} amount The transaction fee in Pirate/kB.
   * @return {Promise} True/false for success or Error.
   */
  setTxFee(amount) {
    return this.provider.rawCall('settxfee', [amount]);
  }

  /**
   * Locks the encrypted wallet.
   * @return {Promise} Success or Error.
   */
  walletLock() {
    return this.provider.rawCall('walletlock');
  }

  /**
   * Unlocks the encrypted wallet with the wallet passphrase.
   * @param {string} passphrase The wallet passphrase.
   * @param {number} timeout The number of seconds to keep the wallet unlocked.
   * @param {boolean} stakingOnly Unlock wallet for staking only.
   * @return {Promise} Success or Error.
   */
  walletPassphrase(passphrase, timeout, stakingOnly = false) {
    return this.provider.rawCall('walletpassphrase', [passphrase, timeout, stakingOnly]);
  }

  /**
   * Changes the encrypted wallets passphrase.
   * @param {string} oldPassphrase The old wallet passphrase.
   * @param {string} newPassphrase The new wallet passphrase.
   * @return {Promise} Success or Error.
   */
  walletPassphraseChange(oldPassphrase, newPassphrase) {
    return this.provider.rawCall('walletpassphrasechange', [oldPassphrase, newPassphrase]);
  }
}

module.exports = ARRRweb3;
