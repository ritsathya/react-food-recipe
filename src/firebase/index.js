import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC3NtuXhG4HkcEg4OWWHIFV4xf8N05NCEo',
  authDomain: 'fe-foodie-recipe.firebaseapp.com',
  projectId: 'fe-foodie-recipe',
  storageBucket: 'fe-foodie-recipe.appspot.com',
  messagingSenderId: '464018243536',
  appId: '1:464018243536:web:a890678d796f33089d83d5',
  measurementId: 'G-T0T6C3NTC4',
};

const app = initializeApp(firebaseConfig);

const storage = getStorage();

export { storage, app };
