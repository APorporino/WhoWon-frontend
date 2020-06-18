import React from 'react'
import axios from 'axios'
import Team from './Team'
import './GamePage.css'


class GamePage extends React.Component {
    state = {
        Finalist1: "",
        Finalist2: "",
        Year: null,
        Champion: "",
        sportName: "",
        correct: null,
        score: 0,
        hockey: null,
        baseball: null,
        basketball: null,
        football: null,
        soccer: null,
        golf: null,
        error: ""
    }
    async getSeries(){
        try {
            const response = await axios.get('https://who-won-backend.herokuapp.com/getSeries',{
                params: {
                    baseball: this.state.baseball,
                    hockey: this.state.hockey,
                    golf: this.state.golf,
                    basketball: this.state.basketball,
                    football: this.state.football,
                    soccer: this.state.soccer
                }
            });

            if(this.getRandomInt() === 0){
                this.setState({Finalist1: response.data.Champion, Finalist2: response.data.Finalist, Year: response.data.Year, Champion: response.data.Champion, sportName: response.data.sportName})
            }else{
                this.setState({Finalist1: response.data.Finalist, Finalist2: response.data.Champion, Year: response.data.Year, Champion: response.data.Champion, sportName: response.data.sportName})
            }
        } catch (error) {
            this.setState({error: "Must select at least one sport"})
            console.error(error);
        }
    }

    reset = ()=>{
      this.setState({Finalist1: "", Finalist2: "", Year: null, Champion: "", correct: null, score: 0})
    }

    nextSeries = ()=>{
        this.setState({correct: null})
        this.getSeries()
    }

    userGuess = (finalist)=>{

        if (finalist === this.state.Champion){
            this.setState({correct: true})
            this.setState({score: this.state.score + 1})
        }else {
            this.setState({correct: false})
            this.setState({score: 0})
        }
    }

    // returns either 0 or 1
    getRandomInt() {
        return Math.floor(Math.random() * 2);
    }

    renderStart() {
        return (
            <div>
              <br></br><br></br><br></br><br></br>
                <div className=" ui sixteen column centered grid">
                        <div className="five wide column aligned">
                            <div className="ui checkbox">
                                <input type="checkbox" name="hockey" id="hoceky" onChange={event => this.setState({hockey: event.target.checked})}/>
                                <label>Hockey (NHL) </label>
                            </div>
                        </div>

                        <div className="five wide column aligned">
                            <div className="ui checkbox">
                                <input type="checkbox" name="baseball" id="baseball" onChange={event => this.setState({baseball: event.target.checked})}/>
                                <label>Baseball (MLB) </label>
                            </div>
                        </div>

                        <div className="five wide column aligned">
                            <div className="ui checkbox ">
                                <input type="checkbox" name="soccer" id="soccer" onChange={event => this.setState({soccer: event.target.checked})}/>
                                <label>Soccer (Euro and World Cup)</label>
                            </div>
                        </div>
                </div>
                <div className=" ui three column centered grid">
                        <div className="five wide column aligned">
                            <div className="ui checkbox">
                                <input type="checkbox" name="basketball" id="basketball" onChange={event => this.setState({basketball: event.target.checked})}/>
                                <label>Basketball (NBA) </label>
                            </div>
                        </div>

                        <div className="five wide column aligned">
                            <div className="ui checkbox">
                                <input type="checkbox" name="football" id="football" onChange={event => this.setState({football: event.target.checked})}/>
                                <label>Football (NFL/CFL) </label>
                            </div>
                        </div>

                        <div className="five wide column aligned">
                            <div className="ui checkbox">
                                <input type="checkbox" name="golf" id="golf" onChange={event => this.setState({golf: event.target.checked})}/>
                                <label>Golf (Majors) </label>
                            </div>
                        </div>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                </div>

                <div className=" ui sixteen column centered grid">
                    <div className="ui button blue" onClick={()=> this.nextSeries()}>
                        <div className=" black-text">Start</div>
                    </div>
                    <div className=" sixteen wide column aligned error-text">{this.state.error}</div>
                </div>
            </div>
        )
    }

