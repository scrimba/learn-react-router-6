import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyD_k3v3HK3tKEqhlqFHPkwogW7PqEqhGhk",
  authDomain: "vanlife-a1af5.firebaseapp.com",
  projectId: "vanlife-a1af5",
  storageBucket: "vanlife-a1af5.appspot.com",
  messagingSenderId: "803007000356",
  appId: "1:803007000356:web:446cd3a1ca406839258db1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// Refactoring the fetching functions
export async function getAllVans() {
  
}

export async function getVan(id) {
  
}

export async function getHostVans() {
  
}