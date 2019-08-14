import React, { Component } from "react";

class ComicsDescs extends Component {
    render() {
        return (
            <div className="comics-book-text-desc">
                <a className="comics-book-strng">{this.props.comicsName}</a>
                <a className="comics-book-desc">{this.props.comicsDesc}</a>
            </div>
        )
    }
}

export default ComicsDescs;