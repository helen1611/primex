const { default: firebase } = require("firebase");
console.log("firebase===========", firebase);
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyAMmrAR0OVBXw5h0yS769RQUEsqEwHFB4c",
  authDomain: "primex-7093b.firebaseapp.com",
  projectId: "primex-7093b",
}); 

const getFirestoreDb = () => {
  var db = firebase.firestore();
  console.log("db===========", db);
  return db;
}
export default getFirestoreDb;