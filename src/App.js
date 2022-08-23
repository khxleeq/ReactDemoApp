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




function App() {

  // const header = <h1 className='header'>It's reactin' time!</h1>;
  
  const HeadFunc = () => <h1 className='reactHeader'>REACT APPLICATION</h1>;
  return (
    <div className="App">
      {/* {header} */}
      {/* {HeadFunc()} */}
      <HeadFunc/>
      <main>
        <Trainer name ="JH" age={28} specialism="Software"/>
        <Trainee name = "KT" age = {23} cohort="july-enable 2022"/>
        <Converter/>
        <Login/>
        <Trainer name ="Reece" age={25} specialism="DevOps"/> 
        <Car/>
        <Count/>
        <LoginControl/>
        <ProductTable/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;