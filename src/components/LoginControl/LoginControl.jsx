import {useState} from 'react';
import LoginButton from './LoginBtn';
import LogoutButton from './LogoutBtn';
import Greeting from './Greetings';

const LoginControl = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   
   let button = (isLoggedIn) ? <LogoutButton onClick={() => setIsLoggedIn(false)}/> : <LoginButton onClick={() => setIsLoggedIn(true)}/>
   return(
     <>
         <Greeting isLoggedIn={isLoggedIn}/>
         {button}
     </>
   )
}

export default LoginControl;