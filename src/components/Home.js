import Card from '../UI/Card';
import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase-config';
import { onValue, ref } from 'firebase/database';
import { Link } from 'react-router-dom';

function Categories() {
  const [categories, setCategories] = useState([]);

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

  return (
    <>
      {categories.map(cat => {
        return (
          <Link to={`/home/${cat[0]}`}>
            <Card key={cat}>
              <div className='h-4/5 border-2 border-red-300'>
                <img
                  className='w-full h-full object-cover rounded-md '
                  src={cat[1][0].thumbnail}
                  alt=''
                />
              </div>
              <h1 className='uppercase text-center mt-4'>{cat[0]}</h1>
            </Card>
          </Link>
        );
      })}
    </>
  );
}

export default Categories;
