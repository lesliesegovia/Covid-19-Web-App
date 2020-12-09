import React from "react";
import { Link } from 'react-router-dom'

function NavbarStats(){
    return(
        <div className="navbar2">
            <Link to='/' tabIndex='1'>Home</Link>
            <a href="#projects" tabIndex='1'>Prevent</a>
            <Link to='/displayTestSites' tabIndex='1'>Testing</Link>
            <a href="#join" tabIndex='1'>About</a>
        </div>
    );
}

export default NavbarStats;