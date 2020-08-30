import { nanoid } from "nanoid";

export function createWalletsStore() {
  return {
    wallets: [],
    addWallet(name, currency) {
      console.log(name, currency);

      this.wallets.push({
        name,
        currency,
        id: nanoid(),
      });
    },
    removeWallet(id) {
      return this.wallets.filter((wallet) => wallet.id === id);
    },
  };
}
