import { Container } from '@material-ui/core';
import './App.css';
import SimpleBottomNavigation from './components/navigation/MainNav';
import Header from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Search from './pages/Search/Search';
import Series from './pages/Series/Series';

function App() {
  return (
    <>
      <div className="app">
        <Container>
          <Routes>
            <Route exact path='/' element={<Trending />} />
            <Route path='/movies' element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
      <Header />

    </>

  );
}

export default App;
