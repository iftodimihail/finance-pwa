import { notification } from "antd";
import firebase, { auth } from "../utils/firebase";
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

    async googleSignIn() {
      const provider = new firebase.auth.GoogleAuthProvider();

      auth
        .signInWithPopup(provider)
        .then(function (result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(token, user);
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          notification.error({
            message: `Err ${errorCode}: ${errorMessage}`,
          });
        });
    },

    async logOut() {
      try {
        console.log("aici");
        await auth.signOut();
        routerStore.goTo("signIn");
      } catch (err) {
        notification.error({
          message: err,
        });
      }
    },
  };
}
