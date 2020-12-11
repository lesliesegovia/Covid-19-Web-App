import React from "react";
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div className="navbar">
            <Link to="/about" tabIndex='2'>About</Link>
            <a href="#prevent" tabIndex='2'>Prevent</a>
            <Link to='/displayStats' tabIndex='2'>Stats</Link>
            <Link to='/displayTestSites' tabIndex='2'>Testing-Sites</Link>
        </div>
    );
}

export default Navbar;