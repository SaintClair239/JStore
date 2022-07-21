import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAnXMZ9cM1Kv8kh0Hq2ZSlrewdWCCrcrio',
  authDomain: 'store-project-a2e37.firebaseapp.com',
  databaseURL:
    'https://store-project-a2e37-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'store-project-a2e37',
  storageBucket: 'store-project-a2e37.appspot.com',
  messagingSenderId: '754189920533',
  appId: '1:754189920533:web:d3ad31ef766ccc463ca11c',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
