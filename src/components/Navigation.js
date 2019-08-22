import React, {Component} from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul>
                      <li><Link to = "/">               <a href="#">Home</a>        </Link></li>
                      <li><Link to = "/comics-book">    <a href="#">Comics Books</a></Link></li>
                      <li><Link to = "/articles">       <a href="#">Articles</a></Link></li>
                      <li><Link to = "/storylines">     <a href="#">Storylines</a></Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;