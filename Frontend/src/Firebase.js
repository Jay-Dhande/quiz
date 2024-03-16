// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth} from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_pnWMbt5L_2FIOQBZa-2qQkqrb3izzD0",
  authDomain: "quiz-2194f.firebaseapp.com",
  projectId: "quiz-2194f",
  storageBucket: "quiz-2194f.appspot.com",
  messagingSenderId: "272054986061",
  appId: "1:272054986061:web:51e5fe74735a743ca50304",
  measurementId: "G-T5VPTQC613"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app) ; 
const analytics = getAnalytics(app);

export {app , auth , analytics}  ; 