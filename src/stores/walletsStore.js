import { routerStore } from "../stores/routingStore";
import { walletsCol, spendingsCol, auth } from "../utils/firebase";

export function createWalletsStore() {
  return {
    wallets: [],
    currentWalletId: "",

    async getWallets() {
      this.wallets = [];
      const querySnapshot = await walletsCol.where("userUid", "==", auth.currentUser.uid).get();

      querySnapshot.forEach((doc) => {
        this.wallets.push({ id: doc.id, ...doc.data() });
      });
    },

    async addWallet(name, currency, balance) {
      const payload = {
        userUid: auth.currentUser.uid,
        name,
        currency,
        balance,
      };

      const spendigRef = await spendingsCol.add({});
      payload.spending = spendigRef.id;

      try {
        const docRef = await walletsCol.add(payload);
        this.wallets.push({
          id: docRef.id,
          ...payload,
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },

    async removeWallet(id) {
      try {
        await walletsCol.doc(id).delete();

        this.wallets.splice(
          this.wallets.findIndex((wallet) => wallet.id === id),
          1
        );
      } catch (err) {
        console.log("Error deleting document: ", err);
      }
    },

    setCurrentWallet(id) {
      this.currentWalletId = id;
      routerStore.goTo("spendings");
    }
  };
}
