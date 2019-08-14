import React, { Component } from "react"

export default class Poster extends Component {
    render() {
        return (
            <div className="serie-poster">
                <img src = {this.props.seriesPoster}/>
            </div>
        )
    }
}