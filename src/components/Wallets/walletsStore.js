import fb from "../../utils/firebase";

export function createWalletsStore() {
  return {
    wallets: [],
    getWallets() {
      this.wallets = [];
      fb.wallets.on("value", (snapshot) => {
        const walletsObject = snapshot.val();
        if(!walletsObject) {
          return [];
        }

        Object.keys(walletsObject).map(
          (walletId) =>
            !this.wallets.some((wallet) => wallet.id === walletId) &&
            this.wallets.push({ id: walletId, ...walletsObject[walletId] })
        );
      });
    },
    addWallet(name, currency) {
      const id = fb.wallets.push().key;

      fb.wallets.update({
        [id]: {
          name,
          currency,
        },
      });
    },
    removeWallet(id) {
      fb.wallets.child(id).remove();
      this.wallets = this.wallets.filter((wallet) => wallet.id !== id);
    },
  };
}
