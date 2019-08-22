import React, { Component } from "react";
import "../styles/book-page.css";
import ComicsPreview from "../components/ComicsPreview";

class BookPage extends Component {
    render() {
        return (
            <div>
                <div className="page-title">Browse comics library</div>

                <div className="section">
                    <ComicsPreview  comicsCover = {require('../images/comics/4_00.jpg')}
                                    comicsName  = "Doom Patrol"
                                    comicsIssue = "1 season"/>

                    <ComicsPreview  comicsCover = {require('../images/comics/4_00.jpg')}
                                    comicsName  = "Doom Patrol"
                                    comicsIssue = "1 season"/>

                    <ComicsPreview  comicsCover = {require('../images/comics/4_00.jpg')}
                                    comicsName  = "Doom Patrol"
                                    comicsIssue = "1 season"/>

                    <ComicsPreview comicsCover = {require('../images/comics/4_00.jpg')}
                                    comicsName  = "Doom Patrol"
                                    comicsIssue = "1 season"/>

                    <ComicsPreview  comicsCover = {require('../images/comics/4_00.jpg')}
                                    comicsName  = "Doom Patrol"
                                    comicsIssue = "1 season"/>

                    <ComicsPreview  comicsCover = {require('../images/comics/4_00.jpg')}
                                    comicsName  = "Doom Patrol"
                                    comicsIssue = "1 season"/>

                    <ComicsPreview  comicsCover = {require('../images/comics/4_00.jpg')}
                                    comicsName  = "Doom Patrol"
                                    comicsIssue = "1 season"/>

                    <ComicsPreview  comicsCover = {require('../images/comics/4_00.jpg')}
                                    comicsName  = "Doom Patrol"
                                    comicsIssue = "1 season"/>

                    <ComicsPreview  comicsCover = {require('../images/comics/4_00.jpg')}
                                    comicsName  = "Doom Patrol"
                                    comicsIssue = "1 season"/>

                    <ComicsPreview  comicsCover = {require('../images/comics/4_00.jpg')}
                                    comicsName  = "Doom Patrol"
                                    comicsIssue = "1 season"/>
                </div>
            </div>
        )
    }
}

export default BookPage;