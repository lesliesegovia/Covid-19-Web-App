import React from "react";
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div className="navbar">
            <a href="#join" tabIndex='1'>About</a>
            <Link to='/displayStats' tabIndex='1'>Stats</Link>
            <a href="#projects" tabIndex='1'>Prevent</a>
            <Link to='/displayTestSites' tabIndex='1'>Testing</Link>
        </div>
    );
}

export default Navbar;