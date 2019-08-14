import React, { Component } from "react"

class ComicsCover extends Component {
    render() {
        return (
            <div class="comics-book-cover">
                <img className="comics-logo" src={this.props.comicsImage}/>
            </div>
        )
    }
}

export default ComicsCover;