import React from "react";
import { Link } from 'react-router-dom'

function NavbarTestSites(){
    return(
        <div className="navbar2">
            <Link to='/' tabIndex='1'>Home</Link>
            <Link to='/displayStats' tabIndex='1'>Stats</Link>
            <a href="#projects" tabIndex='1'>Prevent</a>
            <a href="#join" tabIndex='1'>About</a>
        </div>
    );
}

export default NavbarTestSites;