    renderSuccess(){
      return (
        <div>
            <div className="ui six column centered grid">
                <div className="five wide column aligned">
                      <div className="ui button gray" onClick={this.reset}>
                          <div className=" black-text">Restart</div>
                      </div>
                  </div>
                <div className="six wide column aligned">
                    <div className="score-font black-text">Score: {this.state.score}</div>
                </div>
                <div className="five wide column aligned">
                      <div className="ui button blue" onClick={this.nextSeries}>
                          <div className=" black-text">Next</div>
                      </div>
                  </div>
                  <div className="sixteen wide column aligned">
                        <div className="general-font">Sport: &nbsp;&nbsp;&nbsp;&nbsp; {this.state.sportName}</div> 
                        <div className="general-font">Year: &nbsp;&nbsp;&nbsp;&nbsp; {this.state.Year}</div> 
                    </div>
            </div>
            <div className="ui three column centered divided grid">
                  <div className="column aligned">
                          <Team name={this.state.Finalist1} userGuess={this.userGuess} disabled='disabled'/>
                  </div>
                  
                  <div className="column aligned">
                          <Team name={this.state.Finalist2} userGuess={this.userGuess} disabled='disabled'/>
                  </div>
            </div>
            
            <div className="ui three column centered divided grid">
                <div className=" ten wide column aligned">
                    <div className="ui positive message green inverted segment">
                        CORRECT
                    </div>
                </div>
            </div>
        </div>
    )
    }

    renderFailure() {
        return (
            <div>
                <div className="ui six column centered grid">
                    <div className="five wide column aligned">
                          <div className="ui button gray" onClick={this.reset}>
                              <div className=" black-text">Restart</div>
                          </div>
                      </div>
                    <div className="six wide column aligned">
                        <div className="score-font black-text">Score: {this.state.score}</div>
                    </div>
                    <div className="five wide column aligned">
                          <div className="ui button blue" onClick={this.nextSeries}>
                              <div className=" black-text">Next</div>
                          </div>
                      </div>
                      <div className="sixteen wide column aligned">
                        <div className="general-font">Sport: &nbsp;&nbsp;&nbsp;&nbsp; {this.state.sportName}</div> 
                        <div className="general-font">Year: &nbsp;&nbsp;&nbsp;&nbsp; {this.state.Year}</div> 
                    </div>
                </div>
                <div className="ui three column centered divided grid">
                      <div className="column aligned">
                              <Team name={this.state.Finalist1} userGuess={this.userGuess} disabled='disabled'/>
                      </div>
                      
                      <div className="column aligned">
                              <Team name={this.state.Finalist2} userGuess={this.userGuess} disabled='disabled'/>
                      </div>
                </div>
                
                <div className="ui three column centered divided grid">
                    <div className=" ten wide column aligned">
                        <div className="ui negative message red inverted segment">
                            INCORRECT
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderGame() {
        return (
            <div>
                <div className="ui six column centered grid">
                    <div className="sixteen wide column aligned">
                        <div className="score-font black-text">Score: {this.state.score}</div>
                    </div>
                    
                </div>
                <div className="ui sixteen column centered divided grid">
                    <div className="ten wide column aligned">
                        <div className="general-font">Sport: &nbsp;&nbsp;&nbsp;&nbsp; {this.state.sportName}</div> 
                        <div className="general-font">Year: &nbsp;&nbsp;&nbsp;&nbsp; {this.state.Year}</div> 
                    </div>
                </div>
                <div className="ui three column centered divided grid">
                    <div className="column aligned">
                            <Team name={this.state.Finalist1} userGuess={this.userGuess}/>
                    </div>
                    
                    <div className="column aligned">
                            <Team name={this.state.Finalist2} userGuess={this.userGuess}/>
                    </div>
                </div>
            </div>
        )
    }

    renderContent() {

        // HAS NOT STARTED PLAYING YET
        if (this.state.Finalist1 === ""){
            return <div>{this.renderStart()}</div>
        }
         // SUCCESS MESSAGE
        if (this.state.correct){
            return <div>{this.renderSuccess()}</div>
        }else if (this.state.correct === false){        // INCORRECT MESSAGE
            return <div>{this.renderFailure()}</div>
        }

        // GAME CONTENT
        return <div>{this.renderGame()}</div>
    }
    
    render() {
        return (
            <div>
                {this.renderContent()}     
            </div>
        )
    }

}

export default GamePage