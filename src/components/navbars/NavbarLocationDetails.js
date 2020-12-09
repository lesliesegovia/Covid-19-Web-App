import React from "react";
import { Link } from 'react-router-dom'

function NavbarLocationDetails(){
    return(
        <div className="navbar2">
            <Link to='/' tabIndex='1'>Home</Link>
            <Link to='/displayStats' tabIndex='1'>Stats</Link>
            <Link to='/displayTestSites' tabIndex='1'>Testing</Link>
            <a href="#projects" tabIndex='1'>Prevent</a>
            <a href="#join" tabIndex='1'>About</a>
        </div>
    );
}

export default NavbarLocationDetails;