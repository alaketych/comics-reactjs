import React, { Component } from "react";

export default class Episode extends Component {
    render() {
        return (
            <div className="episode">
                <img                  src = {this.props.episodeView}/>
                <a className="episode-name">{this.props.episodeName}</a>
                <a className="episode-desc">{this.props.episodeDesc}</a>
            </div>
        )
    }
}
