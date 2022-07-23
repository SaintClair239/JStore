import React from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import Container from '../UI/Container';
import { useState, useContext } from 'react';
import Menu from './Menu';
import Overlay from '../UI/Overlay';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import AuthContext from '../context/AuthContext';

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuHandler = () => {
    setToggleMenu(prevValue => !prevValue);
  };

  return (
    <nav className='sticky top-0'>
      <div className='w-full bg-blue-300 flex justify-center items-center'>
        <Container className='flex justify-between items-center py-2'>
          <div>
            <Link to='/home'>
              <p className='text-3xl font-bold'>JStore</p>
            </Link>
          </div>

          <div className='hidden md:flex'>
            <ul className='flex justfiy-evenly'>
              <Link to='/home' className='mx-3'>
                Home
              </Link>
              <Link to='/cart' className='mx-3'>
                Cart
              </Link>
              <li>
                {currentUser ? (
                  <p onClick={() => signOut(auth)}>Log Out</p>
                ) : (
                  <Link to='/login' className='mx-3'>
                    Log In
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <div className='md:hidden'>
            <MenuIcon className='w-8' onClick={menuHandler} />
          </div>
        </Container>

        {toggleMenu && <Overlay onClick={menuHandler} />}
      </div>
      {toggleMenu && (
        <Menu onClick={menuHandler} setToggleMenu={setToggleMenu} />
      )}
    </nav>
  );
};

export default Header;
