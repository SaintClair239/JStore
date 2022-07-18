import { Link } from 'react-router-dom';
import Card from '../UI/Card';

function ProductsCard({ params, prod }) {
  return (
    <Link to={`/home/${params.productId}/${prod[1].id}`}>
      <Card key={prod[0]}>
        <div className='h-4/5'>
          <img
            className='w-full h-full object-scale-down rounded-md '
            src={prod[1].thumbnail}
            alt=''
          />
        </div>
        <div className='w-full h-1/5 flex flex-col justify-center items-center'>
          <h1 className='uppercase text-center font-bold tracking-widest py-2 border-b-2'>
            {prod[1].name}
          </h1>
          <p className='font-bold py-2'>{`$${prod[1].price}`}</p>
        </div>
      </Card>
    </Link>
  );
}

export default ProductsCard;
