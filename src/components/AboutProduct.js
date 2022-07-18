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
    <div className='w-full bg-white p-4 rounded-xl sm:flex'>
      <div className='flex items-center pb-8 border-b-2 sm:mr-4 sm:pb-0 sm:border-b-0'>
        <img src={currentProduct.thumbnail} alt='' />
      </div>

      <div className='sm:w-3/4 sm:flex sm:flex-col sm:justify-evenly'>
        <h1 className='py-2 uppercase font-bold tracking-widest text-center border-b-2 text-xl'>
          {currentProduct.name}
        </h1>
        <div className='py-2 border-b-2'>
          <h2 className='mb-2 font-bold'>PRODUCT DESCRIPTION</h2>
          <p>{currentProduct.description}</p>
        </div>

        <div className='flex justify-between items-center text-lg pt-4 font-bold'>
          <p className='mx-2'>{`$${currentProduct.price}`}</p>
          <button className='mx-2 uppercase p-3 bg-cyan-400'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutProduct;
