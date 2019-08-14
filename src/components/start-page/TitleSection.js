import React, { Component } from "react"

class TitleSection extends Component {
    render() {
        return (
            <div className="title">
                <div className="title-list">{this.props.listName}</div>
                <a className="more">SEE MORE ></a>
            </div>
        )
    }
}

export default TitleSection;