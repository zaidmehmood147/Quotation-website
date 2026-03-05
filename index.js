
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    doc,
    setDoc , 
    updateDoc, 
    deleteDoc, 
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBSAop_oP2RsxM4iGv9NtsVq46Wo-KRS-A",
    authDomain: "fir-login-signup-wma.firebaseapp.com",
    projectId: "fir-login-signup-wma",
    storageBucket: "fir-login-signup-wma.firebasestorage.app",
    messagingSenderId: "199141690287",
    appId: "1:199141690287:web:4a44b88a4755aa8e6ebd5a",
    measurementId: "G-Q9N56M34QL"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addData(){
await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});}
addData()