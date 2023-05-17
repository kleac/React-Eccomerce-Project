import {initializeApp } from 'firebase/app';
import {
    getAuth, 
    signInWithPopup, 
    signInWithRedirect, 
    GoogleAuthProvider
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  SnapshotMetadata
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDNokpiNjEDBAxcHf0w-YKZo6_n8OXKINo",
    authDomain: "crwn-clothing-db-4ff35.firebaseapp.com",
    projectId: "crwn-clothing-db-4ff35",
    storageBucket: "crwn-clothing-db-4ff35.appspot.com",
    messagingSenderId: "203073936575",
    appId: "1:203073936575:web:02a5dd1b1f6e35bcd3ba0a"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  //initializes a connection to a Firestore database
  export const db = getFirestore()

 export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef)

  //check if the userSnapshot exists
  console.log(userSnapshot.exists())

  //if user data doesn't exist
  //create / set the document with the data from userAuth in my collection

  if (!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }

  }

  
  }