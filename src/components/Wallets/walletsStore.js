import fb, { fbItemsParser } from "../../utils/firebase";
import { nanoid } from "nanoid";

export function createWalletsStore() {
  return {
    wallets: [],

    getWallets() {
      this.wallets = [];
      fb.wallets.on("value", (snapshot) => {
        const walletsObject = snapshot.val();
        if (!walletsObject) {
          return [];
        }

        this.wallets = Array.from(fbItemsParser(walletsObject));
      });
    },

    addWallet(name, currency, balance) {
      const id = fb.wallets.push().key;

      fb.wallets.update({
        [id]: {
          name,
          currency,
          balance,
        },
      });
    },

    removeWallet(id) {
      fb.wallets.child(id).remove();
      this.getWallets();
    },

    addSpending(walletId, spending = { name: "Mancare", type: "food", amount: 15 }) {
      fb.wallets.child(walletId + "/spendings").update({ [nanoid()]: { ...spending } });
    }
  };
}
