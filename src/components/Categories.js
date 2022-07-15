import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase-config';
import { onValue, ref } from 'firebase/database';
import ProductsCard from './ProductsCard';

function Categories() {
  const [products, setProducts] = useState([]);
  const params = useParams();

  console.log(params.productId);
  console.log(params);

  useEffect(() => {
    let ignore = true;
    if (ignore) {
      onValue(ref(db, 'categories/' + params.productId), snapshot => {
        const data = snapshot.val();
        setProducts(data);
      });
      console.log('mount');
    }

    return () => {
      ignore = false;
      console.log('unmount');
    };
  }, [params]);

  return products.map(prod => {
    return <ProductsCard key={prod.id} prod={prod} params={params} />;
  });
}

export default Categories;
