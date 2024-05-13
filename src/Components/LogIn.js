import React from 'react'
import { useContext } from 'react';
import AppContext from '../store/app-context';
function LogIn() {
    const ctx = useContext(AppContext);
 const {LoggedIn,LoggingIn} = useContext(AppContext);//Lets Destructure.
  return (
    <div>
    {LoggedIn? "Welcome":<button onClick={LoggingIn}>Login</button> }
    </div>
  )
}

export default LogIn;