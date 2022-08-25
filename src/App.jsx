import './styles/App.css';
import {
  BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
import Converter from './components/converter';
import Footer from './components/footer';
import Trainer from './components/Trainer';
import Trainee from './components/Trainee';
import Login from './components/Login';
import Car from './components/Car';
import Count from './components/count';
import LoginControl from './components/LoginControl/LoginControl';
import ProductTable from './components/ProductTable';
import FilteredList from './components/FilteredList';
import Cart from './components/CartBasket/Cart';
// import nameUpdate from './components/Hooks/NameUpdate'
import HideText from './components/Hooks/Hidetext';
import FilmRequest from './components/filmRequest';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import UsersPage from './pages/UsersPage';
import Params from './components/Params';
import DataRequests from './components/DataRequests';
import Search from './components/Search';
import Notfound from './pages/NotFound';


function App() {
  // const header = <h1 className='header'>It's reactin' time!</h1>;
  // const HeadFunc = () => <h1 className='reactHeader'>REACT APPLICATION</h1>;
  
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <div className='linkContainer'>
          <Link to="/">home</Link>
          <Link to="/Contact">contact</Link>
          <Link to="/Users">users</Link>
          <Link to="/Notfound">Error</Link>

          {/* <Link to="/search">search</Link>
          <Link to="/cakes">cakes</Link>
          <Link to="/converter">converter</Link>
          <Link to="/login">login</Link>
          <Link to="/cart">cart</Link>
          <Link to="/car">car</Link>
          <Link to="/count">count</Link>
          <Link to="/filmrequest">filmRequest</Link> */}

          </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Contact" element={<ContactPage/>} />
          <Route path="/Users" element={<UsersPage/>} />
          <Route path="/Users/:id" element={<UsersPage />} />
          <Route path="/notfound" element={<Notfound />} />

          {/* <Route path="/cakes" element={<DataRequests />} />
          <Route path="/converter" element={<Converter/>} />
          <Route path="/search" element={<FilteredList/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/car" element={<Car/>} />
          <Route path="/count" element={<Count/>} />
          <Route path="/filmrequest" element={<FilmRequest/>} /> */}
        </Routes>
      <main>
      </main>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

        {/* <Trainer name ="JH" age={28} specialism="Software"/>
        <Trainee name = "Khaleeq" age = {23} cohort="july-enable 2022"/>*/}
    