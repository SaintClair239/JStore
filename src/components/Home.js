import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase-config';
import { onValue, ref } from 'firebase/database';
import CategoriesCard from './CategoriesCard';

function Home() {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    let ignore = true;
    if (ignore) {
      onValue(ref(db, 'categories'), snapshot => {
        const data = snapshot.val();
        setCategories(Object.entries(data));
      });
      console.log('mount');
    }

    return () => {
      ignore = false;
      console.log('unmount');
    };
  }, []);
  return <CategoriesCard categories={categories} />;
}

export default Home;
