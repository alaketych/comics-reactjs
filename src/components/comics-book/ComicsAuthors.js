import React, { Component } from "react";

class ComicsAuthors extends Component {
    render() {
        return (
            <div className="info-container">
                <div className="info-title">{this.props.comicsRole}</div>
                <div className="info-data">{this.props.comicsPerson}</div>
            </div>
        )
    }
}

export default ComicsAuthors;