import { createContext } from "react";
const AppContext = createContext({ 
    LoggedIn: false, 
    LoggingIn: {},
});

// we have to pass the structure of  content inside createContext({define the structure of object here}) and pass that as a value in the AppContext.Provider

// "msg" is the default value of context which it will get in App.js

export default AppContext;
//Import this on top of App i.e. in index.js using AppContext.Provider so that the values defined in AppContext will now appear in App.
//giving a value to the Provider is very important, whatever we give as value can be used directly in App.js
