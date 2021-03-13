import React from "react";
import { HashRouter, Route } from "react-router-dom";
import StartingPage from "./Pages/Start/StartingPage";
import AccessibleHome from "./Pages/Accessible/AccessibleHome";
import ChaoticHome from "./Pages/Chaotic/ChaoticHome";

function App() {
    return (
        <HashRouter>
            <Route exact path="/" component={StartingPage} />
            <Route path="/accessible-view" component={AccessibleHome} />
            <Route path="/chaotic-view" component={ChaoticHome} />
        </HashRouter>
    );
}

export default App;
