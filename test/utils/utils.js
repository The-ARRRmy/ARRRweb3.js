module.exports = {
  isWalletEncrypted: async (arrrweb3) => {
    const res = await arrrweb3.getWalletInfo();
    return Object.prototype.hasOwnProperty.call(res, 'unlocked_until');
  },
};
