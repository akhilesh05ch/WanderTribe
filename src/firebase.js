import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = { apiKey: "YOUR-API-KEY", authDomain: "YOUR-DOMAIN.firebaseapp.com", projectId: "YOUR-PROJECT-ID", storageBucket: "YOUR-STORAGE-BUCKET", messagingSenderId: "YOUR-ID", appId: "YOUR-APP-ID", };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
