
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore,collection, getDocs,doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyBLqwOxwbWF89ZVE-Hx6Oauw9eIuy8Syp0",
authDomain: "test-project-67367.firebaseapp.com",
projectId: "test-project-67367",
storageBucket: "test-project-67367.appspot.com",
messagingSenderId: "986217264801",
appId: "1:986217264801:web:ed5c55b76ba4fe71a322e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export async function LoginSetup(users,password){
    // const auth = getAuth();
    
try{
    const res=await signInWithEmailAndPassword(auth, users, password)
    console.log(res)
    return res
}
catch(e){
    alert(e.message)
}
}

export async function SignSetup(email,password,name){
    try{
        const res=await createUserWithEmailAndPassword(auth, email, password,name)
    return res
    }
    catch(e){
        alert(e.message)
    }
}
export async function getAllData(){
    const querySnapshot = await getDocs(collection(db, "ads"));
    const product=[]
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    product.push({ id: doc.id, ...doc.data() })

});
return product
}

export async function getSingleAds(adId) {
    const docRef = doc(db, "ads", adId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const ad = docSnap.data()

        return ad
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}
