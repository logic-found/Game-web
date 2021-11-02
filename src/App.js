import React from 'react';
import {Route} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.js";
import Tournament from "./Pages/Tournament.js";
import Event from "./Pages/Event.js";
import SignUp from "./Pages/SignUp.js";
import SignIn from "./Pages/SignIn.js";

function App() {
    return(
        <>
        <Route exact path="/" component={Home} />
        <Route exact path="/tournament" component={Tournament} />
        <Route exact path="/event" component={Event} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        </>

    );
}
export default App;