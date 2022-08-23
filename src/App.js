import './App.css';
import Converter from './converter';
import Footer from './footer';
import Trainer from './Trainer';
import Trainee from './Trainee';
import Login from './Login';
import Car from './Car';



function App() {

  const header = <h1 className='header'>It's reactin' time!</h1>;
  
  const HeadFunc = () => <h1>Your header</h1>;
  return (
    <div className="App">
      {header}
      {/* {HeadFunc()} */}
      <HeadFunc/>
      <main>
        {/* <Trainer name ="JH" age={28} specialism="Software"/>
        <Trainee name = "KT" age = {23} cohort="july-enable 2022"/>
        <Converter/>
        <Login/>
        <Trainer name ="Reece" age={25} specialism="DevOps"/> */}
        <Car/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;