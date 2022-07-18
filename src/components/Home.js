import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase-config';
import { onValue, ref } from 'firebase/database';
import CategoriesCard from './CategoriesCard';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    onValue(ref(db, 'categories'), snapshot => {
      const data = snapshot.val();
      setCategories(Object.entries(data));
    });
  }, []);

  return <CategoriesCard categories={categories} />;
}

export default Home;
