import React, { Component } from 'react'
import Meetings from './setupMeetings/Meetings'
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Meetings></Meetings>
            </div>
        )
    }
}

export default App