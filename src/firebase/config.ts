import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCX38jt2Vdqazk5luk8kSgTFKkHhqjJdkQ",
  authDomain: "edutians.firebaseapp.com",
  projectId: "edutians",
  storageBucket: "edutians.firebasestorage.app",
  messagingSenderId: "976496349589",
  appId: "1:976496349589:web:fa225eb7a740cdbccaa69c",
  measurementId: "G-NL7QFPQ3QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app; 