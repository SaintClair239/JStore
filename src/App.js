import Header from './components/Header';
import Container from './UI/Container';
import Home from './components/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import Categories from './components/Categories';
import AboutProduct from './components/AboutProduct';
import LogIn from './components/LogIn';
import PrivateRoutes from './utilities/PrivateRoutes';
import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import Cart from './components/Cart';

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <Header />
      <Container className='mt-4 flex justify-around flex-wrap'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route
            path='home/:categoryNum/:categoryName'
            element={<Categories />}
          />{' '}
          <Route
            path='home/:categoryNum/:categoryName/:index/:productId'
            element={<AboutProduct />}
          />
          <Route
            path='login'
            element={!currentUser ? <LogIn /> : <Navigate to='/home' />}
          />
          <Route
            path='cart'
            element={
              <PrivateRoutes>
                <Cart />
              </PrivateRoutes>
            }
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
