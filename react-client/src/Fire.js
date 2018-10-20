import firebase from "firebase";
  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  const config = {
    apiKey: "AIzaSyB3mCTJ_M9X77phyNU29za7Ca8vZBIeJew",
      authDomain: "dream1-d3fed.firebaseapp.com",
      databaseURL: "https://dream1-d3fed.firebaseio.com",
      projectId: "dream1-d3fed",
      storageBucket: "dream1-d3fed.appspot.com",
      messagingSenderId: "357562281677"
  };
  const fire = firebase.initializeApp(config);

export default fire;
