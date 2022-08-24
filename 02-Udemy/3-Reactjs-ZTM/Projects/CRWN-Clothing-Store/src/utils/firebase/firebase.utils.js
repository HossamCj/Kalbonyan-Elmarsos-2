import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
    



 // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyColju2MmWWDjn_1CsOxDLhFU1x7wZGDbs",
    authDomain: "allen-clothing-db.firebaseapp.com",
    projectId: "allen-clothing-db",
    storageBucket: "allen-clothing-db.appspot.com",
    messagingSenderId: "637456732263",
    appId: "1:637456732263:web:09ab3ff6910ab6fbeb84c2"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('Error creating the user', error.message)
        }
    }

    return userDocRef
}