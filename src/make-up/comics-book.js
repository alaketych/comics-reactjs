import React, { Component } from "react";
import "../styles/comics-book.css";


import ComicsCover from "../components/comics-book/ComicsCover";
import ComicsDesc from "../components/comics-book/ComicsDescs";
import MarkedNav from "../components/comics-book/MarkedNav";
import ComicsHistory from "../components/comics-book/ComicsHistory";
import ComicsAuthor from "../components/comics-book/ComicsAuthors";

class ComicsBook extends Component {
    render() {
        return (
            <div>
                <header style="background: url('../images/book-comics/RCO007-prew.jpg')">
                    <ComicsCover comicsImage = {require('../images/book-comics/Prelude/RCO007.jpg')}/>
                    <ComicsDesc  comicsName  = "Flash war: Prelude"
                                 comicsDesc  = "Some info about the comics"/>
                </header>

                <section>
                    <MarkedNav />

                    <div className="comics-details">
                        <ComicsHistory textDescription = "The Flash Annual this year doubles as a prelude to Flash War, a highly-publicized event which is coming in May and will supposedly see Barry Allen and Wally West duke it out for the title of the true Flash. So naturally, the issue begins with a tour of the Flash museum – or what’s left of it – in the 25th century as the cops of that time give a rundown of the entire Flash family while investigating Thawne’s murder. But for now we return to the present day of Central City – or rather the recent past, since the Flash War prelude takes place before The Flash #39 – where both Wally Wests are saving people from the Top. Though he’s just as corny a villain as ever, Williamson gets a lot of mileage out of his abilities and justifies needing three speedsters to take him down. After the battle, an energetic and younger-looking Iris West (thank you, Mr. Duce!) is excited to interview Central City’s latest speedster, but Wally is understandably embarrassed and rushes off. Let me just break here to talk about what an excellent job Christian Duce and Howard Porter do on this issue. Porter sets the 25th century apart, with visuals as stunning as they were in The Flash #25 and wonderful Easter eggs out the wazoo. On the flip side, Duce brings the present day to life and makes the battles pop and the main characters shine. And, of course, Hi-Fi’s colors are as vibrant as ever."/>

                        <hr/>

                        <div className="authors">
                            <ComicsAuthor comicsRole = "Writer"
                                          comicsPerson = "Joshua Williamson"/>

                            <ComicsAuthor comicsRole = "Penciler"
                                          comicsPerson = "Howard Porter"/>

                            <ComicsAuthor comicsRole = "Colorist"
                                          comicsPerson = "Hi-Fi"/>

                            <ComicsAuthor comicsRole = "Letterer"
                                          comicsPerson = "Steve Wands"/>

                            <ComicsAuthor comicsRole = "Release Date"
                                          comicsPerson = "02/01/2018"/>
                        </div>
                    </div>

                </section>
            </div>
        )
    }
}

export default ComicsBook;