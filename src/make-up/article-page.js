import React, { Component } from "react";
import "../styles/article-page.css"
import MainArticle from "../components/article/MainArticle";
import SecondArticle from "../components/article/SecondArticle";
import ThirdArticle from "../components/article/ThirdArticle";

export default class ArticlePage extends Component {
    render() {
        return (
            <section>
                <h1 className="hline-bottom">Saturday, 27 August</h1>
                <div className="data-news">
                    <MainArticle articleHeader="Is Artemis Thirsty for Her Brother-in-Law? A DC DAILY Investigation"
                                 articleAuthor="laketych" />
                    <SecondArticle  articleImage ={require('../images/article/batmanhushinterview-news-header-v1.jpg')}
                                    articleHeader="Is Artemis Thirsty for Her Brother-in-Law? A DC DAILY Investigation"
                                    articleAuthor="laketych" />
                    <ThirdArticle   articleImage ={require('../images/article/batmanhushinterview-news-header-v1.jpg')}
                                    articleHeader="Is Artemis Thirsty for Her Brother-in-Law? A DC DAILY Investigation"
                                    articleAuthor="laketych" />
                </div>
            </section>
        )
    }
}