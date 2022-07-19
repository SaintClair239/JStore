import React from 'react';
import { MenuIcon, SearchIcon } from '@heroicons/react/outline';
import Container from '../UI/Container';
import { useState } from 'react';
import Menu from './Menu';
import Overlay from '../UI/Overlay';
import { Link } from 'react-router-dom';

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const onClickMenuHandler = () => {
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
            <Link to='/search'>
              <div className='flex'>
                <input
                  className='rounded-xl mx-2 px-1'
                  type='search'
                  placeholder='Search...'
                />
                <SearchIcon className='w-5 mr-6' />
              </div>
            </Link>

            <ul className='flex justify-evenly'>
              <Link to='/home' className='mx-3'>
                Home
              </Link>
              <li className='mx-3'>Cart</li>
              <li className='mx-3'>Log In</li>
            </ul>
          </div>

          <div className='md:hidden'>
            <MenuIcon className='w-8' onClick={onClickMenuHandler} />
          </div>
        </Container>

        {toggleMenu && <Overlay />}
      </div>
      {toggleMenu && <Menu onClick={onClickMenuHandler} />}
    </nav>
  );
}

export default Header;
