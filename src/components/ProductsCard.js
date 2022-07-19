import { Link } from 'react-router-dom';
import Card from '../UI/Card';

function ProductsCard({ params, prod, index }) {
  return (
    <Link
      to={`/home/${params.categoryNum}/${params.categoryName}/${index}/${prod.id}`}
    >
      <Card key={prod.id}>
        <div className='h-4/5'>
          <img
            className='w-full h-full object-scale-down rounded-md '
            src={prod.thumbnail}
            alt=''
          />
        </div>
        <div className='w-full h-1/5 flex flex-col justify-center items-center'>
          <h1 className='uppercase text-center font-bold tracking-widest py-2 border-b-2'>
            {prod.name}
          </h1>
          <p className='font-bold py-2'>{`$${prod.price}`}</p>
        </div>
      </Card>
    </Link>
  );
}

export default ProductsCard;
