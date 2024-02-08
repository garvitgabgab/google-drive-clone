

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import "firebase/storage";


const app = firebase.initializeApp({
  apiKey: "AIzaSyCIlUrwPCF_djPFwgs9faFFscf0aOjLwos",
  authDomain: "auth-domain-2.firebaseapp.com",
  projectId: "auth-domain-2",
  storageBucket: "auth-domain-2.appspot.com",
  messagingSenderId: "472356365834",
  appId: "1:472356365834:web:529b8b91926cb1fca5e1f3"
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



