import React, { Component } from "react";

export default class MainArticle extends Component {
    render() {
        return (
            <div className="main-article">
                <div className="mn-art-cover"></div>
                <div className="mn-art-text">
                    <h2>{this.props.articleHeader}</h2>
                    <h4>{this.props.articleAuthor}</h4>
                </div>
            </div>
        )
    }
}