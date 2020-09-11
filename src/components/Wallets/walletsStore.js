import fb, { fbItemsParser } from "../../utils/firebase";

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

        this.wallets = Array.from(fbItemsParser(walletsObject));
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
      this.getWallets();
    },
  };
}
