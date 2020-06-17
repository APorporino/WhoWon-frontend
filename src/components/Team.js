import React from 'react'
import './GamePage.css'
class Team extends React.Component {
    state = {}

    
    render() {
        return (
            <div className="team-font">
                {this.props.name || "Team" }
                <br></br>
                <br></br>
                <br></br>
                <div className="ui center aligned">
                    <div className={`ui button small green ${this.props.disabled}`} onClick={()=> this.props.userGuess(this.props.name)}>
                        <div className="black-text">Choose</div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Team