import React, { Component } from "react";

import ComicsPreview from "../ComicsPreview";
import ArticlePreview from "./ArticlePreview";
import TitleSection from "./TitleSection";
import BrowseMoreButton from "./BrowseMoreButton";

export default class AllSection extends Component {
    render() {
        return (
            <div>
                <section>
                <TitleSection listName = "Series"/>

                <div class="comics-list">
                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>

                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>

                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>

                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>

                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>

                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>

                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>
                </div>
                </section>

                <section>
                <TitleSection listName = "Comics books"/>

                <div class="comics-list">
                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>

                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>

                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>

                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>

                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>

                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>

                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>
                </div>
                </section>

                <section>
                <TitleSection listName = "Animated Series"/>

                <div class="comics-list">
                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>

                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>

                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>

                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>

                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>

                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>

                    <ComicsPreview comicsCover = {require('../../images/comics/4_00.jpg')}
                                comicsName  = "Doom Patrol"
                                comicsIssue  = "1 season"/>
                </div>
                </section>

                <section>
                <TitleSection listName = "Popular articles"/>

                <div className="comics-list">
                    <ArticlePreview articleCover = {require('../../images/comics/4_00.jpg')}
                                    articleName = "Where to Start Reading Flash Comics"
                                    articleAuthor = "laketych"/>

                    <ArticlePreview articleCover = {require('../../images/comics/4_00.jpg')}
                                    articleName = "Where to Start Reading Flash Comics"
                                    articleAuthor = "laketych"/>

                    <ArticlePreview articleCover = {require('../../images/comics/4_00.jpg')}
                                    articleName = "Where to Start Reading Flash Comics"
                                    articleAuthor = "laketych"/>

                    <ArticlePreview articleCover = {require('../../images/comics/4_00.jpg')}
                                    articleName = "Where to Start Reading Flash Comics"
                                    articleAuthor = "laketych"/>

                    <ArticlePreview articleCover = {require('../../images/comics/4_00.jpg')}
                                    articleName = "Where to Start Reading Flash Comics"
                                    articleAuthor = "laketych"/>
                </div>
                </section>

                <BrowseMoreButton/>

                <footer/>
            </div>
        )
    }
}