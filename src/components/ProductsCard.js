import { Link } from 'react-router-dom';
import Card from '../UI/Card';

function ProductsCard({ params, prod }) {
  console.log(prod);
  return (
    <Link to={`/home/${params.productId}/${prod[1].id}`}>
      <Card>
        <div className='h-4/5 border-2 border-red-300'>
          <img
            className='w-full h-full object-scale-down rounded-md '
            src={prod[1].thumbnail}
            alt=''
          />
        </div>
        <h1 className='uppercase text-center mt-4'>{prod[1].name}</h1>
      </Card>
    </Link>
  );
}

export default ProductsCard;
