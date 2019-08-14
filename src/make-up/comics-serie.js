import React, { Component } from "react";
import "../styles/comics-serie.css";

import MarkedNav from "../components/comics-serie/MarkedNav";
import Episode from "../components/comics-serie/Episode";
import Production from "../components/comics-serie/Production";
import SerieNameDesc from "../components/comics-serie/SerieNameDesc";
import Poster from "../components/comics-serie/Poster";

class ComicsSerie extends Component {
    render() {
        return (
            <div>
                <header>
                    <img src="/images/series/doom-patrol.jpg"/>
                </header>

                <section>
                    <MarkedNav />

                    <div className="serie-inforamtion">
                        <Poster seriesPoster = {require('./images/series/doom-patrol-poster.jpg')}/>

                        <div className="serie-full-description">
                            <SerieNameDesc  serieName = "Doom Patrol"
                                            serieDesc = "American web television series based on the DC Comics superhero team of the same name that premiered on February 15, 2019, on DC Universe. The series features Crazy Jane (Diane Guerrero), Elasti-Woman (April Bowlby), Negative Man (Matt Bomer), Robotman (Brendan Fraser), and The Chief (Timothy Dalton) as the members of the titular Doom Patrol and also stars Joivan Wade as Cyborg and Alan Tudyk as Mr. Nobody. Although Bowlby, Fraser, and Bomer reprise their roles from the DC Universe series Titans, the two shows are set in separate continuities."/>

                            <Production leftProductRole = "Genre"
                                        leftProductDesc = "Action, Adventure,       Comedy-drama, Mystery, Science fiction,Superhero"
                                        rightProductRole = "Starring"
                                        rightProductDes = "Diane Guerrero, April Bowlby,Joivan Wade, Alan Tudyk, Matt Bomer, Brendan Fraser, Timothy Dalton" />

                            <Production leftProductRole = "Narrated by"
                                        leftProductDesc = "Action, Adventure,       Comedy-drama, Mystery, Science fiction,Superhero"
                                        rightProductRole = "Producted by"
                                        rightProductDes = "Greg Berlanti, Jeremy Carver,Geoff Johns, Sarah Schechter, Chris Dingess" />
                        </div>
                    </div>

                    <div className="serie-episodes">
                        <Episode episodeView = {require('./images/series/doom-patrol-1-episode.jpg')}
                                 episodeName = "Pilot"
                                 episodeDesc = "S1:E1 — In the series premiere, the reluctant heroes of the Doom Patrol – Robotman, Negative Man, Elasti-Woman and Crazy Jane face the threat of Mr. Nobody, who’s after The Chief."/>

                        <Episode episodeView = {require('./images/series/doom-patrol-1-episode.jpg')}
                                 episodeName = "Pilot"
                                 episodeDesc = "S1:E1 — In the series premiere, the reluctant heroes of the Doom Patrol – Robotman, Negative Man, Elasti-Woman and Crazy Jane face the threat of Mr. Nobody, who’s after The Chief."/>

                        <Episode episodeView = {require('./images/series/doom-patrol-1-episode.jpg')}
                                 episodeName = "Pilot"
                                 episodeDesc = "S1:E1 — In the series premiere, the reluctant heroes of the Doom Patrol – Robotman, Negative Man, Elasti-Woman and Crazy Jane face the threat of Mr. Nobody, who’s after The Chief."/>

                        <Episode episodeView = {require('./images/series/doom-patrol-1-episode.jpg')}
                                 episodeName = "Pilot"
                                 episodeDesc = "S1:E1 — In the series premiere, the reluctant heroes of the Doom Patrol – Robotman, Negative Man, Elasti-Woman and Crazy Jane face the threat of Mr. Nobody, who’s after The Chief."/>
                    </div>

                </section>
            </div>
        )
    }
}

export default ComicsSerie;