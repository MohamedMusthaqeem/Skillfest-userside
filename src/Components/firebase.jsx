import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCpWBE5X4mbjxLjpDtC3Kcofe8WwqgPqV8",
  authDomain: "vaulted-circle-352202.firebaseapp.com",
  projectId: "vaulted-circle-352202",
  storageBucket: "vaulted-circle-352202.appspot.com",
  messagingSenderId: "622512478190",
  appId: "1:622512478190:web:0b9677f04ab7d112eda0ff",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
