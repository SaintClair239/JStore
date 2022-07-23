import { Link } from 'react-router-dom';
import Card from '../UI/Card';

const CategoriesCard = ({ categories }) => {
  return (
    <>
      {categories.map((cat, index) => {
        return (
          <Card key={Object.keys(cat)[0]}>
            <Link to={`/home/${index}/${Object.keys(cat)}`}>
              <div className='h-4/5'>
                <img
                  className='w-full h-full object-scale-down rounded-md '
                  src={Object.values(cat)[0][0].thumbnail}
                  alt=''
                />
              </div>
              <div className='w-full h-1/5 flex justify-center items-center'>
                <h1 className='uppercase text-center font-bold tracking-widest'>
                  {Object.keys(cat)}
                </h1>
              </div>
            </Link>
          </Card>
        );
      })}
    </>
  );
};

export default CategoriesCard;
