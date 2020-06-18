import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import './Header-min.css'

const HomePage = () => {
    return (
        <div className="ui grid">
            <div className="ui sixteen wide column instructions">

                <p>Given two finalist from any year can you guess who won the championship?</p>
                <p>Sports included: Hockey (NHL), Baseball (MLB), Basketball (NBA), Football(NFL/CFL), Golf (Majors), Soccer (World and Euro Cup)</p>
            </div>

            <div className="ui four wide column">
                <p>Test your sports knowledge!</p>
            </div>


            <Link to="/gamePage" className="ui eight wide column myButton hover" >
                Play
            </Link>

            <div className="ui three wide column">
                <p>Play against your friends!</p>
            </div>
            <div className="ui two wide column">
                
            </div>
        </div>
    )
}

export default HomePage