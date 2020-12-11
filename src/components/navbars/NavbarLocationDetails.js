import React from "react";
import { Link } from 'react-router-dom'

function NavbarLocationDetails(){
    return(
        <div className="navbar2">
            <Link to='/' tabIndex='1'>Home</Link>
            <Link to='/displayStats' tabIndex='1'>Stats</Link>
            <Link to='/displayTestSites' tabIndex='1'>Testing-Sites</Link>
            <Link to="/about" tabIndex='1'>About</Link>
        </div>
    );
}

export default NavbarLocationDetails;