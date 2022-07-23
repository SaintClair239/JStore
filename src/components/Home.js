import CategoriesCard from './CategoriesCard';
import useFetchDB from '../hooks/useFetchDB';

const Home = () => {
  const [categories] = useFetchDB('categories');
  return <CategoriesCard categories={categories} />;
};

export default Home;
