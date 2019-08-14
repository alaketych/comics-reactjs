import React, { Component } from "react";

export default class SerieNameDesc extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.serieName}</h1>
                <div className="serie-about">{this.props.serieDesc}</div>
            </div>
        )
    }
}