import { notification } from "antd";
import firebase, { auth, usersCol } from "../utils/firebase";
import { routerStore } from "./routingStore";

export function createAuthStore() {
  return {
    errors: [],
    user: null,

    async signUp({ email, password, passwordConfirm }) {
      this.errors = [];

      if (!(password && passwordConfirm)) {
        this.errors.push({ message: "Please enter the credentials" });
        return;
      }

      if (password !== passwordConfirm) {
        this.errors.push({ message: "Passwords must match" });
        return;
      }

      try {
        const result = await auth.createUserWithEmailAndPassword(email, password);
        console.log(result.user);
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
      this.errors = [];

      try {
        await auth.signInWithEmailAndPassword(email, password);
        routerStore.goTo("home");
      } catch (err) {
        notification.error({
          message: err.message,
        });
      }
    },

    async googleSignIn() {
      const provider = new firebase.auth.GoogleAuthProvider();

      auth.signInWithPopup(provider).then(({ user, additionalUserInfo }) => {
        this.user = user;
        if (additionalUserInfo.isNewUser) {
          usersCol.add({
            email: user.email,
            uid: user.uid,
          });
        }
      }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        notification.error({
          message: `Err ${errorCode}: ${errorMessage}`,
        });
      });
    },

    async logout() {
      try {
        await auth.signOut();
        this.user = null;
        routerStore.goTo("signIn");
      } catch (err) {
        notification.error({
          message: err,
        });
      }
    },
  };
}
