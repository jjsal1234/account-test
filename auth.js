document.addEventListener("DOMContentLoaded", function () {
  const ui = new firebaseui.auth.AuthUI(firebase.auth());

  ui.start("#firebaseui-auth-container", {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // Add more sign-in providers as needed
    ],
    signInSuccessUrl: "/",
    signInFlow: "popup",
  });

  document.getElementById("sign-out").addEventListener("click", function () {
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in
      console.log("Signed in:", user.displayName);
    } else {
      // User is signed out
      console.log("Signed out");
    }
  });
});
