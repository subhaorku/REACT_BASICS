import React from "react";
import { useState ,useReducer} from "react";
import AppContext from "./app-context";
import LogIn from "../Components/LogIn";
import { type } from "@testing-library/user-event/dist/type";

function AuthReducer(state,action) //AuthReducer is a reducer function which is to be passed to useReducer hook and second parameter to be passed to the hook is the default value of state.
{
if(action.type==='LOGIN')
    {
        return (
            {
                yesLoggedIn:true,
            }
        )
    }
// whatever u return from the reducer function will become the newState.
else if(action.type==="LOGOUT")
    {
    return({
        yesLoggedIn:false,
    })
    }
    else {
    return state;
    }
}

const initialauthState ={
    yesLoggedIn:false,
};// Here state is an object with a single property 'yesLoggedIn'.
const AppProvider = ({ children }) => {

    const[authState,dispatchAuth] = useReducer(AuthReducer,initialauthState);//dispatchAuth are basically the actions defined to change authState
    // const [yesLoggedIn, setYesLoggedIn] = useState(false);
    // const handleLoggingIn = () => {
    //     setYesLoggedIn(true);
    // };
    // const handleLoggingOut = () => {
    //     setYesLoggedIn(false);
    // };

    const handleLoggingIn=()=>{
        dispatchAuth({
            type:'LOGIN',
            // payload:
            // {

            // }
        },
        
        );
        
    }

    const handleLoggingOut=()=>{
        dispatchAuth(
            {
                type:"LOGOUT",
                // payload:
                // {

                // }
            }
        )
    }
    return (
        <AppContext.Provider
            value={{ LoggedIn: authState.yesLoggedIn, LoggingIn: handleLoggingIn ,LoggingOut: handleLoggingOut}}
        >
            {/* <h1>helllo context</h1>
      <LogIn /> */}
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
