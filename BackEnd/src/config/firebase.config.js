import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject} from "firebase/storage";
import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const firebaseConfig = {
  apiKey: String(process.env.API_KEY),
  authDomain: String(process.env.AUTH_DOMAIN),
  projectId: String(process.env.PROJECT_ID),
  storageBucket: String(process.env.STORAGE_BUCKET),
  messagingSenderId: String(process.env.MESSAGING_SENDER_ID),
  appId: String(process.env.APP_ID),
  measurementId: String(process.env.MEASUREMENT_ID),
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {
  storage,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
  ref
};