import { notification } from "antd";
import { auth } from "../utils/firebase";
import { routerStore } from "./routingStore";

export function createAuthStore() {
  return {
    errors: [],

    async signUp({ email, password, passwordConfirm }) {
      if (password !== passwordConfirm) {
        this.errors.push("Passwords must match");
        return;
      }

      try {
        await auth.createUserWithEmailAndPassword(email, password);
        notification.success({
          message: "Account has been created",
        });
        routerStore.goTo("signIn");
      } catch (err) {
        console.log(err);
        notification.error({
          message: err,
        });
      }
    },

    async signIn({ email, password }) {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        routerStore.goTo("home");
      } catch (err) {
        notification.error({
          message: err,
        });
      }
    },
  };
}
