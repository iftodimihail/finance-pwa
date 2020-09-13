import firebase, { walletsCol, spendingsCol } from "../../utils/firebase";

export function createSpendingsStore() {
  return {
    spendings: [],
    async getSpendings(walletId) {
      if (!walletId) {
        return;
      }

      this.spendings = [];
      const querySnapshot = await spendingsCol.get();

      querySnapshot.forEach((doc) => {
        doc.data().walletId === walletId &&
          this.spendings.push({ id: doc.id, ...doc.data() });
      });
    },

    async addSpending(walletId, spending) {
      try {
        await walletsCol.doc(walletId).update({
          balance: firebase.firestore.FieldValue.increment(-spending.amount),
        });

        await spendingsCol.add({ walletId, ...spending });

        await this.getSpendings(walletId);
      } catch (err) {
        console.log("Error on adding spending: ", err);
      }
    },
  };
}
