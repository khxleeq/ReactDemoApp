import './styles/App.css';
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
import Cart from './components/Cart';
import nameUpdate from './components/Hooks/NameUpdate'
import HideText from './components/Hooks/Text';





function App() {

  // const header = <h1 className='header'>It's reactin' time!</h1>;
  
  const HeadFunc = () => <h1 className='reactHeader'>REACT APPLICATION</h1>;

  
  return (
    <div className="App">
      {/* {header} */}
      {/* {HeadFunc()} */}
      <HeadFunc/>
      <main>
        {/* <Trainer name ="JH" age={28} specialism="Software"/>
        <Trainee name = "Khaleeq" age = {23} cohort="july-enable 2022"/>
        <Converter/>
        <Login/>
        <Car/>
        <Count/> */}
        {/* <LoginControl/> */}
        {/* <ProductTable/> */}
        {/* <FilteredList/> */}
        {/* <Cart/> */}
        <HideText/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;