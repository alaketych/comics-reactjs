import React, {Component} from "react";

class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a className="active" href="#">Home</a></li>
                    <li><a href="#">Comics Books</a></li>
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">Encyclopedia</a></li>
                    <li><a href="#">Storylines</a></li>
                    <li><a href="#">DC Universe</a></li>
                    <li><a href="#">Marvel</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;