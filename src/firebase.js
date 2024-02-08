

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import "firebase/storage";


const app = firebase.initializeApp({
  // add your creds here
})

// const firestore = app.firestore()
// export const database = {
//   folders: firestore.collection("folders"),
//   files: firestore.collection("files"),
// }

export const db = getFirestore(app);

export const database = {
  folders: collection(db, 'folders'),
  files: collection(db, 'files'),
  formatDoc: docSnap => {
    return {
      id: docSnap.id,
      ...docSnap.data()
    }
  },
  getCurrentTimeStamp: serverTimestamp()
};


export const auth = app.auth()
export default app



