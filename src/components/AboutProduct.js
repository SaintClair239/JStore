import Card from '../UI/Card';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase/firebase-config';

function AboutProduct() {
  const [currentProduct, setCurrentProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    let ignore = true;

    if (ignore) {
      onValue(
        ref(db, `categories/${params.productId}/${params.productNum}`),
        snapshot => {
          const data = snapshot.val();
          setCurrentProduct(data);
        }
      );
    }

    return () => {
      ignore = false;
    };
  }, [params]);

  return (
    <div className='w-full border-2 border-amber-300 p-4 flex flex-col justify-center align-center md:flex md:flex-row'>
      <Card className='mr-4'>
        <img src={currentProduct.thumbnail} alt='' />
      </Card>
      <Card>
        <h1>{currentProduct.title}</h1>
        <br />
        <p>{currentProduct.description}</p>
        <p>{`$${currentProduct.price}`}</p>
      </Card>
    </div>
  );
}

export default AboutProduct;
