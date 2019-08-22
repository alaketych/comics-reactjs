import React, { Component } from "react";
import BookPage from "./book-page";
import ArticlePage from "./article-page";
import "../styles/start-page.css";
import Navigation from "../components/Navigation";
import AllSection from "../components/start-page/AllSection";

import { Switch, Route} from "react-router-dom";

export default class StartPage extends Component {
  render() {
      return (
        <div className="StartPage">
          <Navigation></Navigation>
          <Switch>
            <Route path="/" exact      component={ AllSection }/>
            <Route path="/comics-book" component={ BookPage }/>
            <Route path="/articles"     component={ ArticlePage }/>
          </Switch>
        </div>
    )
  }
}
