import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import './Header-min.css'

const Header = (props)=>{
    return (
        <div className="header">
            <Link to="/" className="theme-font">
                Who Won
            </Link>
        </div>
    )
}

export default Header