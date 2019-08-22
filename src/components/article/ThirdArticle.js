import React, { Component } from "react";

export default class ThirdArticle extends Component {
    render() {
        return (
            <div className="thrd-art">
                <div className="cover">
                    <img src={this.props.articleImage}/>
                </div>
                <div className="text">
                    <h2>{this.props.articleHeader}</h2>
                    <h4>{this.props.articleAuthor}</h4>
                </div>
            </div>
        )
    }
}