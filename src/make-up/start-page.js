import React, { Component } from "react";
import "../styles/start-page.css";

import Navigation from "../components/start-page/Navigation";
import TitleSection from "../components/start-page/TitleSection";
import ComicsPreview from "../components/start-page/ComicsPreview";
import ArticlePreview from "../components/start-page/ArticlePreview";
import BrowseMoreButton from "../components/start-page/BrowseMoreButton"

class StartPage extends Component {
  render() {
      return (
        <div className="StartPage">

          <Navigation></Navigation>

          <section>
            <TitleSection listName = "Series"/>

            <div class="comics-list">
              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>

              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>

              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>

              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>

              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>

              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>

              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>
            </div>
          </section>

          <section>
            <TitleSection listName = "Comics books"/>

            <div class="comics-list">
              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>

              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>

              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>

              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>

              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>

              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>

              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>
            </div>
          </section>

          <section>
            <TitleSection listName = "Animated Series"/>

            <div class="comics-list">
              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>

              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>

              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>

              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>

              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>

              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>

              <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                             comicsName  = "Doom Patrol"
                             comicsIssue  = "1 season"/>
            </div>
          </section>

          <section>
            <TitleSection listName = "Popular articles"/>

            <div className="comics-list">
              <ArticlePreview articleCover = {require('../images/comics/4_00.jpg')}
                              articleName = "Where to Start Reading Flash Comics"
                              articleAuthor = "laketych"/>

              <ArticlePreview articleCover = {require('../images/comics/4_00.jpg')}
                              articleName = "Where to Start Reading Flash Comics"
                              articleAuthor = "laketych"/>

              <ArticlePreview articleCover = {require('../images/comics/4_00.jpg')}
                              articleName = "Where to Start Reading Flash Comics"
                              articleAuthor = "laketych"/>

              <ArticlePreview articleCover = {require('../images/comics/4_00.jpg')}
                              articleName = "Where to Start Reading Flash Comics"
                              articleAuthor = "laketych"/>

              <ArticlePreview articleCover = {require('../images/comics/4_00.jpg')}
                              articleName = "Where to Start Reading Flash Comics"
                              articleAuthor = "laketych"/>
            </div>
          </section>

          <BrowseMoreButton/>

          <footer>
          </footer>
        </div>
    )
  }
}

export default StartPage;
