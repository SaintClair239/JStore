import { Link } from 'react-router-dom';
import Card from '../UI/Card';

function ProductsCard({ params, prod }) {
  return (
    <Link to={`/home/${params.productId}/${prod.id}`}>
      <Card>
        <div className='h-4/5 border-2 border-red-300'>
          <img
            className='w-full h-full object-cover rounded-md '
            src={prod.thumbnail}
            alt=''
          />
        </div>
        <h1 className='uppercase text-center mt-4'>{prod.title}</h1>
      </Card>
    </Link>
  );
}

export default ProductsCard;
