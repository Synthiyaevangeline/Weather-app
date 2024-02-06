import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBOF_yU_cORdKd2GoA8QcYOaDLWGHjv0FU",
  authDomain: "iamneo-c3d52.firebaseapp.com",
  databaseURL: "https://iamneo-c3d52-default-rtdb.firebaseio.com",
  projectId: "iamneo-c3d52",
  storageBucket: "iamneo-c3d52.appspot.com",
  messagingSenderId: "965213513548",
  appId: "1:965213513548:web:ea42a74845470745f7d1e9",
  measurementId: "G-TWEVTWFTW5",
  databaseURL: 'https://iamneo-c3d52-default-rtdb.firebaseio.com/',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore(app);

export { app, auth, db };

