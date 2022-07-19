import { useParams } from 'react-router-dom';
import ProductsCard from './ProductsCard';
import useFetchDB from '../hooks/useFetchDB';

function Categories() {
  const params = useParams();
  const [products, setProducts] = useFetchDB(
    [],
    `categories/${params.productId}`,
    true
  );

  return products.map(prod => {
    return <ProductsCard key={prod.id} prod={prod} params={params} />;
  });
}

export default Categories;
