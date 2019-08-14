import React, { Component } from "react";

class ComicsHistory extends Component {
    render() {
        return (
            <div className="full-desciption">
                <a>{this.props.textDescription}</a>
            </div>
        )
    }
}

export default ComicsHistory;