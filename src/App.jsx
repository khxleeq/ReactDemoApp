import './styles/App.css';
import {
  BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
import HideText from './components/Hooks/Hidetext';
import MovieRequest from './components/omdb/MovieRequest';
import MovieDetails from './components/omdb/MovieDetails';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import UsersPage from './pages/UsersPage';
import Notfound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <header className='appHeader'>
      <BrowserRouter>
      <nav className='navContainer'>
        <h1 className='navTitle'>MoviesApp</h1>
        <div className='linkContainer'>
          <Link to="/home">Home</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Users">Users</Link>
          <Link to="/Notfound">Error</Link>
          <Link to="/movie_request">Movies</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Contact" element={<ContactPage/>} />
          <Route path="/Users" element={<UsersPage/>} />
          <Route path="/Users/:id" element={<UsersPage />} />
          <Route path="/notfound" element={<Notfound />} />
          <Route path="/movie_request" element={<MovieRequest />} />
          <Route path="/movie_request/:imdbID" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </header>
    </div>
  );
}

export default App;

