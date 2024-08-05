import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { Firestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCn4NAWBWq1aA1hqR4Polpza-ecVNOiG58",
  authDomain: "firstapp-ddb8e.firebaseapp.com",
  projectId: "firstapp-ddb8e",
  storageBucket: "firstapp-ddb8e.appspot.com",
  messagingSenderId: "211885461940",
  appId: "1:211885461940:web:650f258e5f7dfcd30822e1",
  measurementId: "G-RGJFB796EX"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
async function Loginn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
   
    const user = userCredential.user;
    console.log("first",userCredential.user)
    return user;
    
    
  } catch (error) {
    console.log('loginerreur::',error)
  }
}

async function signUp( name,phone,email, password) {
  try {
    console.log("skod",email)
    const userCredential = await createUserWithEmailAndPassword(auth, email, password )
   
        const user = userCredential.user;
    return user;
      
  } catch (error) {
    console.log('signuperreur::',console.error())
  }
}

export { Loginn, signUp };
