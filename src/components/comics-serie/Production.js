import React, { Component } from "react";

export default class Production {
    render() {
        return (
            <div className="serie-person">
                <div className="frst-sectn">
                    <a className="role">{this.props.leftProductRole}</a>
                    <hr/>
                    <a>{this.props.leftProductDesc}</a>
                </div>

                <div className="scnd-sectn">
                    <a className="role">{this.props.rightProductRole}</a>
                    <hr/>
                    <a>{this.props.rightProductDes}</a>
                </div>
            </div>
        )
    }
}