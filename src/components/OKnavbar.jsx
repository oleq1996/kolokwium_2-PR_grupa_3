import React,{Component} from "react";
import {Link} from "react-router-dom";

class OKNavbar extends Component {

    render(){
        return (
            <div>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <Link to="/" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                              aria-controls="pills-home" aria-selected="true">Posts</Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link to="/home" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                              aria-controls="pills-home" aria-selected="true">Home</Link>
                    </li>
                </ul>
            </div>
        );}

};

export default OKNavbar;