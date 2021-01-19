import React, { Component } from 'react'
import Meetings from './components/Meetings'
import CreateMeeting from './components/CreateMeeting'
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Meetings></Meetings>
            </div>
        )
    }
}

export default App