import Header from './components/Header';
import Container from './UI/Container';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <Header />
      <Container className='mt-4 flex justify-around flex-wrap'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/:productId' element={<Categories />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
