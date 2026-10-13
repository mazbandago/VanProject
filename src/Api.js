import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, getDocs, getDoc} from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyD4u7UJNqkJh0PlwJjysBYXKMTRQ-TDlKQ",
  authDomain: "vanlife-3d18f.firebaseapp.com",
  projectId: "vanlife-3d18f",
  storageBucket: "vanlife-3d18f.firebasestorage.app",
  messagingSenderId: "427214987842",
  appId: "1:427214987842:web:0332d5bb04eb55c0e3c3db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const vanCollectionRef = collection(db, "vans")

export async function getVans(){
    const snapshot = await getDocs(vanCollectionRef)
    const vans= snapshot.docs.map(doc=>({
        ...doc.data(),
        id:doc.id
    }))
    return vans
}

 export async function getVan(id){
    const documentRef = doc(db,"vans", id)
    const snapshot =await getDoc(documentRef)
    return{
        ...snapshot.data(),
        id:snapshot.id
    }
}




// export  async function getVan(id){
//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const response = await fetch(url)
//     if(!response.ok){
//         throw{
//             message: "Failed to fetch vans",
//             statusText: response.statusText,
//             status: response.status
//         }
//     }
//     const data = await response.json()
//     return data.vans
// }

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}