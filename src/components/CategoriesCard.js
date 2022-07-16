import { Link } from 'react-router-dom';
import Card from '../UI/Card';

function CategoriesCard({ categories }) {
  return (
    <>
      {categories.map(cat => {
        console.log(cat[1]);
        console.log(Object.values(cat[1]));
        return (
          <Link to={`/home/${cat[0]}`}>
            <Card key={cat}>
              <div className='h-4/5 border-2 border-red-300'>
                <img
                  className='w-full h-full object-scale-down rounded-md '
                  src={Object.values(cat[1])[0].thumbnail}
                  alt=''
                />
              </div>
              <h1 className='uppercase text-center mt-4'>{cat[0]}</h1>
            </Card>
          </Link>
        );
      })}
    </>
  );
}

export default CategoriesCard;
