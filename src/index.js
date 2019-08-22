import React, { Component } from "react";
import ReactDOM from "react-dom";

import StartPage from "./make-up/start-page";
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <StartPage/>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("web-application"));
