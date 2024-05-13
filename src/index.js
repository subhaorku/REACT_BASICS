import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppContext from "./store/app-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />

/* 
we will use the bottom content when we want to pass the  content (here,an object with message property) from AppContext to App
<AppContext.Provider value={{
message:"Hello Context"
}}>
<App />
</AppContext.Provider>
*/
);
