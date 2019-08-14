import React, { Component } from "react";
import ReactDOM from "react-dom";

import StartPage from "./make-up/start-page";

class App extends Component {
    render() {
        return (
            <StartPage/>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("web-application"));
