import React from 'react'
import { HashRouter , Route } from 'react-router-dom'
import Header from './Header'

import HomePage from './HomePage'
import GamePage from './GamePage'

const App = (props)=>{
    return (
        <div>
            <HashRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={HomePage}/>
                    <Route path='/gamePage' exact component={GamePage}/>
                </div>
            </HashRouter>
        </div>
    )
}

export default App