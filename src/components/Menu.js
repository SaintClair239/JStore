import React from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

function Menu(props) {
  return (
    <div className='flex flex-col p-2 w-full max-w-sm bg-blue-400 fixed bottom-0 right-0 top-0 z-50 md:hidden'>
      <div className='self-end'>
        <MenuIcon className='w-8 ' onClick={props.onClick} />
      </div>

      <ul>
        <Link to='/search'>
          <div className='flex items-center'>
            <input
              className='rounded-xl px-2'
              type='search'
              placeholder='Search...'
            />
            <SearchIcon className='w-5 mr-6 mx-2' />
          </div>
        </Link>

        <li className='my-2'>Home</li>
        <li className='my-2'>Cart</li>
        <li className='my-2'>Log In</li>
      </ul>
    </div>
  );
}

export default Menu;
