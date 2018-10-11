import React, {Component} from "react";
import {Link} from 'react-router-dom';

const Separator = function(){
    return <span> &middot; </span>;
}

class Navbar extends Component {

    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Separator />
                <Link to="/about">About</Link>
            </div>
        );
    }
}

export default Navbar;
