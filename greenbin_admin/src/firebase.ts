import firebase from 'firebase/app';
import 'firebase/firestore';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyC-bFEo6x8YwVOhdg0QsyXjfaftnYLW73k",
  authDomain: "greenbin-hyperx.firebaseapp.com",
  projectId: "greenbin-hyperx",
  storageBucket: "greenbin-hyperx.appspot.com",
  messagingSenderId: "639318872106",
  appId: "1:639318872106:web:b9699df921c479f4a1b353",
  measurementId: "G-2N372N7WGD",
};


export default firebaseConfig;
