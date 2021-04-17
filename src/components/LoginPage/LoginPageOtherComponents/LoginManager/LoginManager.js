import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu1uG5w9BHtwk5gZAS0o_qfXfErnL5q-4",
  authDomain: "move-aid.firebaseapp.com",
  projectId: "move-aid",
  storageBucket: "move-aid.appspot.com",
  messagingSenderId: "1001649347443",
  appId: "1:1001649347443:web:5dc3ec26b2013f081e4306",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Google SignIn Method

export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const { displayName, email } = result.user;
      const newUser = {
        name: displayName,
        email: email,
      };
      return newUser;
    })
    .catch((error) => {
      const errorMessage = error.message;
      return errorMessage;
    });
};

// Logout

export const logout = () => {
  const loggedOutUser = {};
  return loggedOutUser;
};
