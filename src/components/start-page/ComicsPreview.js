import React, { Component } from "react";

class ComicsPreview extends Component {
    render() {
        return (
            <div className="particullar-comics">
                <img src={this.props.comicsCover}/>
                <a className="icon-name">{this.props.comicsName}</a>
                <a className="icon-desc">{this.props.comicsIssue}</a>
            </div>
        )
    }
}

export default ComicsPreview;