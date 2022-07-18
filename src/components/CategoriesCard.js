import { Link } from 'react-router-dom';
import Card from '../UI/Card';

function CategoriesCard({ categories }) {
  return (
    <>
      {categories.map(cat => {
        return (
          <Link to={`/home/${cat[0]}`}>
            <Card key={cat}>
              <div className='h-4/5'>
                <img
                  className='w-full h-full object-scale-down rounded-md '
                  src={Object.values(cat[1])[0].thumbnail}
                  alt=''
                />
              </div>
              <div className='w-full h-1/5 flex justify-center items-center'>
                <h1 className='uppercase text-center font-bold tracking-widest'>
                  {cat[0]}
                </h1>
              </div>
            </Card>
          </Link>
        );
      })}
    </>
  );
}

export default CategoriesCard;
