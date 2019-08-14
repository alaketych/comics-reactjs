import React, { Component } from "react"

class ArticlePreview extends Component {
    render() {
        return (
            <div className="particullar-article">
                <img src={this.props.articleCover}/>
                <div className="article-info">
                <a className="article-name">{this.props.articleName}</a>
                <a className="article-desc">{this.props.articleAuthor}</a>
                </div>
            </div>
        )
    }
}

export default ArticlePreview;