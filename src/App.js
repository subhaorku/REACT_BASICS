import React , {useState,useContext}  from 'react';
import Navbar from './Components/Navbar/Navbar';
import Buttonn from './Components/Buttonn';
import Buttonnn from './Components/Buttonnn';
import AppContext from './store/app-context';
import LogIn from './Components/LogIn';
import AppProvider from './store/AppProvider';
import { useReducer } from 'react';
const desc = "WELCOME TO MY APPLICATION";
const text = "Click here!";
const showDescription = false;
// const islogIn = false;
const getRandomNumber = () =>{
  return Math.floor(Math.random()*200);
}
{/*Passing simple Javascript as prop*/}
function Greeting(props) 
{
 return <h2>Hello {props.name} !*!</h2>;
}

function Button({onClick,content})
{
return <button onClick={onClick}>{content}</button>;
}

{/* Use of useState Hook*/}
function Counter()
{
     const[count,setcount] = useState(0);
       
     const increment = () => {
         setcount(count+1);
     };

     return(
      <div>
        <p>Count:{count}</p>
        <button onClick={increment}>Click me to Increment!</button>
      </div>
     )
}

{/* Demonstration of Conditional Rendering in React */}

function LogInControl()
{
  const[isloggedin,setisloggedin] = useState(false);

  const handleLogin = () =>{
      setisloggedin(true);
  }

  const handleLogout = () =>{
    setisloggedin(false);
  }

  

  return(
    <div>
      {
        isloggedin ? <button onClick={handleLogout}>Logout!</button> : <button onClick={handleLogin}>Login!!</button>
      }
    </div>
  )
}
function App() {


  // const[yesLoggedIn,setYesLoggedIn] = useState(false);
  //const context = useContext(AppContext);//useContext will get the value from its provider and that provider should be there in the component above the comp in which useContext is there

  
  
  const handleClick = () => alert("You Clicked me!!");
  console.log("App.js rendering");
  // const handleLoggingIn=()=>{
  //   setYesLoggedIn(true);
  // }
  return (
    <div>
      {/* <Navbar isloggedin = {islogIn && 1}/> */}
      <Navbar />
      {
      /*Inline styling 
      for inline styling we basically can use style tag 
      and in style tag we have to give object
      here blue curly brace is just to tell the jsx that we aree gonna write a jsx  code therein 
      and the yellow curly brace is to define an object
      */}
      <h1
      style=
      {{
        color: "black",
        backgroundColor : "yellow",
        fontSize : 70
      }}>
      Hi this is my first React App!</h1>
      <p>I am a Random Number:{getRandomNumber()}</p>
      {showDescription && <p>{desc}</p>}   {/*Conditional Rendering*/}
      {showDescription ? <p>{desc}</p>: "No Description"} {/*Use of Ternary Operator*/}
      <Greeting name="Subhasini"/>
      <Greeting name="Shraman"/>
      <Greeting name="Tanis"/>

      <Button onClick= {handleClick} content = {"Click me friend!!"}></Button>
      <Buttonn text={text}/>
      <Buttonnn text={text}/>
  
      <Counter/>
      <LogIn/>
      {/* <AppContext.Provider value={{LoggedIn:yesLoggedIn,LoggingIn:handleLoggingIn}}>
      <h1>helllo context</h1>
     <LogIn/>
      </AppContext.Provider> */}
      {/* <h1>{context.message}</h1> */}
      <AppProvider >
      <h1>Hello from Context</h1>
      <LogIn/>
      </AppProvider>
    </div>
  );
}

export default App;
