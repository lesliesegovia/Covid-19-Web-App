import React from "react";
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div className="navbar">
            <Link to="/about" tabIndex='1'>About</Link>
            <Link to='/displayStats' tabIndex='1'>Stats</Link>
            <a href="#prevent" tabIndex='1'>Prevent</a>
            <Link to='/displayTestSites' tabIndex='1'>Testing</Link>
        </div>
    );
}

export default Navbar;