
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { getFirestore,collection, getDocs,doc, getDoc,addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL }from "firebase/storage";

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
export async function postToDb(ad) {
    try {
    const storage = getStorage();
    const storageRef = ref(storage, `ads/${ad.image.name}`);
      // Upload image to Firebase Storage
    await uploadBytes(storageRef, ad.image);
    
      // Get the download URL of the uploaded image
    const imageUrl = await getDownloadURL(storageRef);
    ad.image = imageUrl;

      // Add the ad object to Firestore
    await addDoc(collection(db, "ads"), ad);

    return { success: true, message: 'Data added successfully!' };
    } catch (error) {
    console.error('Error posting to database:', error.message);
    }
}
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
});
export{
    auth
}