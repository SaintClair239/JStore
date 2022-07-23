import { MenuIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';

const Menu = ({ setToggleMenu, onClick }) => {
  const { currentUser } = useContext(AuthContext);

  const onClickHandler = () => {
    setToggleMenu(prevValue => !prevValue);
  };
  return (
    <div className='flex flex-col p-2 w-full max-w-sm bg-blue-400 fixed bottom-0 right-0 top-0 z-50 md:hidden'>
      <div className='self-end'>
        <MenuIcon className='w-8 ' onClick={onClick} />
      </div>

      <ul>
        <li onClick={onClickHandler}>
          <Link to='/home' className='my-2'>
            Home
          </Link>
        </li>
        <li onClick={onClickHandler} className='my-2'>
          <Link to='/cart'>Cart</Link>
        </li>
        <li onClick={onClickHandler}>
          {currentUser ? (
            <p onClick={() => signOut(auth)}>Log Out</p>
          ) : (
            <Link to='/login' className='my-2'>
              Log In
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Menu;
