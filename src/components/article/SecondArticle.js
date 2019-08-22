import React, { Component } from "react";

export default class SecondArticle extends Component {
    render() {
        return (
            <div className="scnd-art">
                <div className="cover">
                    <img src={this.props.articleImage}/>
                    <img src="images/articles/batmanhushinterview-news-header-v1.jpg"/>
                </div>
                <div className="text">
                    <h2>{this.props.articleHeader}</h2>
                    <h4>{this.props.articleAuthor}</h4>
                </div>
            </div>
        )
    }
}