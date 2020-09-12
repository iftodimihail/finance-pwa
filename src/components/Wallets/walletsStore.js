import firebase, { db } from "../../utils/firebase";
import { nanoid } from "nanoid";

const walletsCol = db.collection("wallets");
const spendingsCol = db.collection("spendings");

export function createWalletsStore() {
  return {
    wallets: [],
    spendings: [],
    currentWalletId: "",

    async getWallets() {
      this.wallets = [];
      const querySnapshot = await walletsCol.get();

      querySnapshot.forEach((doc) => {
        this.wallets.push({ id: doc.id, ...doc.data() });
      });
    },

    async addWallet(name, currency, balance) {
      const payload = {
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

    async getSpendings() {
      this.spendings = [];
      const currentWallet = this.wallets.find(
        (wallet) => wallet.id === this.currentWalletId
      );
      const doc = await spendingsCol.doc(currentWallet.spending).get();

      doc.data().items.forEach(spending => this.spendings.push({...spending}))
    },

    async addSpending(
      walletId,
      spending = { name: "Zara", type: "shopping", amount: 125 }
    ) {
      this.currentWalletId = walletId;
      const currentWallet = this.wallets.find(
        (wallet) => wallet.id === walletId
      );

      try {
        await walletsCol.doc(walletId).update({
          balance: firebase.firestore.FieldValue.increment(-spending.amount),
        });

        await spendingsCol.doc(currentWallet.spending).update(
          {
            items: firebase.firestore.FieldValue.arrayUnion({
              id: nanoid(),
              ...spending,
            }),
          },
        );

        currentWallet.balance -= spending.amount;

        await this.getSpendings();
      } catch (err) {
        console.log("Error on adding spending: ", err);
      }
    },
  };
}
