import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase-config';
import { onValue, ref } from 'firebase/database';
import CategoriesCard from './CategoriesCard';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    onValue(ref(db, 'categories'), snapshot => {
      const data = snapshot.val();
      console.log(Object.entries(data));
      setCategories(Object.entries(data));
    });
  }, []);

  // return <div>hellos</div>;
  return <CategoriesCard categories={categories} />;
}

export default Home;
