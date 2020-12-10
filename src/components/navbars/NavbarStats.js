import React from "react";
import { Link } from 'react-router-dom'

function NavbarStats(){
    return(
        <div className="navbar2">
            <Link to='/' tabIndex='1'>Home</Link>
            <Link to='/displayTestSites' tabIndex='1'>Testing</Link>
            <Link to="/about" tabIndex='1'>About</Link>
        </div>
    );
}

export default NavbarStats;