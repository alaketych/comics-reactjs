import React, { Component } from "react"

export default class MarkedNav extends Component {
    render() {
        return (
            <ul className="two-section">
                <li><a href="#">Details</a></li>
                <li><a href="#">Episodes</a></li>
                <li><a href="#">Discussion</a></li>
            </ul>
        )
    }
}