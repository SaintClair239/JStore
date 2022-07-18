import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase-config';
import { onValue, ref } from 'firebase/database';
import ProductsCard from './ProductsCard';

function Categories() {
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    onValue(ref(db, 'categories/' + params.productId), snapshot => {
      const data = snapshot.val();
      setProducts(Object.entries(data));
    });
  }, [params]);

  return products.map(prod => {
    return <ProductsCard key={prod.id} prod={prod} params={params} />;
  });
}

export default Categories;
