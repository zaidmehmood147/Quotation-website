
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
// console.log(app)
// console.log(db)

// async function addData(){
// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// });}
// addData()

var input = document.getElementById("qInput") ;
var btn = document.getElementById("qBtn") ;
var qList = document.getElementById("qList") ; 
btn.addEventListener("click" , addQuote)
const quotation = collection(db, "cities")
async function addQuote(){
    
 await addDoc((quotation), {
 quote : input.value , 
 time : serverTimestamp()
});

}


async function getQuote(){
  const querySnapshot = await getDocs(quotation)
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data().quote)

const li = document.createElement("li") ; 


li.textContent =  doc.data().quote + "" ;



const editBtn = document.createElement("button")
editBtn.textContent = "Edit"
const delBtn = document.createElement("button")
delBtn.textContent = "Delete"
li.appendChild(editBtn)
li.appendChild(delBtn)
qList.appendChild(li)
});


}
getQuote()