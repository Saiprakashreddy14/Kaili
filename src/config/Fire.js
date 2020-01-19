import firebase from "firebase";
import "firebase/storage"

const config = {
  apiKey: "AIzaSyBcJY23DXHxOSiqHKR1OV98CUmz9ZSpRJ4",
  authDomain: "demologinreact-87d08.firebaseapp.com",
  databaseURL: "https://demologinreact-87d08.firebaseio.com",
  projectId: "demologinreact-87d08",
  storageBucket: "demologinreact-87d08.appspot.com",
  messagingSenderId: "929096729326",
  appId: "1:929096729326:web:79eb994ea46a0e870de9ff"
};
firebase.initializeApp(config);

const storage = firebase.storage();
const databaseref = firebase.database();

export {
  storage,databaseref, firebase as default
}
